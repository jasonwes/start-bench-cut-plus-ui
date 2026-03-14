#!/usr/bin/env python3
"""
Fetch active NBA players for the 2025-26 season and their per-game stats
using nba_api (no API key required). Writes JSON for the Angular app.

Usage:
  pip install -r scripts/requirements.txt
  python scripts/fetch_nba_players.py

Output: public/data/nba-players-2025-26.json
"""

import json
import os
import sys

try:
    from nba_api.stats.endpoints import commonallplayers, leaguedashplayerstats
except ImportError:
    print("Run: pip install nba_api", file=sys.stderr)
    sys.exit(1)

SEASON = "2025-26"
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "data")
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "nba-players-2025-26.json")


def _div(row, col, divisor, decimals):
    val = row.get(col)
    if val is None or str(val) == "nan":
        return None
    return round(float(val) / divisor, decimals)


def _pct(row, num_col, den_col):
    den = row.get(den_col)
    if den is None or str(den) == "nan" or float(den) == 0:
        return None
    num = row.get(num_col)
    if num is None or str(num) == "nan":
        return None
    return round(float(num) / float(den), 3)


def main():
    print(f"Fetching active players for {SEASON}...")
    try:
        all_players = commonallplayers.CommonAllPlayers(
            league_id="00",
            season=SEASON,
            is_only_current_season=1,
        )
        players_df = all_players.get_data_frames()[0]
    except Exception as e:
        print(f"CommonAllPlayers failed: {e}", file=sys.stderr)
        sys.exit(1)

    print(f"Fetching league dash player stats for {SEASON}...")
    try:
        stats = leaguedashplayerstats.LeagueDashPlayerStats(season=SEASON)
        stats_df = stats.get_data_frames()[0]
    except Exception as e:
        print(f"LeagueDashPlayerStats failed: {e}", file=sys.stderr)
        sys.exit(1)

    # Merge: CommonAllPlayers has PERSON_ID, DISPLAY_FIRST_LAST; LeagueDashPlayerStats has PLAYER_ID, PTS, REB, AST (totals), GP
    players_df["PERSON_ID"] = players_df["PERSON_ID"].astype(stats_df["PLAYER_ID"].dtype)
    merged = players_df.merge(
        stats_df,
        left_on="PERSON_ID",
        right_on="PLAYER_ID",
        how="left",
        suffixes=("", "_stats"),
    )

    # Build list matching our Angular Player interface: id, name, headshotUrl, stats
    # LeagueDashPlayerStats: MIN, PTS, REB, AST, STL, BLK, FGM, FGA, FG3M, FG3A
    # eFG% = (FGM + 0.5 * FG3M) / FGA; 3pt% = FG3M / FG3A; STOCKS = STL + BLK per game; PRA = PTS+REB+AST per game
    out = []
    for _, row in merged.iterrows():
        pid = str(int(row["PERSON_ID"]))
        name = row["DISPLAY_FIRST_LAST"]
        gp = row.get("GP")
        if gp is not None and str(gp) != "nan" and float(gp) > 0:
            gp = float(gp)
            ppg = _div(row, "PTS", gp, 1)
            rpg = _div(row, "REB", gp, 1)
            apg = _div(row, "AST", gp, 1)
            min_val = row.get("MIN")
            mpg = round(float(min_val) / gp, 1) if min_val is not None and str(min_val) != "nan" else None
            stl_pg = _div(row, "STL", gp, 1)
            blk_pg = _div(row, "BLK", gp, 1)
            stocks = round(stl_pg + blk_pg, 1) if stl_pg is not None and blk_pg is not None else None
            pra = round(ppg + rpg + apg, 1) if ppg is not None and rpg is not None and apg is not None else None
            fg3_pct = _pct(row, "FG3M", "FG3A")
            fgm, fga = row.get("FGM"), row.get("FGA")
            if fga is not None and str(fga) != "nan" and float(fga) > 0 and fgm is not None and str(fgm) != "nan":
                fg3m = row.get("FG3M")
                fg3m_val = float(fg3m) if fg3m is not None and str(fg3m) != "nan" else 0
                efg_pct = round((float(fgm) + 0.5 * fg3m_val) / float(fga), 3)
            else:
                efg_pct = None
        else:
            ppg = rpg = apg = mpg = stocks = pra = fg3_pct = efg_pct = None
        out.append({
            "id": pid,
            "name": name,
            "headshotUrl": "",
            "stats": {
                "ppg": ppg,
                "rpg": rpg,
                "apg": apg,
                "mpg": mpg,
                "fg3_pct": fg3_pct,
                "efg_pct": efg_pct,
                "stocks": stocks,
                "pra": pra,
            },
        })

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2)

    print(f"Wrote {len(out)} players to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()

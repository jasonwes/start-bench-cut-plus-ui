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

    # Build list matching our Angular Player interface: id, name, headshotUrl (placeholder), stats { ppg, rpg, apg, mpg }
    # LeagueDashPlayerStats has MIN (total minutes); mpg = MIN / GP
    out = []
    for _, row in merged.iterrows():
        pid = str(int(row["PERSON_ID"]))
        name = row["DISPLAY_FIRST_LAST"]
        gp = row.get("GP")
        if gp is not None and str(gp) != "nan" and float(gp) > 0:
            gp = float(gp)
            ppg = round(float(row["PTS"]) / gp, 1) if row.get("PTS") is not None and str(row["PTS"]) != "nan" else None
            rpg = round(float(row["REB"]) / gp, 1) if row.get("REB") is not None and str(row["REB"]) != "nan" else None
            apg = round(float(row["AST"]) / gp, 1) if row.get("AST") is not None and str(row["AST"]) != "nan" else None
            min_val = row.get("MIN")
            mpg = round(float(min_val) / gp, 1) if min_val is not None and str(min_val) != "nan" else None
        else:
            ppg = rpg = apg = mpg = None
        out.append({
            "id": pid,
            "name": name,
            "headshotUrl": "",  # Filled by frontend placeholder or headshot API later
            "stats": {
                "ppg": ppg,
                "rpg": rpg,
                "apg": apg,
                "mpg": mpg,
            },
        })

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2)

    print(f"Wrote {len(out)} players to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()

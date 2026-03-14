/**
 * Represents an NBA player for the Start / Bench / Cut game.
 * Later: headshotUrl and stats will come from external APIs.
 */
export interface Player {
  id: string;
  name: string;
  headshotUrl: string;
  /** Optional: current season box score averages */
  stats?: {
    ppg?: number;
    rpg?: number;
    apg?: number;
    /** Minutes per game (for pool filter e.g. 10+ mpg) */
    mpg?: number;
    /** 3pt% (0–1, e.g. 0.372) */
    fg3_pct?: number;
    /** Effective FG% (0–1) */
    efg_pct?: number;
    /** Steals + blocks per game */
    stocks?: number;
    /** Points + rebounds + assists per game */
    pra?: number;
    [key: string]: number | undefined;
  };
}

export type RosterSlot = 'start' | 'bench' | 'cut';

export interface RosterAssignment {
  start: Player | null;
  bench: Player | null;
  cut: Player | null;
}

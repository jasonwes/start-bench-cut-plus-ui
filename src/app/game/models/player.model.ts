/**
 * Represents an NBA player for the Start / Bench / Cut game.
 * Later: headshotUrl and stats will come from external APIs.
 */
export interface Player {
  id: string;
  name: string;
  headshotUrl: string;
  /** Optional: current season box score averages (for future API) */
  stats?: {
    ppg?: number;
    rpg?: number;
    apg?: number;
    /** Minutes per game (for pool filter e.g. 10+ mpg) */
    mpg?: number;
    [key: string]: number | undefined;
  };
}

export type RosterSlot = 'start' | 'bench' | 'cut';

export interface RosterAssignment {
  start: Player | null;
  bench: Player | null;
  cut: Player | null;
}

import { Player } from '../models/player.model';

/** Placeholder image base - replace with real headshots from API later */
const placeholder = (name: string) =>
  `https://placehold.co/200x260/252640/a0a0b0?text=${encodeURIComponent(name.split(' ').map(n => n[0]).join(''))}`;

/**
 * Dummy groupings of 3 active NBA players for UI development.
 * Later: replace with API-driven semi-random groupings.
 */
const s = (ppg: number, rpg: number, apg: number, fg3: number, efg: number, stocks: number, mpg = 28) =>
  ({ ppg, rpg, apg, pra: Math.round((ppg + rpg + apg) * 10) / 10, fg3_pct: fg3, efg_pct: efg, stocks, mpg });

export const DUMMY_GROUPINGS: Player[][] = [
  [
    { id: '1', name: 'Trey Murphy III', headshotUrl: placeholder('Trey Murphy III'), stats: { ...s(14.2, 4.8, 1.5, 0.384, 0.582, 0.9) } },
    { id: '2', name: 'Bennedict Mathurin', headshotUrl: placeholder('Bennedict Mathurin'), stats: { ...s(16.2, 4.1, 1.9, 0.361, 0.548, 0.6) } },
    { id: '3', name: 'O.G. Anunoby', headshotUrl: placeholder('O.G. Anunoby'), stats: { ...s(14.1, 4.7, 1.9, 0.391, 0.572, 1.8) } }
  ],
  [
    { id: '4', name: 'Anthony Edwards', headshotUrl: placeholder('Anthony Edwards'), stats: { ...s(25.9, 5.4, 5.1, 0.357, 0.541, 1.4) } },
    { id: '5', name: 'Paolo Banchero', headshotUrl: placeholder('Paolo Banchero'), stats: { ...s(22.6, 6.9, 5.4, 0.338, 0.531, 1.0) } },
    { id: '6', name: 'Chet Holmgren', headshotUrl: placeholder('Chet Holmgren'), stats: { ...s(12.9, 7.9, 2.4, 0.352, 0.589, 3.2) } }
  ],
  [
    { id: '7', name: 'Victor Wembanyama', headshotUrl: placeholder('Victor Wembanyama'), stats: { ...s(21.3, 10.7, 3.8, 0.325, 0.552, 4.5) } },
    { id: '8', name: 'Jalen Brunson', headshotUrl: placeholder('Jalen Brunson'), stats: { ...s(28.7, 3.6, 7.4, 0.401, 0.568, 0.5) } },
    { id: '9', name: 'Shai Gilgeous-Alexander', headshotUrl: placeholder('Shai Gilgeous-Alexander'), stats: { ...s(30.1, 5.5, 6.2, 0.355, 0.563, 1.6) } }
  ]
];

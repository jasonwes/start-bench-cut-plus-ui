import { Player } from '../models/player.model';

/** Placeholder image base - replace with real headshots from API later */
const placeholder = (name: string) =>
  `https://placehold.co/200x260/252640/a0a0b0?text=${encodeURIComponent(name.split(' ').map(n => n[0]).join(''))}`;

/**
 * Dummy groupings of 3 active NBA players for UI development.
 * Later: replace with API-driven semi-random groupings.
 */
export const DUMMY_GROUPINGS: Player[][] = [
  [
    { id: '1', name: 'Trey Murphy III', headshotUrl: placeholder('Trey Murphy III'), stats: { ppg: 14.2, rpg: 4.8, apg: 1.5 } },
    { id: '2', name: 'Bennedict Mathurin', headshotUrl: placeholder('Bennedict Mathurin'), stats: { ppg: 16.2, rpg: 4.1, apg: 1.9 } },
    { id: '3', name: 'O.G. Anunoby', headshotUrl: placeholder('O.G. Anunoby'), stats: { ppg: 14.1, rpg: 4.7, apg: 1.9 } }
  ],
  [
    { id: '4', name: 'Anthony Edwards', headshotUrl: placeholder('Anthony Edwards'), stats: { ppg: 25.9, rpg: 5.4, apg: 5.1 } },
    { id: '5', name: 'Paolo Banchero', headshotUrl: placeholder('Paolo Banchero'), stats: { ppg: 22.6, rpg: 6.9, apg: 5.4 } },
    { id: '6', name: 'Chet Holmgren', headshotUrl: placeholder('Chet Holmgren'), stats: { ppg: 12.9, rpg: 7.9, apg: 2.4 } }
  ],
  [
    { id: '7', name: 'Victor Wembanyama', headshotUrl: placeholder('Victor Wembanyama'), stats: { ppg: 21.3, rpg: 10.7, apg: 3.8 } },
    { id: '8', name: 'Jalen Brunson', headshotUrl: placeholder('Jalen Brunson'), stats: { ppg: 28.7, rpg: 3.6, apg: 7.4 } },
    { id: '9', name: 'Shai Gilgeous-Alexander', headshotUrl: placeholder('Shai Gilgeous-Alexander'), stats: { ppg: 30.1, rpg: 5.5, apg: 6.2 } }
  ]
];

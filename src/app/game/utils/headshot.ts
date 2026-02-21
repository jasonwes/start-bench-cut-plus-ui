/**
 * NBA.com CDN headshot URL by player (person) ID.
 * See: https://cdn.nba.com/headshots/nba/latest/1040x760/{personId}.png
 */
const NBA_HEADSHOT_BASE = 'https://cdn.nba.com/headshots/nba/latest/1040x760';

export function getNbaHeadshotUrl(personId: string): string {
  return `${NBA_HEADSHOT_BASE}/${personId}.png`;
}

export function placeholderHeadshot(name: string): string {
  const initials = name.split(' ').map((n) => n[0]).join('');
  return `https://placehold.co/200x260/252640/a0a0b0?text=${encodeURIComponent(initials)}`;
}

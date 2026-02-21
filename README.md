# Start Bench Cut — UI

Angular + PrimeNG frontend for the **Start Bench Cut** game: drag three NBA players into **Start**, **Bench**, or **Cut** (roster-style “Fuck Marry Kill”).

## Prerequisites

- **Node.js** 18.19.1+ (or 20.11.1+, 22+). Angular 18 and the build tools require Node 18+.
- **npm** 8+

If you're on Node 16, upgrade (e.g. from [nodejs.org](https://nodejs.org/) or via `nvm`).

## Run locally

```bash
npm install
npm start
```

Open **http://localhost:4200**. You should see three drop zones (Start / Bench / Cut), three draggable player cards with dummy names and placeholder images, and Previous/Next to switch groups.

## What’s in this repo

- **Angular 18** standalone app with **PrimeNG 18** (Aura theme).
- **Game screen**: three droppable zones (green / yellow / red), three draggable player cards, box-score placeholders (PPG, RPG, APG), Previous/Next for multiple groups.
- **Dummy data**: `src/app/game/data/dummy-players.ts` — three groups of three players (names + placeholder images + fake stats). Replace with API data later.
- **Models**: `src/app/game/models/player.model.ts` — `Player`, `RosterSlot`, `RosterAssignment` ready for real APIs.

## Next steps (APIs)

When you’re ready:

1. **Active NBA players** — call an external API (e.g. ESPN, NBA.com, or a public “current roster” API) to get a list of active players.
2. **Headshots** — use the same or another API for image URLs and set `Player.headshotUrl`.
3. **Box score averages** — fetch current-season stats (PPG, RPG, APG, etc.) and set `Player.stats`.

You can do this from Angular with `HttpClient` (and optionally a thin backend only if you need to hide keys or aggregate sources). The UI is already wired to display `headshotUrl` and `stats` from each `Player`.

## Build

```bash
npm run build
```

Output is in `dist/start-bench-cut-plus-ui`.

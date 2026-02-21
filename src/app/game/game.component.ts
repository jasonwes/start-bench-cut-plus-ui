import { Component, signal, computed, inject, OnInit } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
import { ButtonModule } from 'primeng/button';

import { Player, RosterAssignment, RosterSlot } from './models/player.model';
import { DUMMY_GROUPINGS } from './data/dummy-players';
import { NbaDataService } from './services/nba-data.service';
import { placeholderHeadshot } from './utils/headshot';

const DRAG_SCOPE = 'players';
const GROUP_SIZE = 3;
const MPG_THRESHOLD_MIN = 0;
const MPG_THRESHOLD_MAX = 48;

/** Shuffle array (Fisher–Yates) and return chunks of size n. */
function shuffledGroupings(players: Player[], groupSize: number): Player[][] {
  const copy = [...players];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  const groups: Player[][] = [];
  for (let i = 0; i < copy.length; i += groupSize) {
    const chunk = copy.slice(i, i + groupSize);
    if (chunk.length === groupSize) groups.push(chunk);
  }
  return groups;
}

function hasMinMpg(player: Player, min: number): boolean {
  const mpg = player.stats?.mpg;
  return mpg != null && mpg >= min;
}

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [DragDropModule, ButtonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  private readonly nbaData = inject(NbaDataService);

  readonly SCOPE = DRAG_SCOPE;
  readonly slots: RosterSlot[] = ['start', 'bench', 'cut'];
  readonly mpgMin = MPG_THRESHOLD_MIN;
  readonly mpgMax = MPG_THRESHOLD_MAX;
  readonly allPlayers = signal<Player[]>([]);
  /** Current mpg threshold value (displayed number). */
  readonly mpgThreshold = signal(10);
  /** Whether the mpg filter is active (number click toggles this). */
  readonly mpgFilterEnabled = signal(false);
  readonly groupings = signal<Player[][]>(DUMMY_GROUPINGS);
  readonly currentIndex = signal(0);
  readonly assignment = signal<RosterAssignment>({
    start: null,
    bench: null,
    cut: null
  });

  readonly currentPlayers = computed(() => this.groupings()[this.currentIndex()] ?? []);
  readonly currentAssignment = computed(() => this.assignment());

  /** Player IDs for which the headshot image failed to load (404 etc.); use placeholder. */
  readonly failedHeadshotIds = signal<Set<string>>(new Set());

  getHeadshotUrl(player: Player): string {
    if (this.failedHeadshotIds().has(player.id)) return placeholderHeadshot(player.name);
    return player.headshotUrl || placeholderHeadshot(player.name);
  }

  onHeadshotError(playerId: string): void {
    this.failedHeadshotIds.update((s) => {
      const next = new Set(s);
      next.add(playerId);
      return next;
    });
  }

  ngOnInit(): void {
    this.nbaData.getPlayers().subscribe((players) => {
      this.allPlayers.set(players);
      this.updateGroupings();
    });
  }

  private updateGroupings(): void {
    const all = this.allPlayers();
    const useFilter = this.mpgFilterEnabled();
    const threshold = this.mpgThreshold();
    const pool = useFilter
      ? all.filter((p) => hasMinMpg(p, threshold))
      : all;
    if (pool.length >= GROUP_SIZE) {
      this.groupings.set(shuffledGroupings(pool, GROUP_SIZE));
    } else {
      this.groupings.set(all.length >= GROUP_SIZE ? shuffledGroupings(all, GROUP_SIZE) : DUMMY_GROUPINGS);
    }
    this.currentIndex.set(0);
    this.assignment.set({ start: null, bench: null, cut: null });
  }

  decrementMpgThreshold(): void {
    this.mpgThreshold.update((v) => Math.max(MPG_THRESHOLD_MIN, v - 1));
    if (this.mpgFilterEnabled()) this.updateGroupings();
  }

  incrementMpgThreshold(): void {
    this.mpgThreshold.update((v) => Math.min(MPG_THRESHOLD_MAX, v + 1));
    if (this.mpgFilterEnabled()) this.updateGroupings();
  }

  toggleMpgFilter(): void {
    this.mpgFilterEnabled.update((v) => !v);
    this.updateGroupings();
  }

  private draggedPlayer: Player | null = null;

  dragStart(player: Player): void {
    this.draggedPlayer = player;
  }

  dragEnd(): void {
    this.draggedPlayer = null;
  }

  drop(slot: RosterSlot): void {
    if (!this.draggedPlayer) return;
    const current = this.assignment();
    const next: RosterAssignment = { ...current };
    if (current.start?.id === this.draggedPlayer.id) next.start = null;
    if (current.bench?.id === this.draggedPlayer.id) next.bench = null;
    if (current.cut?.id === this.draggedPlayer.id) next.cut = null;
    next[slot] = this.draggedPlayer;
    this.assignment.set(next);
    this.draggedPlayer = null;
  }

  clearSlot(slot: RosterSlot): void {
    this.assignment.update(a => ({ ...a, [slot]: null }));
  }

  previous(): void {
    const idx = this.currentIndex();
    if (idx > 0) {
      this.currentIndex.set(idx - 1);
      this.assignment.set({ start: null, bench: null, cut: null });
    }
  }

  next(): void {
    const idx = this.currentIndex();
    const groups = this.groupings();
    if (idx < groups.length - 1) {
      this.currentIndex.set(idx + 1);
      this.assignment.set({ start: null, bench: null, cut: null });
    }
  }

  getSlotLabel(slot: RosterSlot): string {
    return slot.charAt(0).toUpperCase() + slot.slice(1);
  }

  getSlotClass(slot: RosterSlot): string {
    return `drop-zone drop-zone-${slot}`;
  }
}

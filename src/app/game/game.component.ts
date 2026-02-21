import { Component, signal, computed } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
import { ButtonModule } from 'primeng/button';

import { Player, RosterAssignment, RosterSlot } from './models/player.model';
import { DUMMY_GROUPINGS } from './data/dummy-players';

const DRAG_SCOPE = 'players';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [DragDropModule, ButtonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  readonly SCOPE = DRAG_SCOPE;
  readonly slots: RosterSlot[] = ['start', 'bench', 'cut'];
  readonly groupings = DUMMY_GROUPINGS;
  readonly currentIndex = signal(0);
  readonly assignment = signal<RosterAssignment>({
    start: null,
    bench: null,
    cut: null
  });

  readonly currentPlayers = computed(() => this.groupings[this.currentIndex()] ?? []);
  readonly currentAssignment = computed(() => this.assignment());

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
    if (idx < this.groupings.length - 1) {
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

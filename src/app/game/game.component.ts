import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  takeCardAnimation: boolean = false;

  takeCard() {
    this.takeCardAnimation = true;
    setTimeout(() => {
      this.takeCardAnimation = false;
    }, 2400); // Duration of the flip and move animation
  }
}

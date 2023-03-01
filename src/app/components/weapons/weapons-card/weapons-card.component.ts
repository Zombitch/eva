import { Component, Input } from '@angular/core';
import { Weapon } from 'src/app/models/weapon';

@Component({
  selector: 'weapons-card',
  templateUrl: './weapons-card.component.html',
  styleUrls: ['./weapons-card.component.scss']
})
export class WeaponsCardComponent {

  // Toutes les armes
  @Input() weapons: Weapon[] = []; 
}

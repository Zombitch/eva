import { Component, Input } from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import { Weapon } from 'src/app/models/weapon';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'weapons-card',
  templateUrl: './weapons-card.component.html',
  styleUrls: ['./weapons-card.component.scss']
})
export class WeaponsCardComponent {

  // Toutes les armes
  @Input() weapons: Weapon[] = [];

  // The weapons to compare
  weaponSlots: Weapon[]= [];

  breakpoint: string= "";
  breakpointMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([Breakpoints.XSmall,  Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]).subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.breakpoint = this.breakpointMap.get(query) ?? '';
          }
        }
      });
  }

  onSelectWeapon(slot:number, weapon:Weapon){
    if(slot === 0){
      this.weaponSlots[0] = weapon;
    }
    else if(slot ===1){
      this.weaponSlots[1] = weapon;
    }
  }

  onDeselectWeapon(slot:number){
    this.weaponSlots[slot] = {};
  }
}

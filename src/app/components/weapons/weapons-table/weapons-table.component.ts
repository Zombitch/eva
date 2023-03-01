import { Component, Input, AfterViewInit } from '@angular/core';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Weapon } from 'src/app/models/weapon';

@Component({
  selector: 'weapons-table',
  templateUrl: './weapons-table.component.html',
  styleUrls: ['./weapons-table.component.scss']
})
export class WeaponsTableComponent {

  // Toutes les armes
  @Input() weapons: Weapon[] = []; 

  // Gestion des entete du tableau
  columnNames: string[] = ['name', 'damage', 'fireRate'];
  displayedColumnNames: string[] = this.columnNames;

  // Filtre et options
  filteredWeapons: Weapon[] = []; // Les armes qui sont filtrés et affichés dans le tableau
  
  constructor() {
    this.filteredWeapons = this.weapons.filter(weapon => !weapon.hidden);
  }

  filter(event: MatChipSelectionChange, weaponName: string): void{
    const weapon: Weapon|undefined = this.weapons.find(w => w.name === weaponName);
    if(weapon) weapon.hidden = !event.selected;

    if(!event.selected) this.filteredWeapons = this.filteredWeapons.filter(w => w.name !== weaponName);
    else this.filteredWeapons = this.weapons.filter(w => w.name === weaponName || this.filteredWeapons.includes(w));
    
    localStorage.setItem("weapons", JSON.stringify(this.weapons));
  }

  isDisplayed(weapon: Weapon): boolean{
    if(this.weapons.find(w => w.name === weapon.name)?.hidden) return false;
    else return true;
  }

  showHideDetails(event: MatSlideToggleChange): void{
    if(event.checked){
      this.displayedColumnNames = ['name', 'damage', 'fireRate', 'magazineNumber', 'bulletSpeed', 'reloadSpeed', 'damageDrop'];
    }else{
      this.displayedColumnNames = this.columnNames;
    }
  }
}

import { Component } from '@angular/core';
import { Weapon } from 'src/app/models/weapon';
import { EvaService } from 'src/app/services/eva.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent {

  weapons: Weapon[] = [];
  
  constructor(private evaService: EvaService){
    this.evaService.getWeapons().subscribe(weapons =>{
      this.weapons = JSON.parse(localStorage.getItem("weapons") ?? '[]');
      if(this.weapons.length === 0){
        this.weapons = weapons;
      }
    });
  }
}

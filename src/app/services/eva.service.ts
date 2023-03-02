import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Map } from '../models/map';
import { Weapon } from '../models/weapon';

@Injectable({
  providedIn: 'root'
})
export class EvaService {

  weapons: Weapon[] = [];
  maps: Map[] = [];

  constructor() { }

  getMaps(): Observable<Map[]>{
    if(this.maps.length > 0) return of(this.maps);
    else{
      this.maps = [
        {name: "Atlantis", image: "assets/maps/atlantis.webp", screen: "assets/maps/atlantis_screen.webp"},
        {name: "Bastion", image: "assets/maps/bastion.webp", screen: "assets/maps/bastion_screen.webp"},
        {name: "Ceres", image: "assets/maps/ceres.webp", screen: "assets/maps/ceres_screen.webp"},
        {name: "Coliseum", image: "assets/maps/coliseum.webp", screen: "assets/maps/coliseum_screen.webp"},
        {name: "Helios Station", image: "assets/maps/helios.webp", screen: "assets/maps/helios_screen.webp"},
        {name: "Polaris", image: "assets/maps/polaris.webp", screen: "assets/maps/polaris_screen.webp"},
        {name: "Silva", image: "assets/maps/silva.webp", screen: "assets/maps/silva_screen.webp"},
        {name: "The Artefact", image: "assets/maps/theartefact.webp", screen: "assets/maps/theartefact_screen.webp"},
        {name: "The Cliff", image: "assets/maps/thecliff.webp", screen: "assets/maps/thecliff_screen.webp"},
        {name: "The Rock", image: "assets/maps/therock.webp", screen: "assets/maps/therock_screen.webp"},
      ]
      return of(this.maps);
    }
  }

  getWeapons(): Observable<Weapon[]>{
    if(this.weapons.length > 0) return of(this.weapons);
    else{
      this.weapons = [
        {
          name: "FURY",
          image: 'assets/weapons/fury.png',
          details: {
            headDamage: 30,
            bodyDamage: 24,
            endDamage: 21,
            fireRate: 540,
            magazineNumber: 75,
            bulletSpeed: 2000,
            reloadSpeed: 4,
            damageDrop: [
              {percentage: -20, distance:50},
              {percentage: -30, distance:70},
            ]
          }
        },{
          name: "MX42",
          image: 'assets/weapons/mx42.png',
          details: {
            headDamage: 20,
            bodyDamage: 16,
            endDamage: 14,
            fireRate: 750,
            magazineNumber: 40,
            bulletSpeed: 1000,
            reloadSpeed: 1.2,
            damageDrop: [
              {percentage: -15, distance:16},
              {percentage: -25, distance:23},
            ],
            dispersion: 0.6
          }
        },{
          name: "NEEDLE",
          image: 'assets/weapons/needle.png',
          details: {
            headDamage: 50,
            bodyDamage: 43,
            endDamage: 34,
            fireRate: 192,
            magazineNumber: 20,
            bulletSpeed: 2000,
            reloadSpeed: 1.5,
            damageDrop: [
              {percentage: -20, distance:40, distanceInfo: '>'},
            ]
          }
        },{
          name: "ERG type 51",
          image: 'assets/weapons/erg51.png',
          details: {
            headDamage: 229,
            bodyDamage: 180,
            endDamage: 116,
            reloadSpeed: 2,
            damageDrop: [
              {percentage: -15, distance:25},
              {percentage: -30, distance:50}
            ]
          }
        },{
          name: "T1-GAUSS",
          image: 'assets/weapons/gauss.jpg',
          details: {
            headDamage: 115,
            bodyDamage: 115,
            endDamage: 113,
            fireRate: 66,
            magazineNumber: 5,
            reloadSpeed: 2,
            damageDrop: [
              {percentage: -30, distance:3.8},
              {percentage: -50, distance:6},
              {percentage: -80, distance:10},
              {percentage: -100, distance:15},
            ],
            dispersion: 1.45
          }
        },{
          name: "VULCAN",
          image: 'assets/weapons/vulcan.png',
          details: {
            headDamage: 32,
            bodyDamage: 24,
            endDamage: 19,
            fireRate: 720, //(1sec / temps entre deux rafales) * nombre de balles dans une rafale * 60sec
            magazineNumber: 30,
            bulletSpeed: 1000,
            reloadSpeed: 1.5,
            damageDrop: [
              {percentage: -25, distance:22},
            ]
          }
        },{
          name: "WARDEN",
          image: 'assets/weapons/warden.png',
          details: {
            headDamage: 58,
            bodyDamage: 47,
            endDamage: 40,
            fireRate: 240,
            magazineNumber: 9,
            bulletSpeed: 2000,
            reloadSpeed: 1.2,
            damageDrop: [
              {percentage: -10, distance:40},
            ]
          }
        },{
          name: "MP52",
          image: 'assets/weapons/mp52.png',
          details: {
            headDamage: 25,
            bodyDamage: 18,
            endDamage: 13,
            fireRate: 750,
            magazineNumber: 35,
            bulletSpeed: 200,
            reloadSpeed: 1,
            damageDrop: [
              {percentage: -10, distance:9},
              {percentage: -25, distance:15},
              {percentage: -45, distance:20},
              {percentage: -55, distance:30, distanceInfo: ">"},
            ]
          }
        },{
          name: "ATLAS",
          image: 'assets/weapons/atlas.png',
          details: {
            headDamage: 150,
            bodyDamage: 100,
            endDamage: 95,
            fireRate: 60,
            magazineNumber: 5,
            bulletSpeed: 3000,
            reloadSpeed: 2.5,
            damageDrop: [
              {percentage: -30, distance:7, distanceInfo: "<"},
              {percentage: 100, distance:7, distanceInfo: ">"}
            ]
          }
        }
      ];
      return of(this.weapons);
    }
  }
}

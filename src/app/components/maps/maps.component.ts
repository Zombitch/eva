import { Component } from '@angular/core';
import { Map } from 'src/app/models/map';
import { EvaService } from 'src/app/services/eva.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {
  maps: Map[] = [];
  displayedMap: Map|undefined = undefined;
  
  constructor(private evaService: EvaService){
    this.evaService.getMaps().subscribe(maps => this.maps = maps);
  }

  showMap(map:Map){
    this.displayedMap = map;
  }
}

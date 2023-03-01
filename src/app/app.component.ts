import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EVA';
  toolbarElements: {}[] = [
    {text: 'Armes', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Maps', cols: 1, rows: 1, color: '#DDBDF1'},
  ];
}

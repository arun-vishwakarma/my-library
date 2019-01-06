import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'library-demo';
  curretCount = 0;

  triggerClick(v:any){
    this.curretCount = v;
  }
}

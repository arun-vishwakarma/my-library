import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-akvbutton',
  templateUrl: './akvbutton.component.html',
  styleUrls: ['./akvbutton.component.css']
})
export class AkvbuttonComponent implements OnInit {
  clickCount = 0;
  //@Output() OnclickButton = new EventEmitter();
  //or
  @Output() OnclickButton: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  btnClickFromView(){
    this.clickCount++;
    this.OnclickButton.emit(this.clickCount);
  }

}

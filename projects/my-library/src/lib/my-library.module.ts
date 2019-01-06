import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule 
} from '@angular/material';

import { AkvbuttonComponent } from './akvbutton/akvbutton.component';

@NgModule({
  declarations: [AkvbuttonComponent],
  imports: [
    MatBadgeModule,
    MatButtonModule
  ],
  exports: [AkvbuttonComponent]
})
export class MyLibraryModule { }

import { IonicModule } from '@ionic/angular';
import { AccordianComponent } from './components/accordian/accordian.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AccordianComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [AccordianComponent],
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CapitalizeFirstLetterPipe} from "./capitalizeFirstFetter/capitalize-first-letter.pipe";
import { SubStringFirstChartPipe } from './SubStringFirstChart/sub-string-first-chart.pipe';



@NgModule({
  declarations: [
    CapitalizeFirstLetterPipe,
    SubStringFirstChartPipe,
  ],
  exports: [
    CapitalizeFirstLetterPipe,
    SubStringFirstChartPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

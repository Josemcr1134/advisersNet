import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainIndicatorsComponent } from './main-indicators/main-indicators.component';
import { StatisticsRoutingModule } from './statistics.routes';
import { MoreInfoComponent } from './more-info/more-info.component';



@NgModule({
  declarations: [
    MainIndicatorsComponent,
    MoreInfoComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ]
})
export class StatisticsModule { }

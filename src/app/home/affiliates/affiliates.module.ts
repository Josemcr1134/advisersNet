import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffiliatesRoutingModule } from './affiliates.routes';
import { RouterModule } from '@angular/router';
import { ListAffiliatesComponent } from './list-affiliates/list-affiliates.component';
import { FilterAffiliatesComponent } from './filter-affiliates/filter-affiliates.component';
import { MoreInfoAffiliatesComponent } from './more-info-affiliates/more-info-affiliates.component';
import { ColectivesAffiliatesComponent } from './colectives-affiliates/colectives-affiliates.component';
import { AffiliateMedicInfoComponent } from './affiliate-medic-info/affiliate-medic-info.component';
import { FilterCollectivesAffiliatesComponent } from './filter-collectives-affiliates/filter-collectives-affiliates.component';


@NgModule({
  declarations: [
    ListAffiliatesComponent,
          FilterAffiliatesComponent,
          MoreInfoAffiliatesComponent,
          ColectivesAffiliatesComponent,
          AffiliateMedicInfoComponent,
          FilterCollectivesAffiliatesComponent
  ],
  
  imports: [
    CommonModule,
    AffiliatesRoutingModule,
    RouterModule
  ]
})
export class AffiliatesModule { }

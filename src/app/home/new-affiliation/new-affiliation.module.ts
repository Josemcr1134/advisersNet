import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyPlanComponent } from './family-plan/family-plan.component';
import { IndividualPlanComponent } from './individual-plan/individual-plan.component';
import { AffiliationRoutingModule } from './new-affiliation.routes';



@NgModule({
  declarations: [
    FamilyPlanComponent,
    IndividualPlanComponent
  ],
  imports: [
    CommonModule,
    AffiliationRoutingModule
  ]
})
export class NewAffiliationModule { }

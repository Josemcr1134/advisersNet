import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { IndividualPlanComponent } from './individual-plan/individual-plan.component';
import { FamilyPlanComponent } from './family-plan/family-plan.component';


const routes: Routes = [
    { path: '', children:[
        {path:'IndividualPlan', component:IndividualPlanComponent},
        {path:'FamilyPlan', component:FamilyPlanComponent},
        { path: '**', redirectTo: 'IndividualPlan'}
    ] },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AffiliationRoutingModule {}

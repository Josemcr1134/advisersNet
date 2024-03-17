import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListAffiliatesComponent } from './list-affiliates/list-affiliates.component';
import { FilterAffiliatesComponent } from './filter-affiliates/filter-affiliates.component';
import { AffiliateMedicInfoComponent } from './affiliate-medic-info/affiliate-medic-info.component';
import { ColectivesAffiliatesComponent } from './colectives-affiliates/colectives-affiliates.component';
import { MoreInfoAffiliatesComponent } from './more-info-affiliates/more-info-affiliates.component';
import { FilterCollectivesAffiliatesComponent } from './filter-collectives-affiliates/filter-collectives-affiliates.component';


const routes: Routes = [
    { path: '',  
        children: [
            {path:'ListAffiliates', component:ListAffiliatesComponent},
            {path:'FilterAffiliates', component:FilterAffiliatesComponent},
            {path:'FilterCollectivesAffiliates', component:FilterCollectivesAffiliatesComponent},
            {path: 'listColectivesAffiliates', component: ColectivesAffiliatesComponent},
            {path: 'listAffiliate/:id', component: MoreInfoAffiliatesComponent},
            {path: 'AffiliateMedicInfo/:id', component: AffiliateMedicInfoComponent},
            {path:'**', redirectTo:'ListAffiliates'},
        ] },



];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AffiliatesRoutingModule {}

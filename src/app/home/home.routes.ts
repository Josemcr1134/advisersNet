import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../shared/guards/auth.guard';


const routes: Routes = [
    { path: '',
        component:HomeComponent,
        canActivate: [AuthGuard],
        children: [
             {
                path:'Statistics',
                loadChildren:() => import('./statistics/statistics.module').then(m => m.StatisticsModule)
              },
             {
                path:'NewAffiliation',
                loadChildren:() => import('./new-affiliation/new-affiliation.module').then(m => m.NewAffiliationModule)
              },
              {
                path: 'affiliates',
                loadChildren: () => import('./affiliates/affiliates.module').then(m => m.AffiliatesModule)
              },

              {
                path: '**', redirectTo: 'Statistics'
              }
        ]

        },


    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}

import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('./../splash-screen/splash-screen.module').then(m => m.SplashScreenModule),
            },
            {
                path: 'active',
                loadChildren: () => import('./../active-issue/active-issue.module').then(m => m.ActiveIssueModule),
            },
            {
                path: 'final',
                loadChildren: () => import('./../final-issue/final-issue.module').then(m => m.FinalIssueModule),
            },
            {
                path: 'add',
                loadChildren: () => import('./../add-issue/add-issue.module').then(m => m.AddIssueModule),
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
import { ActiveIssueComponent } from './active-issue.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ActiveIssueComponent,
        data: { title: 'Active Issue' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ActiveIssueRoutingModule { }
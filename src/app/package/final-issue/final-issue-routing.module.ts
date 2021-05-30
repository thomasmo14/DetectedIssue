import { FinalIssueComponent } from './final-issue.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: FinalIssueComponent,
        data: { title: 'Active Issue' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FinalIssueRoutingModule { }
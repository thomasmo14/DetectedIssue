import { AddIssueComponent } from './add-issue.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AddIssueComponent,
        data: { title: 'Add Issue' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AddIssueRoutingModule { }
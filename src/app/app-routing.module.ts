import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VoteFormComponent} from "./vote-form/vote-form.component";
import {VoteListComponent} from "./vote-list/vote-list.component";

const routes: Routes = [
  {
    path: '', component: VoteFormComponent
  },
  {
    path: 'votes', component: VoteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

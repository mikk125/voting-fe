import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VoteListComponent } from './vote-list/vote-list.component';
import { VoteFormComponent } from './vote-form/vote-form.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {VotingService} from "./service/voting.service";


@NgModule({
  declarations: [
    AppComponent,
    VoteListComponent,
    VoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [VotingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

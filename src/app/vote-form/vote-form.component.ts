import { Component, OnInit } from '@angular/core';
import {Vote} from "../model/vote";
import {VotingService} from "../service/voting.service";

@Component({
  selector: 'app-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.css']
})
export class VoteFormComponent implements OnInit {

  vote: Vote;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private votingService: VotingService) {this.vote = new Vote(); }

  ngOnInit() {
  }

  saveVote() {
    this.votingService.addNewVote(this.vote).subscribe(newVote => {
        this.successMessage = 'Vote saved';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      }, error => {
        this.errorMessage = 'Something went wrong.';
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      }
    );
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vote} from "../model/vote";


@Injectable()
export class VotingService {

  private votingUrl: string;

  constructor(private http: HttpClient) {
    this.votingUrl = 'http://localhost:9000/vote';
  }


  public addNewVote(newVote: Vote) {
    return this.http.post<Vote>(this.votingUrl, newVote);
  }
}

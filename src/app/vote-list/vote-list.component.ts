import {Component, OnDestroy, OnInit} from '@angular/core';
import {VotingService} from "../service/voting.service";
import {Vote} from "../model/vote";
import {Stomp} from "@stomp/stompjs";
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.css']
})
export class VoteListComponent implements OnInit, OnDestroy {

  votes: Vote[] = [];
  disabled = true;
  private stompClient = null;

  constructor() { }

  ngOnInit() {
    const socket = new SockJS('http://localhost:9002/');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      _this.stompClient.send("/", {})
      _this.stompClient.subscribe('/votes', function (hello) {
        _this.assignVotes(JSON.parse(hello.body));
      });
    });
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.votes = [];
    }
  }

  assignVotes(votes: Vote[]) {
    this.votes = votes.sort((v1, v2) => v2.votesNumber - v1.votesNumber);
  }

  ngOnDestroy(): void {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this.setConnected(false);
  }
}

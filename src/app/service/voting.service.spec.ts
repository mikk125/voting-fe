import { TestBed, inject } from '@angular/core/testing';

import { VotingServiceService } from './voting.service';

describe('VotingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VotingServiceService]
    });
  });

  it('should be created', inject([VotingServiceService], (service: VotingServiceService) => {
    expect(service).toBeTruthy();
  }));
});

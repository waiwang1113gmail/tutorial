import { Injectable } from '@angular/core';

import { Crisis } from './crisis';

export const CRISES: Crisis[] = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

@Injectable()
export class CrisisService {

  constructor() { }
  getCrises(): Promise<Crisis[]> {
    return Promise.resolve(CRISES);
  }

  getCrisis(id: number): Promise<Crisis>{
    return Promise.resolve(CRISES.filter(crisis => crisis.id==id)[0]);
  }

  // See the "Take it slow" appendix
  getCrisesSlowly(): Promise<Crisis[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getCrises()), 2000);
    });
  }
}

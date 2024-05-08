import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter = new BehaviorSubject<number>(0)

  constructor() { }

  getcount(){
   return  this.counter.asObservable();
  }

  setcount(newvalue:number){
    this.counter.next(newvalue)
  }



}

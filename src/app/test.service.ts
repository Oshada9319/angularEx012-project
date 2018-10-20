import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  printService(someText: string){
    console.log(someText);
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  base_url =  new BehaviorSubject<string>('https://educatorbox.com/Development/API/')
  
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  private forgotstat = false;
  private signupstat = false;
  private logeedInStatus =  false;

  setSignUp(value : boolean){
    this.signupstat = value;
  }
  get signup(){
    return this.signupstat;
  }
  setforgot(value : boolean){
    this.forgotstat = value;
  }
  get forgot(){
    return this.forgotstat;
  }

  setLoggedin(value : boolean){
    this.logeedInStatus = value;
  }
  get loggedin(){
    return this.logeedInStatus;
  }
}

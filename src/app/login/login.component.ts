import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { StatService } from '../stat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string;
  password : string ;
  
  constructor(private userservice : UserService , private route : Router,
    private statservie : StatService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.userservice.loginUser(this.username , this.password)
      .subscribe(data => this.func(data), error => console.log(error));
  }
  func(data){
    if(data == true)
    {
      console.log('in func data is true');
      this.statservie.setLoggedin(true);
      console.log(this.statservie.loggedin);
      this.route.navigate(['/gallery']);
    }
  }
  signup(){
    this.statservie.setSignUp(true);
    this.route.navigate(['/signup']);
  }
  forgot(){
    this.statservie.setforgot(true);
    this.route.navigate(['/forgotpassword']);
  }
}

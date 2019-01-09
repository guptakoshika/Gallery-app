import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  ngOnInit(){}

  user : User = new User();
  
  constructor(private userService :UserService , private router : Router ) { }
  
  onSubmit(){
    console.log(this.user.username);
    this.userService.addUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(private userservice : UserService) { }

  username:string;
  ngOnInit() {
  }
  onSubmit(){
    console.log("i m in forgot component");
    this.userservice.forgotpswd(this.username)
    .subscribe(data => window.alert(data), error => console.log(error));
  }
}

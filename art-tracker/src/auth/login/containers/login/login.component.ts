import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

//import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: "login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  loginUser(event: FormGroup) {
    console.log("in loginUser, event.value = ", event.value);
  }
}

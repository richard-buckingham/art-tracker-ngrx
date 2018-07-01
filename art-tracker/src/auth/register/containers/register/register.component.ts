import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

//import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: "register",
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  registerUser(event: FormGroup) {
    console.log("in registerUser, event.value = ", event.value);
  }
}

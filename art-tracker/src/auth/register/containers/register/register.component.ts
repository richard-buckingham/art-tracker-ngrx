import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { AuthService } from "../../../shared/services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "register",
  templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {
  error: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  async registerUser(event: FormGroup) {
    // de-structure the values for email and password
    const { email, password } = event.value;

    try {
      // wait until the promise has completed.
      await this.authService.createUser(email, password);
      this.router.navigate(["/"]);
    } catch (err) {
      // display the error returned from firebase
      this.error = err.message;
    }
  }
}

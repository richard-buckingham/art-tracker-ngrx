import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../../shared/services/auth/auth.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  error: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  async loginUser(event: FormGroup) {
    // de-structure the values for email and password
    const { email, password } = event.value;

    try {
      // wait until the promise has completed.
      await this.authService.loginUser(email, password);
      this.router.navigate(["/"]);
    } catch (err) {
      // display the error returned from firebase
      this.error = err.message;
    }
  }
}

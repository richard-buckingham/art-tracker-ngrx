import { Injectable } from "@angular/core";

// third party components
import { AngularFireAuth } from "angularfire2/auth";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private af: AngularFireAuth) {}

  // this returns a promise, not an observable
  // so we need to use .then, or the new async await feature
  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  // this returns void.
  // so we need to use .then, or the new async await feature
  loginUser(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }
}

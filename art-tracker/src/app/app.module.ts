import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./containers/app/app.component";

// feature modules
import { AuthModule } from "../auth/auth.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

/* <script src="https://www.gstatic.com/firebasejs/5.1.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBp3Uu2srg3im1bbA5M88k-gfTfBqqbuQ0",
    authDomain: "art-tracker-ngrx.firebaseapp.com",
    databaseURL: "https://art-tracker-ngrx.firebaseio.com",
    projectId: "art-tracker-ngrx",
    storageBucket: "art-tracker-ngrx.appspot.com",
    messagingSenderId: "865746449336"
  };
  firebase.initializeApp(config);
</script>
 */

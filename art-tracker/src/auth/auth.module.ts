import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// third party modules
import { AngularFireModule, FirebaseAppConfig } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

// shared modules
import { SharedModule } from "./shared/shared.module";

export const ROUTES: Routes = [
  {
    path: "auth",
    children: [
      { path: "", pathMatch: "full", redirectTo: "login" },
      { path: "login", loadChildren: "./login/login.module#LoginModule" },
      {
        path: "register",
        loadChildren: "./register/register.module#RegisterModule"
      }
    ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBp3Uu2srg3im1bbA5M88k-gfTfBqqbuQ0",
  authDomain: "art-tracker-ngrx.firebaseapp.com",
  databaseURL: "https://art-tracker-ngrx.firebaseio.com",
  projectId: "art-tracker-ngrx",
  storageBucket: "art-tracker-ngrx.appspot.com",
  messagingSenderId: "865746449336"
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule
  ],
  declarations: []
})
export class AuthModule {}

import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { SharedModule } from "../../../shared/shared.module";
import { AuthModule } from "../../../auth.module";
import { Router } from "@angular/router";

import { LoginComponent } from "./login.component";

class RouterStub {
  navigateByUrl = jasmine.createSpy("navigateByUrl");
}

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [SharedModule, AuthModule],
      providers: [{ provide: Router, useClass: RouterStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { SharedModule } from "../../../shared/shared.module";
import { AuthModule } from "../../../auth.module";
import { Router } from "@angular/router";

import { RegisterComponent } from "./register.component";

class RouterStub {
  navigateByUrl = jasmine.createSpy("navigateByUrl");
}

describe("RegisterComponent", () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [SharedModule, AuthModule],
      providers: [{ provide: Router, useClass: RouterStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

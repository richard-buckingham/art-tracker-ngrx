import { TestBed, inject } from "@angular/core/testing";
import { SharedModule } from "../../../shared/shared.module";
import { AuthModule } from "../../../auth.module";

import { AuthService } from "./auth.service";

describe("AuthService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, AuthModule],
      providers: [AuthService]
    });
  });

  it("should be created", inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});

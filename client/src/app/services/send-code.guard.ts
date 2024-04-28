import { CanActivateFn, Router } from "@angular/router";
import { CookieService } from "./cookie.service";
import { inject } from "@angular/core";

export const sendCodeGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const emailToken = cookieService.get("emailToken");
  if (emailToken) {
    return true;
  } else {
    router.navigate(["/forgotPassword"]);
    return false;
  }
};

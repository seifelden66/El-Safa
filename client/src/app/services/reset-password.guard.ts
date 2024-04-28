import { Router } from "@angular/router";
import { CanActivateFn } from "@angular/router";
import { CookieService } from "./cookie.service";
import { inject } from "@angular/core";

export const resetPasswordGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const emailToken = cookieService.get("resetToken");
  if (emailToken) {
    return true;
  } else {
    router.navigate(["/forgotPassword"]);
    return false;
  }
};

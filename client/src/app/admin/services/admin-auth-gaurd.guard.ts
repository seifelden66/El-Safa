import { CanActivateFn, Router } from "@angular/router";
import { CookieService } from "../../services/cookie.service";
import { inject } from "@angular/core";
export const adminAuthGaurdGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const adminToken = cookieService.get("adminToken");
  if (adminToken) {
    return true;
  } else {
    router.navigate(["/login"]);
    return false;
  }
};

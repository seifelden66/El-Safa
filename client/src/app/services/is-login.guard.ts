import { CanActivateFn, Router } from "@angular/router";
import { CookieService } from "./cookie.service";
import { inject } from "@angular/core";

export const isLoginGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const adminToken = cookieService.get("adminToken");
  if (adminToken) {
    router.navigate(["/admin/dashboard"]);
    return false;
  } else {
    return true;
  }
};

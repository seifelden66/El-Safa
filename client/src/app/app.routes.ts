import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { HomeComponent } from "./user/home/home.component";
import { ProductPageComponent } from "./user/product-page/product-page.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { InvoiceComponent } from "./user/invoice/invoice.component";
import { ProductDetailsComponent } from "./user/product-details/product-details.component";
import { DashbordComponent } from "./admin/dashbord/dashbord.component";
import { ProductsComponent } from "./admin/products/products.component";
import { UsersComponent } from "./admin/users/users.component";
import { CategorysComponent } from "./admin/categorys/categorys.component";
import { AddProductComponent } from "./admin/add-product/add-product.component";
import { OrdersComponent } from "./admin/orders/orders.component";
import { AddNewAdminComponent } from "./admin/add-new-admin/add-new-admin.component";
import { LoginComponent } from "./login/login.component";
import { adminAuthGaurdGuard } from "./admin/services/admin-auth-gaurd.guard";
import { isLoginGuard } from "./services/is-login.guard";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SendCodeComponent } from "./send-code/send-code.component";
import { sendCodeGuard } from "./services/send-code.guard";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { resetPasswordGuard } from "./services/reset-password.guard";
import { SingleOrderComponent } from "./admin/single-order/single-order.component";
import { CartComponent } from "./user/cart/cart.component";
import { ContactComponent } from "./user/contact/contact.component";

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [isLoginGuard],
  },
  {
    path: "product",
    component: ProductPageComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "regester",
    component: SignUpComponent,
  },
  {
    path: "invoice",
    component: InvoiceComponent,
  },
  {
    path: "product_details/:id",
    component: ProductDetailsComponent,
  },

  {
    path: "admin",
    children: [
      {
        path: "dashboard",
        component: DashbordComponent,
      },
      {
        path: "products",
        component: ProductsComponent,
      },
      {
        path: "users",
        component: UsersComponent,
      },
      {
        path: "orders",
        component: OrdersComponent,
      },
      {
        path: "order-details/:id",
        component: SingleOrderComponent,
      },
      {
        path: "add-product",
        component: AddProductComponent,
      },
      {
        path: "categorys",
        component: CategorysComponent,
      },
      {
        path: "add-new-admin",
        component: AddNewAdminComponent,
      },
    ],
    canActivate: [adminAuthGaurdGuard],
  },
  {
    path: "forgotPassword",
    component: ForgotPasswordComponent,
  },
  {
    path: "sendCode",
    component: SendCodeComponent,
    canActivate: [sendCodeGuard],
  },
  {
    path: "resetPassword",
    component: ResetPasswordComponent,
    canActivate: [resetPasswordGuard],
  },

  {
    path: "cart",
    component: CartComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "**",
    component: HomeComponent,
  },

];

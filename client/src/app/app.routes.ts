import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { HomeComponent } from "./user/home/home.component";
import { LoginComponent } from "./user/login/login.component";
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

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
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
    path: "user",
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
  },

  {
    path: "**",
    component: HomeComponent,
  },
];

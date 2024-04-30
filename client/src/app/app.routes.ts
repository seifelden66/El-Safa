import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { ProductPageComponent } from './user/product-page/product-page.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { InvoiceComponent } from './user/invoice/invoice.component';
import { ProductDetailsComponent } from './user/product-details/product-details.component';
import { CartComponent } from './user/cart/cart.component';
import { ContactComponent } from './user/contact/contact.component';


export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'product',
        component: ProductPageComponent
    },
    {
        path:'profile',
        component: ProfileComponent
    },
    {
        path:'user',
        component: SignUpComponent
    },
    {
        path:'invoice',
        component: InvoiceComponent

    },
    {
        path:'product_details/:id',
        component: ProductDetailsComponent
    },
    {
        path:'cart',
        component:CartComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path: "**",
        component:HomeComponent

    }

];


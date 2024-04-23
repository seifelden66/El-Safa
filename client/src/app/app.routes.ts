import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';

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
        path: "**",
        component:LoginComponent

    }

];


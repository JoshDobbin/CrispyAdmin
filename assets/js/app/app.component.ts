// app.component.ts
import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig, ComponentInstruction, CanActivate } from 'angular2/router';
import { CustomRouterOutlet } from './shared/directives/custom-router-outlet';
import { checkAuth } from './auth_module/auth/check_auth';
import { LoginComponent } from './auth_module/login/login.component';
import { SignupComponent } from './auth_module/signup/signup.component';
import { DashboardLayoutComponent } from './components/dashboard_layout/dashboard_layout.component';
import { HomeComponent } from './components/home/home.component';
import { Dashboard } from './components/dashboard/dashboard.component';


@Component({
    selector: 'app-container',
    templateUrl: 'js/app/app.component.html',
    directives: [CustomRouterOutlet, DashboardLayoutComponent],
})
@RouteConfig([
    { path: '/', as: 'Dashboard', component: Dashboard, useAsDefault: true },
    { path: '/home', as: 'Home', component: HomeComponent},
    { path: '/login', as: 'Login', component: LoginComponent },
    { path: '/signup', as: 'Signup', component: SignupComponent },
    /*{ path: '/**', redirectTo: ['Home'] }*/
])
export class AppComponent {


    constructor() {
    }


}
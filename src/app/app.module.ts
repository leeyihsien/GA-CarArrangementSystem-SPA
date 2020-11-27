import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PaginationModule } from 'ngx-bootstrap/pagination';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


// 引入 httpClientModule`, formModule, reactive form module
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



// Import containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

// import 需要用到的service
import { CarArrangementInfoService } from './_core/_services/car-arrangement-info.service';
import { DriverInfoService } from './_core/_services/driver-info.service';
import { RouteInfoService } from './_core/_services/route-info.service';
import { CarDriverService } from './_core/_services/car-driver.service';
import { CarInfoService } from './_core/_services/car-info.service';



const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { ArrangementInfoComponent } from './views/arrangement-info/arrangement-info.component';
import { CarInfoComponent } from './views/car-info/car-info.component';
import { DriverInfoComponent } from './views/driver-info/driver-info.component';
import { RouteInfoComponent } from './views/route-info/route-info.component';
import { CarDriverComponent } from './views/car-driver/car-driver.component';
// import { ArrangementInfoRoutingModule } from './views/arrangement-info/arrangement-info-routing.module';
// import { ArrangementInfoModule } from './views/arrangement-info/arrangement-info.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot()

  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    ArrangementInfoComponent,
    CarInfoComponent,
    DriverInfoComponent,
    RouteInfoComponent,
    CarDriverComponent
  ],

  providers: [
    // 宣告要用的service
    CarArrangementInfoService,
    CarDriverService,
    CarInfoService,
    DriverInfoService,
    RouteInfoService,
  {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }

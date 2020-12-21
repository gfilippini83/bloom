import { HeaderComponent } from './header/header.component';
import { StreamerComponent } from './streamer/streamer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StreamersComponent } from './streamers/streamers.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: 
    [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        HttpClientModule,
        NgbModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatGridListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MDBBootstrapModule.forRoot(),
        BrowserAnimationsModule
    ],
    declarations: [
        DashboardComponent,
        HeaderComponent,
        StreamerComponent,
        AboutUsComponent,
        ContactComponent,
        StreamersComponent
    ],
    exports: [
        DashboardComponent,
        HeaderComponent,
        StreamerComponent,
        AboutUsComponent,
        ContactComponent,
        StreamersComponent
    ],
    entryComponents: [
        DashboardComponent,
        HeaderComponent,
        StreamerComponent,
        AboutUsComponent,
        ContactComponent,
        StreamersComponent
    ]
  })
  export class AppComponentModule { }
  
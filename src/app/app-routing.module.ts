import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './app-components/about-us/about-us.component';
import { ContactComponent } from './app-components/contact/contact.component';
import { DashboardComponent } from './app-components/dashboard/dashboard.component';
import { StreamerComponent } from './app-components/streamer/streamer.component';
import { StreamersComponent } from './app-components/streamers/streamers.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'streamers', component: StreamersComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'streamer/:name', component: StreamerComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

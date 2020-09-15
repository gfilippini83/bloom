import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StreamerComponent } from './streamer/streamer.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'streamers', component: StreamerComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

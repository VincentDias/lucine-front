import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { TreatmentComponent } from './pages/treatment/treatment.component';
import { LoginComponent } from './pages/home/login/login.component';
import { SearchTagComponent } from './shared/component/search-tag/search-tag.component';
import { SearchFormComponent } from './shared/component/search-form/search-form.component';
import { SearchDateComponent } from './shared/component/search-form/search-date/search-date.component';
import { VideoResultComponent } from './pages/search/video-result/video-result.component';
import { ListVideosComponent } from './pages/treatment/list-videos/list-videos.component';
import { CardVideoComponent } from './pages/treatment/list-videos/card-video/card-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    TreatmentComponent,
    LoginComponent,
    SearchTagComponent,
    SearchFormComponent,
    SearchDateComponent,
    VideoResultComponent,
    ListVideosComponent,
    CardVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AmiiboComponent } from '../amiibo/amiibo/amiibo.component';
import { DisplayComponent } from '../amiibo/display/display.component';
import { AmiiboModule } from '../amiibo/amiibo/amiibo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AmiiboModule,
  ],
  declarations: [HomePage],
  providers:[]
})
export class HomePageModule {}

// ---------------------
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AmiiboComponent } from './amiibo/amiibo/amiibo.component';
// import { DisplayComponent } from './amiibo/display/display.component';
// import { FormsModule } from '@angular/forms';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AmiiboComponent,
//     DisplayComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

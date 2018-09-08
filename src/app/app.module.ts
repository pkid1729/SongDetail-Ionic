import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Song1Page  } from "../pages/song1/song1";
import {Song2Page  } from "../pages/song2/song2";
// import{Song1Page}from '../pages/song1/song1;
// import{Song2Page}from '../pages/song2/song2;

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Song1Page,
    Song2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Song1Page,
    Song2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

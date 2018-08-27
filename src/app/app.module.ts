import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP } from "@ionic-native/http";
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { DictionaryPage } from "../pages/dictionary/dictionary"

import { BotProvider } from '../providers/bot/bot';
import { DictionaryProvider } from '../providers/dictionary/dictionary';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DictionaryPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DictionaryPage
  ],
  providers: [
    HTTP,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BotProvider,
    DictionaryProvider
  ]
})
export class AppModule {}

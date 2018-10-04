import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HTTP } from "@ionic-native/http";
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http"
import { NativeStorage } from '@ionic-native/native-storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { DictionaryPage } from "../pages/dictionary/dictionary";
import { DefinitionPage } from "../pages/definition/definition";
import { LoginPage } from "../pages/login/login";

import { BotProvider } from '../providers/bot/bot';
import { DictionaryProvider } from '../providers/dictionary/dictionary';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DictionaryPage,
    DefinitionPage,
    LoginPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DictionaryPage,
    DefinitionPage,
    LoginPage
  ],
  providers: [
    HTTP,
    StatusBar,
    File,
    FileOpener,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BotProvider,
    DictionaryProvider,
    NativeStorage,
    SQLite
  ]
})
export class AppModule {}

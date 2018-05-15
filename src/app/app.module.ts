import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { JBomb } from './app.component';
import { HomePage } from '../pages/home/home';
import { BombingPage} from '../pages/bombingPage/bombingPage';

@NgModule({
  declarations: [
    JBomb,
    HomePage,
    BombingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(JBomb)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    JBomb,
    HomePage,
    BombingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

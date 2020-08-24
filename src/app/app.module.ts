import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule  } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireFunctionsModule, REGION } from '@angular/fire/functions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angular-auth-firebase'),
    AngularFirestoreModule,
    AngularFireFunctionsModule
  ],
  providers: [{ provide: REGION, useValue: 'us-central1' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

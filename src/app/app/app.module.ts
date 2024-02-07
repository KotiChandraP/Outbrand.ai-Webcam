import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { VideoRecorderComponent } from './video-recorder.component';
import { VideoUploadService } from './services/video-upload.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoRecorderComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    VideoUploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-video-recorder',
  templateUrl: './video-recorder.component.html',
  styleUrls: ['./video-recorder.component.css']
})
export class VideoRecorderComponent {

  public webcamImage: WebcamImage = null;
  public errors: WebcamInitError[] = [];
  public showWebcam = true;
  public triggerObservable: Subject<void> = new Subject<void>();

  constructor() { }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

  toggleWebcam() {
    this.triggerObservable.next();
    this.showWebcam = !this.showWebcam;
  }

  confirmRecording() {
    // Implement confirmation logic (e.g., save the recorded video)
    console.log('Recording confirmed:', this.webcamImage);
  }

  redoRecording() {
    // Implement redo logic (e.g., reset the recorded video)
    this.webcamImage = null;
    console.log('Recording redone');
  }

  clearImage() {
    this.webcamImage = null;
  }
}

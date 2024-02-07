import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {
  recordedVideo: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  startRecording(): void {
    // Logic to start recording
    console.log('Recording started');
  }

  stopRecording(): void {
    // Logic to stop recording and capture the recorded video data
    this.recordedVideo = 'https://example.com/recorded-video.mp4'; // Example URL
    console.log('Recording stopped');
  }

  confirmRecording(): void {
    // Logic to handle confirming the recording
    console.log('Recording confirmed');
  }

  redoRecording(): void {
    // Logic to handle redoing the recording
    this.recordedVideo = null; // Clear recorded video data
    console.log('Recording redo');
  }

  handleImage(webcamImage: WebcamImage): void {
    console.info('Received webcam image', webcamImage);

    if (webcamImage instanceof WebcamImage && webcamImage.imageAsDataUrl) {
      this.recordedVideo = webcamImage.imageAsDataUrl;
    }
  }
}

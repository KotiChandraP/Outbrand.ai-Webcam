import { Component } from '@angular/core';
import { VideoUploadService } from './video-upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  constructor(private videoUploadService: VideoUploadService) { }

  uploadVideo(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.videoUploadService.uploadVideo(file).then(() => {
        console.log('Video uploaded successfully');
      }).catch(error => {
        console.error('Error uploading video:', error);
      });
    }
  }
}

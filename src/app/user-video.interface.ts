// user-video.interface.ts
export interface UserVideo {
    userId: string;
    videoUrl: string;
  }
  
  // upload-video.component.ts
  import { Component } from '@angular/core';
  import { UserVideo } from './user-video.interface';
  
  @Component({
    selector: 'app-upload-video',
    templateUrl: './upload-video.component.html',
    styleUrls: ['./upload-video.component.css']
  })
  export class UploadVideoComponent {
    uploadedVideo: UserVideo;
  
    uploadVideo() {
      // After uploading the video, set the userId and videoUrl properties
      this.uploadedVideo = {
        userId: '123', // Replace with the actual user ID
        videoUrl: 'https://example.com/videos/video1.mp4' // Replace with the actual video URL
      };
      // Now you can use this.uploadedVideo to save or display the uploaded video information
    }
  }
  
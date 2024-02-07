import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { VideoUploadService } from './video-upload.service';
import { DatabaseService } from './database.service';
import { VideoInfo } from './video-info.model';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent {
  task: AngularFireUploadTask;
  videoFile: File;
  videoUrl: string;

  constructor(private storage: AngularFireStorage, private videoUploadService: VideoUploadService, private databaseService: DatabaseService) {}

  uploadVideo() {
    // Ensure a file is selected
    if (!this.videoFile) {
      console.error('No file selected');
      return;
    }

    // File path on Firebase Storage
    const filePath = `videos/${Date.now()}_${this.videoFile.name}`;

    // Upload task
    this.task = this.storage.upload(filePath, this.videoFile);

    // Get video URL after uploading is complete
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.storage.ref(filePath).getDownloadURL().subscribe(url => {
          this.videoUrl = url;
          console.log('Video URL:', this.videoUrl);
          // Save video information to database
          const videoId = 'WebcamCaptureFEAN'; // Generate a unique ID
          const videoName = this.videoFile.name; // Use file name as video name
          this.saveVideoInfo(videoId, videoName, this.videoUrl);
        });
      })
    ).subscribe();
  }

  saveVideoInfo(videoId: string, videoName: string, videoUrl: string): void {
    const videoInfo: VideoInfo = {
      id: videoId,
      name: videoName,
      url: videoUrl
    };
    this.databaseService.saveVideoInfo(videoInfo).then(
      () => {
        console.log('Video info saved successfully.');
        // Handle success (e.g., display success message, update UI)
      },
      (error) => {
        console.error('Error saving video info:', error);
        // Handle error (e.g., display error message, log error)
      }
    );
  }

  onFileSelected(event: any) {
    this.videoFile = event.target.files[0];
  }
}

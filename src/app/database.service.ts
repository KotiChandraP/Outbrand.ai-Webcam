import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { VideoInfo } from './video-info.model'; // Assuming you have a VideoInfo model

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) { }

  saveVideoInfo(videoInfo: VideoInfo): Promise<void> {
    const videoInfoRef = this.db.object(`video-info/${videoInfo.id}`);
    return videoInfoRef.set(videoInfo);
  }
}

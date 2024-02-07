import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class VideoUploadService {

  constructor(private storage: AngularFireStorage) { }

  uploadVideo(file: File) {
    const filePath = `videos/${Date.now()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    return fileRef.put(file);
  }
}

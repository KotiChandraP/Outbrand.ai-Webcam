import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class VideoUploadService {

  constructor(private storage: AngularFireStorage) { }

  uploadVideo(file: File): Promise<string> {
    const filePath = `videos/${new Date().getTime()}_${file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = storageRef.put(file);

    return new Promise<string>((resolve, reject) => {
      uploadTask.snapshotChanges().subscribe(
        (snapshot) => {
          if (snapshot.state === 'success') {
            storageRef.getDownloadURL().subscribe(
              (downloadURL) => {
                resolve(downloadURL);
              },
              (error) => {
                reject(error);
              }
            );
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}

// video-info.model.ts

export interface VideoInfo {
    id: string;
    name: string;
    url: string;
    // Add more properties as needed
  }
  
  // Then you can use the VideoInfo interface to define the structure of video information
  import { VideoInfo } from './video-info.model';
  
  // Define video information
  const videoInfo: VideoInfo = {
    id: 'unique_id_here',
    name: 'video_name_here',
    url: 'video_url_here',
    // Add more properties as needed
  };
  
// src/services/PhotoService.ts
import axios from 'axios';
import { Photo } from '../../interfaces/Photo';
import { config } from '../../config/env';

export class PhotoService {
  private baseUrl = `${config.api.baseUrl}`;

  async getAlbumPhotos(albumId: number): Promise<Photo[]> {
    const response = await axios.get(`${this.baseUrl}/albums/${albumId}/photos`);
    return response.data;
  }

  async createPhoto(photoData: Partial<Photo>): Promise<Photo> {
    const response = await axios.post(`${this.baseUrl}/photos`, photoData, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.data;
  }
}
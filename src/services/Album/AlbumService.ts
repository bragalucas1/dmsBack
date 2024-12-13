import axios from 'axios';
import { Album } from '../../interfaces/Album';
import { config } from '../../config/env';

export class AlbumService {
private baseUrl = config.api.baseUrl;

  async getUserAlbums(userId: number): Promise<Album[]> {
    const response = await axios.get(`${this.baseUrl}/users/${userId}/albums`);
    return response.data;
  }

  async createAlbum(userId: number, title: string): Promise<Album> {
    const response = await axios.post(`${this.baseUrl}/albums`, {
      userId,
      title
    });
    return response.data;
  }
}
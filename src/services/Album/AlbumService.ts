import axios from "axios";
import { Album } from "../../interfaces/Album";
import { config } from "../../config/env";

export class AlbumService {
  private baseUrl = config.api.baseUrl;

  async getUserAlbums(userId: number): Promise<Album[]> {
    const response = await axios.get(`${this.baseUrl}/users/${userId}/albums`);
    return response.data;
  }

  async getAlbum(id: number): Promise<Album> {
    const response = await axios.get(`${this.baseUrl}/albums/${id}`);
    return response.data;
  }
}

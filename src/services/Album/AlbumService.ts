import axios from "axios";
import { Album } from "../../interfaces/Album";
import { config } from "../../config/env";

export class AlbumService {
  private baseUrl = config.api.baseUrl;

  async getUserAlbums(userId: number): Promise<Album[]> {
    const response = await axios.get(`${this.baseUrl}/users/${userId}/albums`);
    console.log(response);
    return response.data;
  }

  async createAlbum(userId: number, title: string): Promise<Album> {
    const response = await axios.post(`${this.baseUrl}/albums`, {
      userId,
      title,
    });
    return response.data;
  }

  async getAlbum(id: number): Promise<Album> {
    const response = await axios.get(`${this.baseUrl}/albums/${id}`);
    return response.data;
  }

  async updateAlbum(id: number, albumData: Partial<Album>): Promise<Album> {
    const response = await axios.put(
      `${this.baseUrl}/albums/${id}`,
      albumData,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    return response.data;
  }

  async deleteAlbum(id: number): Promise<boolean> {
    const response = await axios.delete(`${this.baseUrl}/albums/${id}`);
    return response.status === 200;
  }
}

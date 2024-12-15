import axios from "axios";
import { Photo } from "../../interfaces/Photo";
import { config } from "../../config/env";

export class PhotoService {
  private baseUrl = `${config.api.baseUrl}`;

  async getAlbumPhotos(albumId: number): Promise<Photo[]> {
    const response = await axios.get(
      `${this.baseUrl}/albums/${albumId}/photos`
    );
    return response.data;
  }
}

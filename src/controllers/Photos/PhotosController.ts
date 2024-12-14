import { Request, Response } from "express";
import { PhotoService } from "../../services/Photos/PhotosService";

export class PhotoController {
  private photoService: PhotoService;

  constructor() {
    this.photoService = new PhotoService();
  }

  async getAlbumPhotos(req: Request, res: Response) {
    try {
      const albumId = parseInt(req.params.albumId);
      const photos = await this.photoService.getAlbumPhotos(albumId);
      console.log(photos);
      res.json(photos);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar fotos" });
    }
  }
}

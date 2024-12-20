import { Request, Response } from "express";
import { AlbumService } from "../../services/Album/AlbumService";

export class AlbumController {
  private albumService: AlbumService;

  constructor() {
    this.albumService = new AlbumService();
  }

  async getUserAlbums(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.userId);
      const albums = await this.albumService.getUserAlbums(userId);
      res.json(albums);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch album. Error:" + error });
    }
  }

  async getAlbum(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const album = await this.albumService.getAlbum(id);
      res.json(album);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch album. Error:" + error });
    }
  }
}

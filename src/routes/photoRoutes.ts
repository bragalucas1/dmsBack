import { Router } from "express";
import { PhotoController } from "../controllers/Photos/PhotosController";

const photoRoutes = Router();
const photoController = new PhotoController();

photoRoutes.get(
  "/albums/:albumId/photos",
  photoController.getAlbumPhotos.bind(photoController)
);

export default photoRoutes;

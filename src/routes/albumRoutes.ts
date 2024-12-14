import { Router } from 'express';
import { AlbumController } from '../controllers/AlbumController/AlbumController';

const albumRoutes = Router();
const albumController = new AlbumController();

albumRoutes.get('/users/:userId', albumController.getUserAlbums.bind(albumController));
albumRoutes.get('/:id', albumController.getAlbum.bind(albumController));

export default albumRoutes;
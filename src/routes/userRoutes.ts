import { Router } from 'express';
import { UserController } from '../controllers/UserController/UserController';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', (req, res) => {userController.createUser(req, res);});
userRoutes.get('/', userController.getUsers.bind(userController));
userRoutes.get('/:id', userController.getUserById.bind(userController));
userRoutes.put('/:id', userController.updateUser.bind(userController));
userRoutes.delete('/:id', userController.deleteUser.bind(userController));

export default userRoutes;
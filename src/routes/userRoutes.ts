import { Router } from 'express';
import { UserController } from '../controllers/UserController/UserController';

const userRoutes = Router();
const userController = new UserController();

userRoutes.use((req, res, next) => {
    console.log(`Request received at ${req.method} ${req.path}`);
    next();
  });

userRoutes.post('/', userController.getUsers.bind(userController));
userRoutes.get('/', userController.getUsers.bind(userController));
// userRoutes.get('/:id', userController.getUserById.bind(userController));
userRoutes.put('/:id', userController.updateUser.bind(userController));
userRoutes.delete('/:id', userController.deleteUser.bind(userController));

export default userRoutes;


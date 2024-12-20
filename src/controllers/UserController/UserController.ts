import { Request, Response } from "express";
import { UserService } from "../../services/User/UserService";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await this.userService.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  }

  //Here, we could do a recurrent call to the getUsers above and filter the result returning by userId,
  // but we are going to use the same logic for all the methods available in the documentation.
  async getUserById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const user = await this.userService.getUserById(id);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar usuário" });
    }
  }
}

// src/services/UserService.ts
import axios from 'axios';
import { config } from '../../config/env';
import { User } from '../../interfaces/User';

export class UserService {
  private baseUrl = config.api.baseUrl;

  async getUsers(): Promise<User[]> {
    const response = await axios.get(`${this.baseUrl}/users`);
    return response.data;
  }

  async getUserById(id: number): Promise<User> {
    const response = await axios.get(`${this.baseUrl}/users/${id}`);
    return response.data;
  }
}

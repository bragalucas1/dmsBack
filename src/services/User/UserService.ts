// src/services/UserService.ts
import axios from 'axios';
import { config } from '../../config/env';
import { User } from '../../interfaces/User';

export class UserService {
  private baseUrl = config.api.baseUrl;

  async getUsers(): Promise<User[]> {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  async getUserById(id: number): Promise<User> {
    const response = await axios.get(`${this.baseUrl}/${id}`);
    return response.data;
  }

  async createUser(userData: Partial<User>): Promise<User> {
    const response = await axios.post(`${this.baseUrl}/users`, userData, {
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.data;
  }

  async updateUser(id: number, userData: Partial<User>): Promise<User> {
    const response = await axios.put(`${this.baseUrl}/${id}`, userData, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response.data;
  }

  async deleteUser(id: number): Promise<boolean> {
    const response = await axios.delete(`${this.baseUrl}/${id}`);
    return response.status === 200;
  }
}

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { UserService } from '../UserService';
import { User } from '../../../interfaces/User';

describe('UserService', () => {
  let userService: UserService;
  let mockAxios: MockAdapter;

  beforeAll(() => {
    userService = new UserService();
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test('should fetch all users', async () => {
    const mockUsers: User[] = [
      { id: 1, name: 'John Doe', username: 'john', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', username: 'jane', email: 'jane@example.com' },
    ];
    mockAxios.onGet('https://jsonplaceholder.typicode.com/users').reply(200, mockUsers);

    const users = await userService.getUsers();

    expect(users).toEqual(mockUsers);
  });

  test('should fetch a user by ID', async () => {
    const mockUser: User = { id: 1, name: 'John Doe', username: 'john', email: 'john@example.com' };
    mockAxios.onGet('https://jsonplaceholder.typicode.com/users/1').reply(200, mockUser);

    const user = await userService.getUserById(1);

    expect(user).toEqual(mockUser);
  });

  test('should create a user', async () => {
    const userData: Partial<User> = { name: 'John Doe', username: 'john', email: 'john@example.com' };
    const createdUser: User = { id: 1, name: userData.name!, username: userData.username!, email: userData.email! };
    mockAxios.onPost('https://jsonplaceholder.typicode.com/users').reply(201, createdUser);

    const user = await userService.createUser(userData);

    expect(user).toEqual(createdUser);
  });

  test('should update a user', async () => {
    const userData: Partial<User> = { name: 'John Doe Updated' };
    const updatedUser: User = { id: 1, name: 'John Doe Updated', username: 'john', email: 'john@example.com' };
    mockAxios.onPut('https://jsonplaceholder.typicode.com/users/1').reply(200, updatedUser);

    const user = await userService.updateUser(1, userData);

    expect(user).toEqual(updatedUser);
  });

  test('should delete a user', async () => {
    mockAxios.onDelete('https://jsonplaceholder.typicode.com/users/1')
            .reply(200, {});

    const result = await userService.deleteUser(1);

    expect(result).toBe(true);
  });
});

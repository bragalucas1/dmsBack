import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { AlbumService } from '../AlbumService';
import { Album } from '../../../interfaces/Album';

describe('AlbumService', () => {
  let albumService: AlbumService;
  let mockAxios: MockAdapter;
  const albumId = 1;

  beforeAll(() => {
    albumService = new AlbumService();
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test('should fetch all albums for a user', async () => {
    const userId = 1;
    const mockAlbums: Album[] = [
      { id: 1, userId, title: 'Album 1' },
      { id: 2, userId, title: 'Album 2' },
    ];
    mockAxios.onGet(`https://jsonplaceholder.typicode.com/users/${userId}/albums`).reply(200, mockAlbums);

    const albums = await albumService.getUserAlbums(userId);

    expect(albums).toEqual(mockAlbums);
  });

  test('should create an album', async () => {
    const userId = 1;
    const title = 'New Album';
    const createdAlbum: Album = { id: 1, userId, title };
    mockAxios.onPost('https://jsonplaceholder.typicode.com/albums').reply(201, createdAlbum);

    const album = await albumService.createAlbum(userId, title);

    expect(album).toEqual(createdAlbum);
  });

  test('should fetch an album by ID', async () => {
    const mockAlbum: Album = { id: albumId, userId: 1, title: 'Album 1' };
    mockAxios.onGet(`https://jsonplaceholder.typicode.com/albums/${albumId}`).reply(200, mockAlbum);

    const album = await albumService.getAlbum(albumId);

    expect(album).toEqual(mockAlbum);
  });

  test('should update an album', async () => {
    const albumData: Partial<Album> = { title: 'Updated Album' };
    const updatedAlbum: Album = { id: albumId, userId: 1, title: 'Updated Album' };
    mockAxios.onPut(`https://jsonplaceholder.typicode.com/albums/${albumId}`).reply(200, updatedAlbum);

    const album = await albumService.updateAlbum(albumId, albumData);

    expect(album).toEqual(updatedAlbum);
  });

  test('should delete an album', async () => {
    mockAxios.onDelete(`https://jsonplaceholder.typicode.com/albums/${albumId}`).reply(200);

    const result = await albumService.deleteAlbum(albumId);

    expect(result).toBe(true);
  });
});

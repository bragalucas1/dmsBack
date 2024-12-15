import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { AlbumService } from "../AlbumService";
import { Album } from "../../../interfaces/Album";

describe("AlbumService", () => {
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

  test("should fetch all albums for a user", async () => {
    const userId = 1;
    const mockAlbums: Album[] = [
      { id: 1, userId, title: "Album 1" },
      { id: 2, userId, title: "Album 2" },
    ];
    mockAxios
      .onGet(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .reply(200, mockAlbums);

    const albums = await albumService.getUserAlbums(userId);

    expect(albums).toEqual(mockAlbums);
  });

  test("should fetch an album by ID", async () => {
    const mockAlbum: Album = { id: albumId, userId: 1, title: "Album 1" };
    mockAxios
      .onGet(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      .reply(200, mockAlbum);

    const album = await albumService.getAlbum(albumId);

    expect(album).toEqual(mockAlbum);
  });
});

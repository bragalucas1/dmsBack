import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Photo } from "../../../interfaces/Photo";
import { PhotoService } from "../PhotosService";

describe("PhotoService", () => {
  let photoService: PhotoService;
  let mockAxios: MockAdapter;
  const albumId = 1;
  const photoId = 1;

  beforeAll(() => {
    photoService = new PhotoService();
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test("should fetch all photos for an album", async () => {
    const mockPhotos: Photo[] = [
      {
        id: 1,
        albumId,
        title: "Photo 1",
        url: "http://example.com/photo1",
        thumbnailUrl: "http://example.com/thumb1",
      },
      {
        id: 2,
        albumId,
        title: "Photo 2",
        url: "http://example.com/photo2",
        thumbnailUrl: "http://example.com/thumb2",
      },
    ];

    mockAxios
      .onGet(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .reply(200, mockPhotos);

    const photos = await photoService.getAlbumPhotos(albumId);

    expect(photos).toEqual(mockPhotos);
  });

  test("should create a photo", async () => {
    const photoData: Partial<Photo> = {
      albumId: 1,
      title: "New Photo",
      url: "http://example.com/newphoto",
      thumbnailUrl: "http://example.com/thumbnewphoto",
    };
    const createdPhoto: Photo = {
      id: 1,
      albumId: photoData.albumId!,
      title: photoData.title!,
      url: photoData.url!,
      thumbnailUrl: photoData.thumbnailUrl!,
    };

    mockAxios
      .onPost("https://jsonplaceholder.typicode.com/photos")
      .reply(201, createdPhoto);

    const photo = await photoService.createPhoto(photoData);

    expect(photo).toEqual(createdPhoto);
  });
});

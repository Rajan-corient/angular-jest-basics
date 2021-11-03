import { HttpClient } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { defer } from 'rxjs';
import { HomeService } from './home.service';

describe('Home Service', () => {
  let homeService: HomeService;
  let httpClientSpy: { get: jest.Mock };
  httpClientSpy = { get: jest.fn() };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HomeService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });
    homeService = TestBed.inject(HomeService);
  });

  it('is created', () => {
    expect(homeService).toBeDefined();
  });

  it('call getCities()', fakeAsync(() => {
    const testData = [
      {
        name: 'trulli',
        image: 'pic_trulli.jpg',
        alt: 'Italian Trulli',
      },
      {
        name: 'chania',
        image: 'img_chania.jpg',
        alt: 'Chania',
      },
    ];

    httpClientSpy.get.mockReturnValue(defer(() => Promise.resolve(testData)));

    homeService.getCities().then((data) => {
      expect(data).toEqual(testData);
    });
    tick();
  }));
});

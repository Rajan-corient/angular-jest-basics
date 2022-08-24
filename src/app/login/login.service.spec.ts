import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';

describe('Login Service', () => {
  let loginService: LoginService;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });
    loginService = TestBed.inject(LoginService);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('is created', () => {
    expect(loginService).toBeDefined();
  });

  it('call login()', () => {
    const testData = true;
    const inputData = {
      username: 'admin',
      password: 'admin',
    };

    expect(loginService.login(inputData)).resolves.toEqual(testData);

    const req = httpController.expectOne('login');

    expect(req.request.method).toEqual('POST');

    req.flush(testData);
  });

  it('call login() failed', () => {
    const emsg = 'status 500 error';
    const inputData = {
      username: 'admin',
      password: 'admin',
    };

    expect.assertions(2);
    expect(loginService.login(inputData)).rejects.toMatchObject({
      status: 500,
      error: emsg,
    });

    const req = httpController.expectOne('login');

    expect(req.request.method).toEqual('POST');

    req.flush(emsg, { status: 500, statusText: 'Server Error' });
  });
});

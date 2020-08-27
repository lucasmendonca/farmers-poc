import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';

import * as request from 'supertest';

import { AppModule } from '../src/app.module';
import { mockedFarmers } from '../src/constants/mocked-farmers';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/farmers/search?key=Lucas (GET)', () => {
    const res = [mockedFarmers[0]];
    
    return request(app.getHttpServer())
      .get('/farmers/search?key=Lucas')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function (response) {
          expect(response.body).toEqual(res);
      });
  });

  it('/farmers/search?key=lucas (GET) - case insensitive', () => {
    const res = [mockedFarmers[0]];
    
    return request(app.getHttpServer())
      .get('/farmers/search?key=lucas')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(function (response) {
          expect(response.body).toEqual(res);
      });
  });

  it('/farmers/search (GET) - Bad Request', () => {
    const res = {"statusCode":400,"message":"Query string 'key' is required","error":"Bad Request"};
    
    return request(app.getHttpServer())
      .get('/farmers/search')
      .expect(400)
      .expect(res);
  });

  it('/farmers/search?key= (GET) - Bad Request', () => {
    const res = {"statusCode":400,"message":"Query string 'key' is required","error":"Bad Request"};
    
    return request(app.getHttpServer())
      .get('/farmers/search?key=')
      .expect(400)
      .expect(res);
  });
});

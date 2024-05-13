// app.test.ts
import request from 'supertest';
import { app, server } from './app';

afterAll(done => {
  server.close(done);
});

describe('GET /test', () => {
  it('should return 200 when variable is GitHubActions', async () => {
    const res = await request(app)
      .get('/test')
      .query({ variable: 'GitHubActions' });
    expect(res.statusCode).toEqual(200);
  });

  it('should return 400 when variable is not GitHubActions', async () => {
    const res = await request(app)
      .get('/test')
      .query({ variable: 'NotGitHubActions' });
    expect(res.statusCode).toEqual(400);
  });
});

const request = require('supertest');
const app = require('../server'); // Assuming server exports app

describe('Auth', () => {
  it('should register user', async () => {
    const res = await request(app).post('/api/auth/register').send({
      name: 'Test',
      email: 'test@example.com',
      password: 'pass',
    });
    expect(res.statusCode).toEqual(201);
  });
});

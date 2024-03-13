const supertest = require('supertest');
const web = require('../src/application/web');
const User = require('../src/models/user.model');

const mockUser = {
  username: 'john_lennon',
  name: 'John Lennon',
  email: 'john@mail.com',
  password: 'P4ssw0rd#'
};

describe('POST /api/users', () => {
  afterEach(async () => {
    await User.destroy({
      where: {
        username: mockUser.username
      }
    });
  });

  it('should can create new user', async () => {
    const result = await supertest(web).post('/api/users').send(mockUser);

    expect(result.status).toBe(201);
    expect(result.body.message).toBe('created');
  });

  it('should reject if request is invalid', async () => {
    const result = await supertest(web).post('/api/users').send();

    expect(result.status).toBe(422);
    expect(result.body.message).toBe('validation error');
    expect(result.body.errors).toBeDefined();
  });
});

describe('GET /api/users', () => {
  it('should can return list users', async () => {
    const result = await supertest(web).get('/api/users');

    expect(result.status).toBe(200);
    expect(result.body.message).toBe('success');
  });

  it('should paginate list users', async () => {
    const queryMock = {
      page: 2,
      limit: 5,
    };

    const result = await supertest(web).get('/api/users').query(queryMock);

    expect(result.status).toBe(200);
    expect(result.body.data.page).toBe(2);
  });

  it('should reject request if query not valid', async () => {
    const queryMock = {
      page: -1,
      order_by: 'user_id'
    };

    const result = await supertest(web).get('/api/users').query(queryMock);

    expect(result.status).toBe(422);
    expect(result.body.message).toBe('validation error');
    expect(result.body.errors).toBeDefined();
  });
});

describe('GET /api/users/:userId', () => {
  it('should can return detail users', async () => {
    const user = await User.findOne({
      where: {
        id: '31558ef1-0209-47ac-82fe-865a0af1f45a'
      }
    });

    const result = await supertest(web).get(`/api/users/${user.id}`);

    expect(result.status).toBe(200);
    expect(result.body.message).toBe('success');
  });

  it('should return 404 when user not found', async () => {
    const result = await supertest(web).get('/api/users/1');

    expect(result.status).toBe(404);
  });
});

describe('PUT /apu/users/:userId', () => {
  it('should can update existing users', async () => {
    const mockData = {
      name: 'Silvester Test',
      email: 'silvester@gmail.com',
    };

    const user = await User.findOne({
      where: {
        id: '31558ef1-0209-47ac-82fe-865a0af1f45a'
      }
    });

    const result = await supertest(web)
      .put(`/api/users/${user.id}`)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send(mockData);

    expect(result.status).toBe(200);
    expect(result.body.message).toBe('success');
  });

  it('should reject request if not valid', async () => {
    const user = await User.findOne();

    const result = await supertest(web).put(`/api/users/${user.id}`).send({});

    expect(result.status).toBe(422);
    expect(result.body.message).toBe('validation error');
    expect(result.body.errors).toBeDefined();
  });
});
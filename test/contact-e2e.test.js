const supertest = require('supertest');
const web = require('../src/application/web');
const Contact = require('../src/models/contact.model');

describe('POST /api/contacts', () => {
  afterEach(async () => {
    await Contact.destroy({
      where: {
        user_id: '31558ef1-0209-47ac-82fe-865a0af1f45a'
      }
    });
  });

  it('should reject request if invalid value', async () => {
    const result = await supertest(web).post('/api/contacts').send();

    expect(result.status).toBe(422);
    expect(result.body.errors).toBeDefined();
  });

  it('should create new contact', async () => {
    const mockData = {
      user_id: '31558ef1-0209-47ac-82fe-865a0af1f45a',
      phone_number: 8982356781
    };

    const result = await supertest(web).post('/api/contacts').send(mockData);

    expect(result.status).toBe(201);
    expect(result.body.message).toBe('created');
  });
});
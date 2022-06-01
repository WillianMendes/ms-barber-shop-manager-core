import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { plainToInstance } from 'class-transformer';
import { CreateCustomerDto } from '../src/customer/dto/create-customer.dto';

describe('CustomerController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/customer (POST)', async () => {
    const customerPlain = {
      firstname: 'John',
      lastname: 'Doe',
      cpf: '44818464880',
      email: 'john@email.com',
      birthdate: '2000-01-01',
      password: 'password123',
    };

    const customerDto = plainToInstance(CreateCustomerDto, customerPlain);

    return request(app.getHttpServer())
      .post('/customer')
      .send(customerDto)
      .expect(201);
  });
});

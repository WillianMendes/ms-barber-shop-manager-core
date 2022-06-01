import { Test, TestingModule, TestingModuleBuilder } from '@nestjs/testing';
import { ModuleMetadata } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CustomerController } from './customer.controller';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { validate } from 'class-validator';

describe('CustomerController', () => {
  let controller: CustomerController;

  beforeEach(async () => {
    const controllers = [CustomerController];
    const metadata: ModuleMetadata = { controllers };
    const moduleBuilder: TestingModuleBuilder =
      Test.createTestingModule(metadata);
    const module: TestingModule = await moduleBuilder.compile();

    controller = module.get<CustomerController>(CustomerController);
  });

  describe('create', () => {
    it('should be all defined and correct', async () => {
      const customerPlain = {
        firstname: 'John',
        lastname: 'Doe',
        cpf: '44818464880',
        email: 'john@email.com',
        birthdate: '2000-01-01',
        password: 'password123',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);

      const result = await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(0);
      expect(result).toEqual(customerDto);
    });

    it('should be firstname null', async () => {
      const customerPlain = {
        lastname: 'Doe',
        cpf: '44818464880',
        email: 'john@email.com',
        birthdate: '2000-01-01',
        password: 'password123',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });
  });
});

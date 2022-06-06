import { ModuleMetadata } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Test, TestingModule, TestingModuleBuilder } from '@nestjs/testing';
import spyOn = jest.spyOn;
import { CustomerController } from './customer.controller';
import { CustomerService } from '../service/customer.service';
import { EncryptService } from '../../../core/encrypt/service/encrypt.service';
import { CustomerEntity } from '../entity/customer.entity';
import { CustomerFactory } from '../entity/customer.factory';
import { CreateCustomerDto } from '../dto/create-customer.dto';

describe('CustomerController', () => {
  let controller: CustomerController;
  let service: CustomerService;

  const makeSpyOnServiceCreate = (customerDto: CreateCustomerDto) => {
    spyOn(service, 'create').mockImplementation(() => {
      const customer: CustomerEntity =
        CustomerFactory.entityByCreateDTO(customerDto);
      return Promise.resolve(customer);
    });
  };

  beforeEach(async () => {
    const imports = [EncryptService];
    const providers = [CustomerService, EncryptService];
    const controllers = [CustomerController];
    const metadata: ModuleMetadata = { controllers, imports, providers };
    const moduleBuilder: TestingModuleBuilder =
      Test.createTestingModule(metadata);
    const module: TestingModule = await moduleBuilder.compile();

    controller = module.get<CustomerController>(CustomerController);
    service = module.get<CustomerService>(CustomerService);
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
      makeSpyOnServiceCreate(customerDto);

      const result = await controller.create(customerDto);
      const errors = await validate(customerDto);

      const customer = CustomerFactory.entityByCreateDTO(customerDto);

      expect(errors.length).toBe(0);
      expect(result).toEqual(customer);
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
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });

    it('should be firstname empty', async () => {
      const customerPlain = {
        firstname: '',
        lastname: 'Doe',
        cpf: '44818464880',
        email: 'john@email.com',
        birthdate: '2000-01-01',
        password: 'password123',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });

    it('should be lastname null', async () => {
      const customerPlain = {
        firstname: 'John',
        cpf: '44818464880',
        email: 'john@email.com',
        birthdate: '2000-01-01',
        password: 'password123',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });

    it('should be lastname empty', async () => {
      const customerPlain = {
        firstname: 'John',
        lastname: '',
        cpf: '44818464880',
        email: 'john@email.com',
        birthdate: '2000-01-01',
        password: 'password123',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });

    it('should be cpf null', async () => {
      const customerPlain = {
        firstname: 'John',
        lastname: 'Doe',
        email: 'john@email.com',
        birthdate: '2000-01-01',
        password: 'password123',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });

    it('should be cpf empty', async () => {
      const customerPlain = {
        firstname: 'John',
        lastname: 'Doe',
        cpf: '',
        email: 'john@email.com',
        birthdate: '2000-01-01',
        password: 'password123',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });

    it('should be cpf invalid', async () => {
      const customerPlain = {
        firstname: 'John',
        lastname: 'Doe',
        cpf: '44818464881',
        email: 'john@email.com',
        birthdate: '2000-01-01',
        password: 'password123',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });

    it('should be email null', async () => {
      const customerPlain = {
        firstname: 'John',
        lastname: 'Doe',
        cpf: '44818464880',
        birthdate: '2000-01-01',
        password: 'password123',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });

    it('should be email empty', async () => {
      const customerPlain = {
        firstname: 'John',
        lastname: 'Doe',
        cpf: '44818464880',
        email: '',
        birthdate: '2000-01-01',
        password: 'password123',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });

    it('should be email invalid', async () => {
      const customerPlain = {
        firstname: 'John',
        lastname: 'Doe',
        cpf: '44818464880',
        email: 'john2email',
        birthdate: '2000-01-01',
        password: 'password123',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });

    it('should be birthdate null', async () => {
      const customerPlain = {
        firstname: 'John',
        lastname: 'Doe',
        cpf: '44818464880',
        email: 'john@email.com',
        password: 'password123',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });

    it('should be birthdate empty', async () => {
      const customerPlain = {
        firstname: 'John',
        lastname: 'Doe',
        cpf: '44818464880',
        email: 'john@email.com',
        birthdate: '',
        password: 'password123',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });

    it('should be birthdate invalid', async () => {
      const customerPlain = {
        firstname: 'John',
        lastname: 'Doe',
        cpf: '44818464880',
        email: 'john@email.com',
        birthdate: '01/01/2000',
        password: 'password123',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });

    it('should be password null', async () => {
      const customerPlain = {
        firstname: 'John',
        lastname: 'Doe',
        cpf: '44818464880',
        email: 'john@email.com',
        birthdate: '2000-01-01',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });

    it('should be password empty', async () => {
      const customerPlain = {
        firstname: 'John',
        lastname: 'Doe',
        cpf: '44818464880',
        email: 'john@email.com',
        birthdate: '2000-01-01',
        password: '',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });

    it('should be password min length invalid', async () => {
      const customerPlain = {
        firstname: 'John',
        lastname: 'Doe',
        cpf: '44818464880',
        email: 'john@email.com',
        birthdate: '2000-01-01',
        password: '123',
      };

      const customerDto = plainToInstance(CreateCustomerDto, customerPlain);
      makeSpyOnServiceCreate(customerDto);

      await controller.create(customerDto);
      const errors = await validate(customerDto);

      expect(errors.length).toBe(1);
    });
  });
});

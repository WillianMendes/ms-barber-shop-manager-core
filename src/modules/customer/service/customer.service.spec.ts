import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';
import CustomerRepository from '../repository/customer.repository';
import { EncryptModule } from '../../../core/shared/encrypt/encrypt.module';
import { DatabaseModule } from '../../../core/config/database/database.module';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerService, CustomerRepository],
      imports: [DatabaseModule, EncryptModule],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

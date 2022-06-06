import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';
import { EncryptService } from '../../../core/encrypt/service/encrypt.service';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerService, EncryptService],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

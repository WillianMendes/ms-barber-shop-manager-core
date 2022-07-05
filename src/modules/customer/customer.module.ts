import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/config/database/database.module';
import { EncryptModule } from '../../core/shared/encrypt/encrypt.module';
import { CustomerController } from './controller/customer.controller';
import CustomerRepository from './repository/customer.repository';
import { CustomerService } from './service/customer.service';

@Module({
  imports: [DatabaseModule, EncryptModule],
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository],
})
export class CustomerModule {}

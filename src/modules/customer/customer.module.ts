import { Module } from '@nestjs/common';
import { EncryptModule } from '../../core/encrypt/encrypt.module';
import { CustomerController } from './controller/customer.controller';
import { CustomerService } from './service/customer.service';

@Module({
  imports: [EncryptModule],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}

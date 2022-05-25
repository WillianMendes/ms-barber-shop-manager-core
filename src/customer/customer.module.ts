import { Module } from '@nestjs/common';
import { CustomerController } from './controller/customer.controller';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [],
})
export class CustomerModule {}

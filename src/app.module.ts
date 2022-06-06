import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import EnvironmentConfig from './core/config/environment/environment.config';
import { CustomerModule } from './modules/customer/customer.module';

@Module({
  imports: [ConfigModule.forRoot(EnvironmentConfig.handle()), CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

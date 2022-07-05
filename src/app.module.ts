import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import EnvironmentConfig from './core/config/environment/environment.config';
import { CustomerModule } from './modules/customer/customer.module';
import { DatabaseModule } from './core/config/database/database.module';
import { EncryptModule } from './core/shared/encrypt/encrypt.module';

@Module({
  imports: [
    ConfigModule.forRoot(EnvironmentConfig.handle()),
    CustomerModule,
    DatabaseModule,
    EncryptModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

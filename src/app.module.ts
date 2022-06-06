import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import EnvironmentConfig from './core/config/environment/environment.config';
import { CustomerModule } from './modules/customer/customer.module';
import { EncryptModule } from './core/encrypt/encrypt.module';
import { EncryptService } from './core/encrypt/service/encrypt.service';

@Module({
  imports: [
    ConfigModule.forRoot(EnvironmentConfig.handle()),
    CustomerModule,
    EncryptModule,
  ],
  controllers: [],
  providers: [EncryptService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import EnvironmentConfig from './core/config/environment/environment.config';
import EnvironmentSchema from './core/config/environment/environment.schema';

@Module({
  imports: [ConfigModule.forRoot(EnvironmentConfig.handle())],
  controllers: [],
  providers: [],
})
export class AppModule {}

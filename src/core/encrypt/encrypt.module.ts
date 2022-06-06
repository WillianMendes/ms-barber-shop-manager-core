import { Module } from '@nestjs/common';
import { EncryptService } from './service/encrypt.service';

@Module({
  imports: [],
  providers: [EncryptService],
  exports: [EncryptService],
})
export class EncryptModule {}

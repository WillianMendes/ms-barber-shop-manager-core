import { Injectable, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { EncryptInterface } from './encrypt.interface';

@Injectable()
export class EncryptService implements EncryptInterface {
  private readonly logger = new Logger(EncryptService.name);

  async encrypt(text: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(text, salt);

    this.logger.log(`String convertida em hash ${hash} com sucesso.`);

    return hash;
  }

  async compare(text: string, hash: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(text, hash);

    this.logger.log(
      `String comparado com hash a ${hash} resultou em ${isMatch}.`,
    );

    return isMatch;
  }
}

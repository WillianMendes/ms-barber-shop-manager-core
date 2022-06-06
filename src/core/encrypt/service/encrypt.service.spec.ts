import { ModuleMetadata } from '@nestjs/common';
import { Test, TestingModule, TestingModuleBuilder } from '@nestjs/testing';
import spyOn = jest.spyOn;
import { EncryptService } from './encrypt.service';

describe('EncryptService', () => {
  let service: EncryptService;

  const makeSpyOnServiceEncrypt = (text: string) => {
    spyOn(service, 'encrypt').mockImplementation(() => {
      return Promise.resolve(text);
    });
  };

  const makeSpyOnServiceCompare = (text: string, hash: string) => {
    spyOn(service, 'compare').mockImplementation(() => {
      return Promise.resolve(text === hash);
    });
  };

  beforeEach(async () => {
    const providers = [EncryptService];
    const exports = [EncryptService];
    const metadata: ModuleMetadata = { providers, exports };
    const moduleBuilder: TestingModuleBuilder =
      Test.createTestingModule(metadata);
    const module: TestingModule = await moduleBuilder.compile();

    service = module.get<EncryptService>(EncryptService);
  });

  it('should be encrypt return corrects param', async () => {
    const passwordTest = 'password123';
    makeSpyOnServiceEncrypt(passwordTest);

    const resultHash = await service.encrypt(passwordTest);
    expect(resultHash).toEqual(passwordTest);
  });

  it('should be encrypt compare return true', async () => {
    const passwordTest = 'password123';
    const hashTest = 'password123';
    makeSpyOnServiceCompare(passwordTest, hashTest);

    const resultCompare = await service.compare(passwordTest, hashTest);
    expect(resultCompare).toEqual(true);
  });
});

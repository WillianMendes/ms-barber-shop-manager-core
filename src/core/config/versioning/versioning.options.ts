import { VersioningOptions, VersioningType } from '@nestjs/common';

class VersioningOptionsCustom {
  public static handle(): VersioningOptions {
    return {
      type: VersioningType.URI,
    };
  }
}

export default VersioningOptionsCustom;

import { SetMetadata } from '@nestjs/common';

export const Browser = (...browser: string[]) =>
  SetMetadata('browser', browser);

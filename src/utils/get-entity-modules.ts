import * as fs from 'fs';
import * as path from 'path';

import { Type } from '@nestjs/common';

export const getEntityModules: () => Type<any>[] = () => {
  const dirPath = path.join(__dirname, '..', 'entities');
  const models: Type<any>[] = [];
  const files = fs.readdirSync(dirPath, { recursive: true });
  files.forEach((file) => {
    if (
      (file as string).endsWith('.module.ts') ||
      (file as string).endsWith('.module.js')
    ) {
      const modelPath = path.join(dirPath, file);

      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const modelModule = require(modelPath);
      const model = Object.values(modelModule).find((exported) => {
        return typeof exported === 'function' || typeof exported === 'object';
      });
      if (model) {
        models.push(model as Type<any>);
      }
    }
  });
  return models;
};

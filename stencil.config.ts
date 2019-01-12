import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'eon',
  plugins: [
    sass()
  ],
  outputTargets: [
    { type: 'www' },
    { type: 'dist' }
  ],
  globalScript: 'src/global/eon.ts',
  globalStyle: 'src/global/eon.css'
};

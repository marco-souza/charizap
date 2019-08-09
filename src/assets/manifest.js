import { getVarEnv } from '../../webpack/utils'

const manifest = {
  fingerprints: false,
  filename: 'manifest.json',
  name: getVarEnv('APP_NAME'),
  short_name: getVarEnv('APP_SHORT_NAME'),
  description: getVarEnv('DESCRIPTION'),
  background_color: getVarEnv('BG_COLOR'),
  theme_color: getVarEnv('THEME_COLOR'),
  crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
  icons: {
    src: getVarEnv('APP_LOGO'),
    sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
  },
}

export default manifest

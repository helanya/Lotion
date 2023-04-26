// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  exclude: [
    'node_modules',
    'dist',
    '.git',
    '.husky',
    '.vscode',
    'public',
    'build',
    'mock',
  ],
  presets: [presetUno()],
  transformers: [
    transformerDirectives(),
  ],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-center':
      'flex justify-center items-center',
    'flex-x-center':
      'flex justify-center',
    'flex-y-center':
      'flex items-center',
    'flex-x-end': 'flex justify-end',
    'flex-1-hidden':
      'flex-1 overflow-hidden',
    'flex-col': 'flex flex-col',
    'flex-col-center':
      'flex-center flex-col',
    'base-transition':
      'transition-all duration-300 ease-in-out',
  },
})

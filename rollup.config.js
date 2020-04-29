const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const babel = require('rollup-plugin-babel')
const {terser} = require('rollup-plugin-terser')

const suffix = process.env.USE_POLYFILLS == 'on' ? '.polyfilled' : ''

module.exports = {
  external: [
    'basekits', 'event-emitter-object'
  ],
  input: 'src/index.js',
  output: [
    {
      format: 'amd',
      file: 'dist/state-manager-object.amd' + suffix + '.js'
    },
    {
      format: 'cjs',
      file: 'dist/state-manager-object.cjs' + suffix + '.js'
    },
    {
      format: 'es',
      file: 'dist/state-manager-object.es' + suffix + '.js'
    },
    {
      format: 'iife',
      file: 'dist/state-manager-object.iife' + suffix + '.js',
      name: 'StateManagerObject',
      globals: {
        'basekits': 'Basekits',
        'event-emitter-object': 'EventEmitterObject'
      }
    },
    {
      format: 'umd',
      file: 'dist/state-manager-object.umd' + suffix + '.js',
      name: 'StateManagerObject',
      globals: {
        'basekits': 'Basekits',
        'event-emitter-object': 'EventEmitterObject'
      }
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    terser({sourcemap: false})
  ]
}

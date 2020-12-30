const {nodeResolve} = require('@rollup/plugin-node-resolve')
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
      exports: 'default',
      format: 'amd',
      file: 'dist/state-manager-object.amd' + suffix + '.js'
    },
    {
      exports: 'default',
      format: 'cjs',
      file: 'dist/state-manager-object.cjs' + suffix + '.js'
    },
    {
      exports: 'default',
      format: 'es',
      file: 'dist/state-manager-object.es' + suffix + '.js'
    },
    {
      exports: 'default',
      format: 'iife',
      file: 'dist/state-manager-object.iife' + suffix + '.js',
      name: 'StateManagerObject',
      globals: {
        'basekits': 'Basekits',
        'event-emitter-object': 'EventEmitterObject'
      }
    },
    {
      exports: 'default',
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
    nodeResolve(),
    commonjs(),
    babel(),
    terser()
  ]
}

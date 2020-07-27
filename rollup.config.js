import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'umd'
  },
  external: [/@babel\/runtime/],
  plugins: [commonjs(), nodeResolve(), typescript({ target: 'es5' }), babel({ babelHelpers: 'runtime', exclude: ['node_modules'], extensions: ['.ts', '.tsx'] })]
}

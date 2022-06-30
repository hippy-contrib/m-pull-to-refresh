const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const jsx = require('acorn-jsx');
const dts = require('rollup-plugin-dts').default;
const path = require('path');
const babelPlugin = require('@rollup/plugin-babel');
const { babel, getBabelOutputPlugin } = babelPlugin;

export default [
  {
    input: 'src/index.tsx',
    acornInjectPlugins: [jsx()],
    external: ['react', 'classnames'],
    plugins: [
      resolve(),
      commonjs(),
      babel({ 
        presets: ['@babel/preset-react'], 
        babelHelpers: 'bundled'  
      }),
      typescript({
        tsconfig: path.resolve(__dirname, './tsconfig.json'),
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            declarationMap: false,
          },
          exclude: ['**/__tests__/*.test.*'],
        },
      }),
    ],
    output: {
      dir: 'es',
      entryFileNames: '[name].js',
      chunkFileNames: '__chunk__/[name].js',
      format: 'es',
      // 为了兼容新语法，使用 babel 转译一下
      plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
    },
  }  
]
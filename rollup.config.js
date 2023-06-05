const resolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const jsx = require('acorn-jsx');
const dts = require('rollup-plugin-dts').default;
const path = require('path');
const babelPlugin = require('@rollup/plugin-babel');
const { babel, getBabelOutputPlugin } = babelPlugin;
const config = {
  input: 'src/index.tsx',
  external: ['react', 'classnames'],
}

export default [
  {
    ...config,
    acornInjectPlugins: [jsx()],
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
    output: [
      {
        dir: 'dist',
        entryFileNames: '[name].js',
        chunkFileNames: '__chunk__/[name].js',
        format: 'es',
        // 为了兼容新语法，使用 babel 转译一下
        plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
      },
      {
        dir: 'dist',
        entryFileNames: '[name].cjs',
        chunkFileNames: '__chunk__/[name].cjs',
        format: 'cjs',
        exports: 'auto',
        // 为了兼容新语法，使用 babel 转译一下
        plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
      }
    ],
  },
  {
    input: 'src/index.tsx',
    output: {
      file: 'dist/indes.d.ts',
      format: 'es',
    },
    external: config.external,
    plugins: [dts()],
  }
]
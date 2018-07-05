import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  {
    input: pkg.module,
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
    ],
    external: [
      'debug',
      'stream',
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        envName: 'rollup',
      }),
    ],
  },
];

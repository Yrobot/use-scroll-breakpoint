import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/index.js',
      format: 'esm',
      sourcemap: false,
    },
  ],
  plugins: [
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      include: ['**/*'],
      exclude: 'node_modules/**',
    }),
    terser(),
    filesize(),
  ],
  external: ['react'],
};

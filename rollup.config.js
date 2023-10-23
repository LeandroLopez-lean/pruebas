import css from 'rollup-plugin-css-only';

export default {
  input: 'index.css',

  output: {
    file: 'bundle.css', 
  },

  plugins: [
    css({ output: 'bundle.css' }),
  ],
};
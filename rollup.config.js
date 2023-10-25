import css from 'rollup-plugin-css-only';

export default {
  input: './estilos/index.css',

  output: {
    file: 'bundle.css', 
    format: 'es'
  },

  plugins: [
    [css()],
  ],
};

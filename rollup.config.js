import scss from "rollup-plugin-scss";

export default {
  input: "main.scss",
  output: {
    file: "dist/bundle.css",
  },
  plugins: [
    scss({
      outputStyle: "compressed",
    }),
  ],
};

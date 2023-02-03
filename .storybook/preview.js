import "../src/styles/globals.css";
import * as NextImage from "next/image";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// const OriginalNextImage = NextImage.default;

// Object.defineProperties(NextImage, "default", {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />,
// });

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    // /**
    //  * Use http://chir.ag/projects/name-that-color to name your colors
    //  * RGBA colors should follow convention [colour_name][opacity_percent]
    //  * e.g. rgba(0, 0, 0, 0.12) = black12
    //  */
    colors: {
      alto: string;
      black: string;
      white: string;
    };
    typography: {
      openSans: string;
    };
  }
}

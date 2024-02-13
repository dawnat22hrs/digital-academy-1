import "@emotion/react";
import { Colors } from "../theme/colors";

declare module "@emotion/react" {
  export interface Theme {
    colors: Colors;
  }
}

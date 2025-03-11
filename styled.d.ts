import "styled-components";
import { IDefaultTheme } from "@fravega-it/bumeran-ds-fvg";

declare module "styled-components" {
  // eslint-disable-next-line
  export interface DefaultTheme extends IDefaultTheme {}
}

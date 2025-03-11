import "styled-components";
import { IDefaultTheme } from "@fravega-it/bumeran-ds-fvg";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends IDefaultTheme {}
}

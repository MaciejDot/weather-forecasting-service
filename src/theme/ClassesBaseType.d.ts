import { Theme } from "@material-ui/core";

export type ClassesBaseType =
    (theme: Theme) => Record<string, CSSProperties | CreateCSSProperties<{}> | PropsFunc<{}, CreateCSSProperties<{}>>>
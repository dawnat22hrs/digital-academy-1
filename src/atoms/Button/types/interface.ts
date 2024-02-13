import {BUTTON_VARIANT} from "./enum.ts";
export interface IButton {
    variant: BUTTON_VARIANT,
    children: string,
    endIcon?: JSX.Element,
}
import {BUTTON_SIZE, BUTTON_VARIANT} from "./enum.ts";
export interface IButton {
    variant: BUTTON_VARIANT,
    children: string,
    endIcon?: JSX.Element,
    startIcon?: JSX.Element,
    size?: BUTTON_SIZE,
    onClick?: () => void,
}
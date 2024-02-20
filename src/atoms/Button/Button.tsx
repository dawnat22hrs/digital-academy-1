import {ButtonVariant} from "./style.ts";
import {IButton} from "./types/interface.ts";
import styled from "@emotion/styled";
export const Button = ({variant, children, endIcon, startIcon}: IButton) => {
    const BaseButton = ButtonVariant[variant]
    return (
        <BaseButton>
            {startIcon && <StartIcon>{startIcon}</StartIcon>}
            {children}
            {endIcon && <EndIcon>{endIcon}</EndIcon>}
        </BaseButton>
    )
}

const EndIcon = styled.div`
    margin-left: 14.91px;
`
const StartIcon = styled.div`
    margin-right: 14.91px;
`
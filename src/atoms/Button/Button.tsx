import {ButtonVariant} from "./style.ts";
import {IButton} from "./types/interface.ts";
import styled from "@emotion/styled";
export const Button = ({variant, children, endIcon}: IButton) => {
    const BaseButton = ButtonVariant[variant]
    return (
        <BaseButton>
            {children}
            {endIcon && <EndIcon>{endIcon}</EndIcon>}
        </BaseButton>
    )
}

const EndIcon = styled.div`
    margin-left: 14.91px;
`
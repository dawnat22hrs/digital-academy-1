import styled from "@emotion/styled"
import {Button, BUTTON_VARIANT} from "../atoms/Button/index.ts"
import {ArrowRight} from "../assets/ArrowRight.tsx"

export const AppButtonBlock = () => {
    return (
        <ButtonBlock>
            <Button variant={BUTTON_VARIANT.PRIMARY} endIcon={<ArrowRight />}>Download</Button>
            <Arrow src={'src/assets/spiralArrow.png'} alt="Arrow"/>
        </ButtonBlock>
    )
}


const ButtonBlock = styled.div`
    height: 164.97px;
`
const Arrow = styled.img`
  position: relative;
  right: -160px;
`
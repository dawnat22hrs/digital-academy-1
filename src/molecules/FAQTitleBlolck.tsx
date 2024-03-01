import styled from "@emotion/styled"
import {SelectWord, Title45} from "../atoms/style.ts"

export const FAQTitleBlock = () => {
    return (
        <TitleBlock>
            <Img src={'src/assets/Illustration 01.png'}/>
            <Title45 style={{lineHeight: '54px'}}>Frequently Asked <br /><SelectWord>Questions</SelectWord></Title45>
        </TitleBlock>
    )
}

const TitleBlock = styled.div`
`
const Img = styled.img`
  position: relative;
  left: 230px;
`
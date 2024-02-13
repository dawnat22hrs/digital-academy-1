import styled from "@emotion/styled";
import {SelectWord, Title45} from "../utils/style.ts";
import {FAQ} from "../organism/FAQ.tsx";

export const FAQSection = () => {
    return (
        <Section>
            <TitleBlock>
                <Img src={'src/assets/Illustration 01.png'}/>
                <Title45 style={{lineHeight: '54px'}}>Frequently Asked <br /><SelectWord>Questions</SelectWord></Title45>
            </TitleBlock>
            <FAQ />
        </Section>
    )
}

const Section = styled.section`
  width: 1152px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const TitleBlock = styled.div`
`
const Img = styled.img`
  position: relative;
  left: 230px;
`
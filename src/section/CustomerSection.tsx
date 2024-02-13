import styled from "@emotion/styled";
import {SelectWord, Title45} from "../utils/style.ts";
import {CustomerCarousel} from "../organism/CustomerCarousel.tsx";

export const CustomerSection = () => {
    return (
        <Section>
            <TitleBlock>
                <Title45><SelectWord>Customer</SelectWord> Say</Title45>
            </TitleBlock>
            <CustomerCarousel />
        </Section>
    )
}

const Section = styled.section`
  margin: 0 auto;
  width: 1250px;
  border-top: 1px solid #CBCBCB;
  padding: 116px 0 189px;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
`
const TitleBlock = styled.div`
  width: 1250px;
  display: flex;
  justify-content: center;
`
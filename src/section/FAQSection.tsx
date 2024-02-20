import styled from "@emotion/styled";
import {FAQ} from "../organism/FAQ.tsx";
import {FAQTitleBlock} from "../molecules/FAQTitleBlock.tsx";

export const FAQSection = () => {
    return (
        <Section id={'faq'}>
            <FAQTitleBlock />
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

import styled from "@emotion/styled";
import {PurchasesTextBlock} from "../organism/PurchasesTextBlock.tsx";
import {PurchasesDataBlock} from "../organism/PurchasesDataBlock.tsx";

export const PurchasesSection = () => {
    return (
        <Section>
            <PurchasesTextBlock />
            <PurchasesDataBlock />
        </Section>
    )
}

const Section = styled.section`
  width: 1250px;
  margin: 131px auto 116px;
  display: flex;
  justify-content: space-between;
`
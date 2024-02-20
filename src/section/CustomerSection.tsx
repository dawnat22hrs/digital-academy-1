import styled from "@emotion/styled";
import {SelectWord, Title45} from "../utils/style.ts";
import {CustomerCarousel} from "../organism/CustomerCarousel.tsx";
import {useGetCommentsQuery} from "../api/api.ts";

export const CustomerSection = () => {
    const {data} = useGetCommentsQuery(null)
    return (
        <Section data={data}>
            <TitleBlock>
                <Title45><SelectWord>Customer</SelectWord> Say</Title45>
            </TitleBlock>
            <CustomerCarousel />
        </Section>
    )
}

const Section = styled.section<{data: any}>`
  margin: 0 auto;
  width: 1250px;
  border-top: 1px solid #CBCBCB;
  padding: 116px 0 189px;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.data? 'start' : 'center'};
  justify-content: center;
  position: relative;
`
const TitleBlock = styled.div`
  width: 1250px;
  display: flex;
  justify-content: center;
`
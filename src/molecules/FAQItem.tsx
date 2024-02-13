import styled from "@emotion/styled";
import {useState} from "react";

interface IFAQItem {
    question: string,
    answer: string,
    id: number
}
export const FAQItem = ({question, answer, id}: IFAQItem) => {
    const [openId, setId] = useState<number | null>(null)

    return (
        <Item id={id} openId={openId}>
            <QuestionBlock>
                <ItemTitle>{question}</ItemTitle>
                <Marker onClick={() => id === openId ? setId(null) : setId(id)}>
                    {
                        id === openId
                            ?
                                '-'
                            :
                                '+'
                    }
                </Marker>
            </QuestionBlock>
            {
                id ===  openId
                    ?
                    <AnswerBlockOpen>
                        {answer}
                    </AnswerBlockOpen>
                    :
                    <AnswerBlockCollapse>
                        {answer}
                    </AnswerBlockCollapse>
            }

        </Item>
    )
}

const Item = styled.li<{id: number, openId: number | null}>`
  height: ${props => props.id === props.openId ? '186.81' : '75.81'}px;
  border-bottom: 1.06px solid ${({ theme }) => theme.colors.whiteAluminum};
  list-style: none;
  text-align: start;
  margin-bottom: 28.75px;
  transition: all 0.4s;
`
const ItemTitle = styled.span`
  font-family: Poppins;
  font-size: 23px;
  font-weight: 600;
  line-height: 59px;
  color: ${({ theme }) => theme.colors.grayishPurpleBlue};
`
const QuestionBlock = styled.div`
  width: 1152px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Marker = styled.div`
  width: 30.12px;
  height: 30.12px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.blue_violet_Crayola};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white100};
`
const  AnswerBlock = styled.div`
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.dullGray};
  width: 800px;
`
const AnswerBlockCollapse = styled(AnswerBlock)`
  height: 0;
  overflow: hidden;
`
const AnswerBlockOpen = styled(AnswerBlock)`
    height: auto;
`

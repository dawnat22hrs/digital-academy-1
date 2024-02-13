import styled from "@emotion/styled";
import {FAQItem} from "../molecules/FAQItem.tsx";

const model = [
    {
        question: 'How long does delivery take?',
        answer: 'You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?',
    },
    {
        question: 'How Does It Work ?',
        answer: 'You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?',
    },
    {
        question: 'How does your food delivery service work?',
        answer: 'You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?',
    },
    {
        question: 'What payment options do you accept?',
        answer: 'You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?',
    },
    {
        question: 'Do you offer discounts or promotions?',
        answer: 'You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?',
    },
]
export const FAQ = () => {
    return (
        <QuestionList>
            {
                model.map((item, id) => (
                    <FAQItem key={id} question={item.question} answer={item.answer} id={id}/>
                ))
            }
        </QuestionList>
    )
}

const QuestionList = styled.ul`
  width: 1152px;
  margin: 114px 0 160.76px;
`
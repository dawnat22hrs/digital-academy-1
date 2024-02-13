import styled from "@emotion/styled";
import {PURCHASES_STATUS} from "./types/enum.ts";

interface IPurchasesCard {
    active: boolean
    title: string,
    status: PURCHASES_STATUS,
    date: string,
    img?: string
}
export const PurchasesCard = ({active, status, title, date, img}: IPurchasesCard) => {
    return (
        <Card active={active}>
            <Img src={img} alt={'Food image'}/>
            <TextBlock>
                <Title>{title}</Title>
                <Text status={status}>{status}</Text>
            </TextBlock>
            <DateBlock>
                <Date>{date}</Date>
            </DateBlock>
        </Card>
    )
}

const Card = styled.div<{active: boolean}>`
  width: 345.17px;
  height: 88.3px;
  border-radius: 12.04px;
  background: ${({ theme }) => theme.colors.white100};
  margin-bottom: 15.05px;
  box-shadow: ${props => props.active ? '5.94564151763916px 71.34769439697266px 35.67384719848633px 0px #E5E5E5B2' : 'none'};
  cursor: pointer;
  display: flex;
  padding: 17.6px 20px 10px;
  position: relative;
  align-items: center;
  box-sizing: border-box;
`
const Img = styled.img`
  width: 77.26px;
  height: 80.08px;
`
const DateBlock = styled.div`
  display: flex;
  align-items: end;
  position: absolute;
  right: 17.23px;
  bottom: 10px;
`
const Date = styled.span`
  font-family: Poppins;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.grayWindow};
  position: relative;
`
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 48.11px;
  justify-content: space-between;
  position: relative;
  left: 19.06px;
`
const Title = styled.span`
  font-family: Poppins;
  font-size: 19px;
  font-weight: 600;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.grayishPurpleBlue};
`
const Text = styled.span<{status: PURCHASES_STATUS}>`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  color: ${props => props.status === PURCHASES_STATUS.CANCELLED ? ({ theme }) => theme.colors.deepYellowPink : ({ theme }) => theme.colors.grayishPurpleBlue};
`
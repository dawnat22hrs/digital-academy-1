import styled from "@emotion/styled";
import {PURCHASES_DATA_VARIANT} from "./types/enum.ts";

interface  IPurchasesItem {
    variant: PURCHASES_DATA_VARIANT
    percent: number
    currentMoney: number
}
export const PurchasesItem = ({variant, percent, currentMoney}: IPurchasesItem) => {
    return (
        <Item>
            <ItemHeader>
                <Marker variant={variant}>
                    {
                        variant === PURCHASES_DATA_VARIANT.EXPENSE ? <ImgMarker src={'src/assets/wallet.png'}/> : <ImgMarker src={'src/assets/money.png'}/>
                    }
                </Marker>
                <TextWrapper>
                    <Title>{variant}</Title>
                    <Subtitle>Increased By {percent}%</Subtitle>
                </TextWrapper>
                <CurrentMoney>${currentMoney}</CurrentMoney>
            </ItemHeader>
            <Sidebar variant={variant}>
                <Scroller variant={variant}/>
            </Sidebar>
        </Item>
    )
}

const Item = styled.div`
  width: 458.61px;
  height: 135.07px;
  padding: 25.13px;
  border-radius: 18.85px;
  border: 1.57px solid #EDF2F7;
  gap: 20.42px;
`
const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`
const Sidebar = styled.div<{variant: PURCHASES_DATA_VARIANT}>`
  width: 408.35px;
  height: 9.42px;
  border-radius: 20px;
  background: ${props => props.variant === PURCHASES_DATA_VARIANT.EXPENSE ? '#6C5FBC22' : '#FBAD1822'};
  margin-top: 20.42px;
`
const Scroller = styled.div<{variant: PURCHASES_DATA_VARIANT}>`
  width: ${props => props.variant === PURCHASES_DATA_VARIANT.EXPENSE ? '296.84' : '245.01'}px;
  height: 9.42px;
  border-radius: 20px;
  background: ${props => props.variant === PURCHASES_DATA_VARIANT.EXPENSE ? '#6C5FBC' : '#FBAD18'};
`
const Marker = styled.div<{variant: PURCHASES_DATA_VARIANT}>`
  width: 50.26px;
  height: 50.26px;
  border-radius: 50%;
  background: ${props => props.variant === PURCHASES_DATA_VARIANT.EXPENSE  ? '#F4F0FF' : '#F2FDF6'};
  display: flex;
  align-items: center;
  justify-content: center;
`
const ImgMarker = styled.img`
`
const TextWrapper = styled.div`
  display: flex;
  height: 55.14px;
  flex-direction: column;
  position: relative;
  left: 18.85px;
  justify-content: space-between;
`
const Title = styled.span`
  font-family: Manrope;
  font-size: 19px;
  font-weight: 800;
  line-height: 28px;
  color: #1A202C;
`
const Subtitle = styled.span`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #A0AEC0;
`
const CurrentMoney = styled.span`
  font-family: Manrope;
  font-size: 22px;
  font-weight: 800;
  line-height: 33px;
  color: #1A202C;
  position: absolute;
  right: 0;
`
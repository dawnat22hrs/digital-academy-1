import styled from "@emotion/styled";
import {DropDown} from "../molecules/DropDown/DropDown.tsx";
import {PURCHASES_DATA_VARIANT, PurchasesItem} from "../molecules/PurchasesItem";

const model = [
    {
        variant: PURCHASES_DATA_VARIANT.EXPENSE,
        percent: 10,
        currentMoney: 409.00,
    },
    {
        variant: PURCHASES_DATA_VARIANT.VOCHER_USAGE,
        percent: 5,
        currentMoney: 45.78,
    },
]
export const PurchasesDataBlock = () => {
    return (
        <Wrapper>
                <Header>
                    <Title>
                        Purchases
                    </Title>
                    <DropDown />
                </Header>
            <Main>
                {
                    model.map((item, id) => (<PurchasesItem {...item} key={id}/>))
                }
            </Main>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 534px;
  height: 466.46px;
  border-radius: 25.13px;
  border: 1.57px solid #EDF2F7;
  padding: 45.55px 37.69px;
  box-shadow: 5.94564151763916px 71.34769439697266px 35.67384719848633px 0px #32314222;
`
const Header = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.span`
  font-family: Manrope;
  font-size: 28px;
  font-weight: 800;
  line-height: 38px;
  color: #1A202C;
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21.99px;
  margin-top: 37.69px;
`
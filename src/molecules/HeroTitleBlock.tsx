import {HeroTitle} from "../atoms/HeroTitle.tsx";
import {SelectWord} from "../atoms/style.ts";
import styled from "@emotion/styled";
import {Button, BUTTON_VARIANT} from "../atoms/Button";

export const HeroTitleBlock = () => {
    return (
        <Block>
            <WordChipBlock>
                <Seporator />
                <Text>OVER 1000 USERS</Text>
            </WordChipBlock>
            <HeroTitle/>
            <HeroTextWrapper>
                <HeroText>
                    EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <SelectWord>$20 bonus</SelectWord>.
                </HeroText>
            </HeroTextWrapper>
            <ButtonBlock>
                <Button variant={BUTTON_VARIANT.PRIMARY}>Get Started</Button>
                <Button variant={BUTTON_VARIANT.SECONDARY}>Go Pro</Button>
            </ButtonBlock>
        </Block>
    )
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
`
const HeroTextWrapper = styled.div`
  margin-top: 16px;
    width: 499px;
`
const HeroText = styled.span`
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.dullGray};
`
const WordChipBlock = styled.div`
  display: flex;
  align-items: center;
  width: 231px;
  justify-content: space-between;
  margin-bottom: 18px;
`
const Seporator = styled.div`
  width: 54px;
  height: 0;
  border: 1px solid ${({ theme }) => theme.colors.transsport_black30};
`
const Text = styled.span`
  font-family: Poppins;
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.transsport_black30};
`
const ButtonBlock = styled.div`
  width: 284px;
  display: flex;
  justify-content: space-between;
  margin-top: 53px;
`
import styled from "@emotion/styled";
import {SelectWord, Title50} from "../utils/style.ts";
import {Button, BUTTON_VARIANT} from "../atoms/Button";
import {ArrowRight} from "../assets/ArrowRight.tsx";

export const AppTextBlock = () => {
    return (
        <Block>
            <TitleBlock>
                <Title50>
                    Premium <SelectWord>Quality</SelectWord>
                </Title50>
                <Title50>For Your Health</Title50>
            </TitleBlock>

            <List>
                <Item>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</Item>
                <Item>These foods promote overall wellness by support healthy digestion and boosting immunity</Item>
            </List>

            <ButtonBlock>
                <Button variant={BUTTON_VARIANT.PRIMARY} endIcon={<ArrowRight />}>Download</Button>
                <Arrow src={'src/assets/spiralArrow.png'}/>
            </ButtonBlock>
        </Block>
    )
}

const Block = styled.div`
    width: 559.71px;
`
const TitleBlock = styled.div`
`

const List = styled.ul`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 31px;
  color: ${({ theme }) => theme.colors.dullGray};
  margin: 0;
  padding-left: 22px;
  width: 500px;
  margin: 62px 0;
`
const Item = styled.li`
    margin-bottom: 27.94px;
`
const ButtonBlock = styled.div`
    height: 164.97px;
`
const Arrow = styled.img`
  position: relative;
  right: -160px;
`
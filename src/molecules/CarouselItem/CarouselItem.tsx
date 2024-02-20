import styled from "@emotion/styled";
import {ICarouselItem} from "../../types/interfaces.ts";
import {COMMENTS_VARIANT} from "./index.ts";

export const CommentsItem = ({body, user, variant}: ICarouselItem) => {
    return (
        <Item variant={variant}>
            <TextBlock variant={variant}>
                <TopBlock>
                    <Nickname>
                        @{user.username}
                    </Nickname>
                    <Img src={'../src/assets/Path 173.png'}/>
                </TopBlock>
                <Text>
                    {body}
                </Text>
            </TextBlock>
        </Item>
    )
}

const Item = styled.div<{variant: COMMENTS_VARIANT | undefined}>`
  width: ${props => props.variant === COMMENTS_VARIANT.LARGE ? '1133' :  '528'}px;
  height: 170px;
  background: ${({ theme }) => theme.colors.white100};
  border-radius: 20.12px;
  box-shadow: 5.94564151763916px 71.34769439697266px 35.67384719848633px 0px ${({ theme }) => theme.colors.grayishPurpleBlue20};
  padding: 38px 43px 41px;
  position: relative;
  margin: ${props => props.variant === COMMENTS_VARIANT.LARGE ? '0' :  '46'}px;
`
const TopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`
const Img = styled.img`
`
const TextBlock = styled.div<{variant: COMMENTS_VARIANT | undefined}>`
  width: ${props => props.variant === COMMENTS_VARIANT.LARGE ? '1027.69' : '442'}px;
  height: 71.25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Text = styled.span`
  font-family: Poppins;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.pearlescentLightGray};
`
const Nickname = styled.span`
  font-family: Poppins;
  font-size: 21px;
  font-weight: 500;
  line-height: 31px;
`
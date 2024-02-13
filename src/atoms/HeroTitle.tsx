import styled from "@emotion/styled";
import {SelectWord} from "../utils/style.ts";

export const HeroTitle = () => {
    return (
        <TitleBlock>
            <Title>
                Enjoy Foods All
                Over The <SelectWord>World</SelectWord>
            </Title>
        </TitleBlock>
    )
}
const TitleBlock = styled.div`
    width: 567px;
`
const Title = styled.h1`
  font-family: Poppins;
  font-size: 75px;
  font-weight: 600;
  line-height: 90px;
  color: ${({ theme }) => theme.colors.transsport_black};
  margin: 0;
`
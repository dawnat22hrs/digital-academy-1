
import styled from "@emotion/styled";
import {HeroTitleBlock} from "../molecules/HeroTitleBlock.tsx";
export const HeroSection  = () => {
    return (
        <HeroWrapper>
            <HeroTitleBlock />
            <HeroImg src={'src/assets/Hero.png'}/>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.section`
  margin: 0 auto;
  width: 1246px;
  padding: 49px 0 85px;
  display: flex;
`
const HeroImg = styled.img`
  width: 680.48px;
  height: 607px;
`
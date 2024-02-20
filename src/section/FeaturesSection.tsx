import styled from "@emotion/styled";
import {FeaturesContainer} from "../molecules/FeaturesContainer.tsx";

export const FeaturesSection = () => {
    return (
        <Section>
            <Img src={'src/assets/Vector 4.png'} alt={'background'}/>
            <Img src={'src/assets/Vector 7.png'} alt={'background'}/>
            <FeaturesContainer/>
            <Img2 src={'src/assets/Vector 6.png'} alt={'background'}/>
            <Img2 src={'src/assets/Vector 8.png'} alt={'background'}/>
        </Section>
    )
}

const Section = styled.section`
  height: 220.5px;
  background: #6C5FBC;
  display: flex;
`

const Img = styled.img`
  position: absolute;
`
const Img2 = styled.img`
    position: relative;
  margin-left: -95px;
`
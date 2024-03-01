import styled from "@emotion/styled";
import { ImgEnd, ImgStart } from "../atoms/style";
import { FeaturesList } from "../molecules/FeatureList";

export const FeaturesSection = () => {
    return (
        <Section>
            <ImgStart src={'src/assets/Vector 4.png'}/>
            <ImgStart src={'src/assets/Vector 7.png'}/>
            <Container>
                <FeaturesList/>
            </Container>
            <ImgEnd src={'src/assets/Vector 6.png'}/>
            <ImgEnd src={'src/assets/Vector 8.png'}/>
        </Section>
    )
}

const Section = styled.section`
  height: 220.5px;
  background: #6C5FBC;
  display: flex;
`
const Container = styled.div`
  margin: 0 auto;
  width: 942px;
  display: flex;
  align-items: center;
  height: 220.5px;
`
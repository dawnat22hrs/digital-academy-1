import styled from "@emotion/styled";

const models = [
    {
        data: '10K+',
        text: 'Satisfied Costumers \n All Great Over The World',
    },
    {
        data: '4M',
        text: 'Healthy Dishes Sold \n Including Milk Shakes Smooth',
    },
    {
        data: '99.99%',
        text: 'Reliable Customer Support \n We Provide Great Experiences'
    }
]

export const FeaturesSection = () => {
    return (
        <Section>
            <Img src={'src/assets/Vector 4.png'}/>
            <Img src={'src/assets/Vector 7.png'}/>
            <Container>
                <List>
                    {
                        models.map((item) => (
                            <Item key={item.text}>
                                <ItemData>
                                    {item.data}
                                </ItemData>
                                <ItemText>
                                    {item.text}
                                </ItemText>
                            </Item>
                        ))
                    }
                </List>
            </Container>
            <Img2 src={'src/assets/Vector 6.png'}/>
            <Img2 src={'src/assets/Vector 8.png'}/>
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
const List = styled.ul`
  display: flex;
  width: 942px;
  justify-content: space-between;
  margin: 0;
`
const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
`
const ItemData = styled.span`
  font-family: Public Sans;
  font-size: 43px;
  font-weight: 700;
  line-height: 54px;
  color: #fff;
  margin-bottom: 10.8px;
`
const ItemText = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #CBD5E1;
  text-align: center;
  white-space: pre-line;
`
const Img = styled.img`
  position: absolute;
`
const Img2 = styled.img`
    position: relative;
  margin-left: -95px;
`
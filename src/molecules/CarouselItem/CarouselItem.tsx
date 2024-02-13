import styled from "@emotion/styled";

interface ICarouselItem {
    avatar: string,
    name: string,
    text: string,
    grade: number[],
    timeWithUs: string,
    isActive: boolean,
}
export const CarouselItem = ({avatar, name, text, timeWithUs, grade, isActive}: ICarouselItem) => {
    return (
        <Item isActive={isActive}>
            {
                isActive &&
                <CustomerData>
                    <Avatar src={avatar} alt={'Avatar'}/>
                    <TextWrapper>
                        <Name>{name}</Name>
                        <Time>{timeWithUs} Time With Us</Time>
                    </TextWrapper>
                    <BackgroundImg src={'src/assets/Path 173.png'} alt={'Background image'}/>
                </CustomerData>
            }
            <TextBlock>
                <Text isActive={isActive}>
                    {text}
                </Text>
            </TextBlock>
            <GradeBlock>
                {
                    grade.map(id => <GradeItem key={id} alt={'Star'} src={'src/assets/StarGrade.png'}/>)
                }
            </GradeBlock>
        </Item>
    )
}

const Item = styled.div<{isActive: boolean}>`
  width: 528px;
  height: ${props => props.isActive ? '346' : '239'}px;
  background: ${({ theme }) => theme.colors.white100};
  border-radius: 20.12px;
  box-shadow: 5.94564151763916px 71.34769439697266px 35.67384719848633px 0px ${({ theme }) => theme.colors.grayishPurpleBlue20};
  padding: 38px 43px 41px;
  position: relative;
`
const TextBlock = styled.div`
  width: 442px;
  height: 105px;
`
const Text = styled.span<{isActive: boolean}>`
  font-family: Poppins;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 26px;
  color: ${props => props.isActive ? ({ theme }) => theme.colors.dullGray : ({ theme }) => theme.colors.pearlescentLightGray};
`
const GradeBlock = styled.div`
  width: 138px;
  height: 23px;
  display: flex;
  gap: 5.75px;
  position: absolute;
  bottom: 41px;
`
const GradeItem = styled.img`
`
const CustomerData = styled.div`
  height: 71.04px;
  margin-bottom: 31.96px;
  position: relative;
  display: flex;
  align-items: center;
`
const Avatar = styled.img`
  width: 71.04px;
  height: 71.04px;
  border-radius: 50%;
`
const TextWrapper = styled.div`
  display: flex;
  height: 59.38px;
  flex-direction: column;
  position: relative;
  left: 20.89px;
  justify-content: space-between;
`
const Name = styled.span`
  font-family: Poppins;
  font-size: 21px;
  font-weight: 500;
  line-height: 31px;
  color: ${({ theme }) => theme.colors.deepPurpleBlack};
`
const Time = styled.span`
  font-family: Quicksand;
  font-size: 17px;
  font-weight: 500;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.dullGray10};
`
const BackgroundImg = styled.img`
  position: absolute;
  right: 0;
`
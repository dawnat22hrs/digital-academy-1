import styled from "@emotion/styled";
import {CategoryChip} from "../atoms/categoryChip";
import {IRecipesCard} from "../types/interfaces.ts";

export const RecipesCard = ({image, categoryChip, rating, cookTimeMinutes, name}:IRecipesCard) => {
    return (
        <Card>
            <HeroImg src={image}/>
            <Container>
                <CategoryChip variant={categoryChip} />
                <TextContainer>
                    <Title>{name}</Title>
                    <AddMark id="mark">
                        <BookMark src={'src/assets/Book Mark.png'}/>
                    </AddMark>
                </TextContainer>
                <Clarification>
                    <Time>{cookTimeMinutes}min</Time>
                    <RatingImg src={'src/assets/Star.png'}/>
                    {rating}
                </Clarification>
            </Container>
        </Card>
    )
}

const Card = styled.div`
  width: 395.99px;
  height: 297.6px;
  border-radius: 30.02px;
  border: 1.25px solid #F4F4F6;
  box-shadow: 5.94564151763916px 71.34769439697266px 35.67384719848633px 0 #E5E5E5B2;
  background: #F4F4F6;
  cursor: pointer;
  transition: transform 250ms;
  
  &:hover {
    transform: translateY(-10px);
    
    #mark{
      visibility: visible;
    }
  }
`
const HeroImg = styled.img`
  width: 395.99px;
  height: 176.13px;
  border-radius: 30.02px 30.02px 0 0;
`
const Container = styled.div`
    padding: 11.17px 26.73px 17.98px 33px;
`
const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
`
const Title = styled.span`
  font-family: Poppins;
  font-size:20px;
  font-weight: 600;
  line-height: 42px;
  color: #323142;
  white-space: nowrap;
`
const Clarification = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  font-family: Manrope;
  font-size: 19px;
  font-weight: 400;
  line-height: 26px;
  color: #8E97A6;
`
const Time = styled.li`
  direction: rtl;
  float: left;
`
const RatingImg = styled.img``

const AddMark = styled.div`
  width: 40.09px;
  height: 40.09px;
  background: #DBD9EE;
  border-radius: 50%;
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const BookMark = styled.img`
  cursor: pointer;
`
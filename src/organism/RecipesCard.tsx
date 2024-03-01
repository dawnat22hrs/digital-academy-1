import styled from "@emotion/styled";
import {CategoryChip} from "../atoms/categoryChip";
import {IRecipesCard} from "../types/interfaces.ts";
import { RecipesTextContainer } from "../molecules/RecipesTextContainer.tsx";
import { RecipesClarification } from "../molecules/RecipesClarification.tsx";

export const RecipesCard = ({image, categoryChip, rating, cookTimeMinutes, name}:IRecipesCard) => {
    return (
        <Card data-testid="recipe-card">
            <HeroImg src={image} alt="recipe-image"/>
            <Container>
                <CategoryChip variant={categoryChip} />
                <RecipesTextContainer name={name}/>
                <RecipesClarification rating={rating} cookTimeMinutes={cookTimeMinutes}/>
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
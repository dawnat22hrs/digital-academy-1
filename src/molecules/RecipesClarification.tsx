import styled from "@emotion/styled"
import { RatingImg, RecipesTime } from "../atoms/style"

interface IRecipesClarification {
    rating: number | undefined,
    cookTimeMinutes: number | undefined,
}

export const RecipesClarification = ({rating, cookTimeMinutes}: IRecipesClarification) => {
    return (
        <Clarification>
            <RecipesTime>{cookTimeMinutes}min</RecipesTime>
            <RatingImg src={'src/assets/Star.png'} alt="rating-star"/>
            {rating}
        </Clarification>
    )
}

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

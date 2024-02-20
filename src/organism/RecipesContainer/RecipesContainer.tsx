import styled from "@emotion/styled";
import {IRecipesCard} from "../../types/interfaces.ts";
import {RecipesCard} from "../RecipesCard.tsx";
import {CATEGORY_VARIANT} from "../../atoms/categoryChip";
import {ClipLoader} from "react-spinners";
import {IRecipe} from "./types/interface.ts";

interface IRecipesContainer {
    data: IRecipe[]
}

export const RecipesContainer = ({data}: IRecipesContainer) => {
    return (
        <Container data={data}>
            {
                data ?
                    data.map((item: IRecipesCard) => (
                        <RecipesCard key={item.id} {...item} categoryChip={ item.mealType ? item.mealType[0] as CATEGORY_VARIANT : null}/>
                    ))
                    : <ClipLoader
                        color={'#000'}
                        size={'40px'}
                    />
            }
        </Container>
    )
}

const Container = styled.div<{data: any}>`
  display: flex;
  width: 1248.95px;
  justify-content: ${props => props.data ? 'space-between'  : 'center'};
  margin: 85.7px 0 65.7px;
  align-items: center;
`
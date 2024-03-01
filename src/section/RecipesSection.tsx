import styled from "@emotion/styled";
import {RecipesCard} from "../organism/RecipesCard.tsx";
import {SelectWord, Title45} from "../atoms/style.ts";
import {useGetRecipesQuery} from "../api/api.ts";
import {ClipLoader} from "react-spinners";
import {IRecipesCard} from "../types/interfaces.ts";

export const RecipesSection = () => {

    const { data } = useGetRecipesQuery(null)
    return (
        <Section id={'recipes'}>
            <Container>
                <Title45>Our Top <SelectWord>Recipes</SelectWord></Title45>
                <RecipesContainer data={data}>
                    {
                        data ?
                            data.recipes.map((item: IRecipesCard) => (
                                <RecipesCard key={item.id} {...item} categoryChip={item?.mealType[0]}/>
                            ))
                            : <ClipLoader
                                    color={'#000'}
                                    size={'40px'}
                                />
                    }
                </RecipesContainer>
            </Container>
        </Section>
    )
}

const Section = styled.section`
  margin: 0 auto;
  width: 1248.95px;
  padding: 100px 0 120px;
  border-top: 1px solid #CBCBCB;
  border-bottom: 1px solid #CBCBCB;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`
const RecipesContainer = styled.div<{data: any}>`
  display: flex;
  width: 1248.95px;
  justify-content: ${props => props.data ? 'space-between'  : 'center'};
  margin: 85.7px 0 65.7px;
  align-items: center;
`
import styled from "@emotion/styled";
import {SelectWord, Title45} from "../utils/style.ts";
import {useGetRecipesQuery} from "../api/api.ts";
import {RecipesContainer} from "../organism/RecipesContainer";

export const RecipesSection = () => {
    const { data } = useGetRecipesQuery(null)

    return (
        <Section id={'recipes'}>
            <Container>
                <Title45>Our Top <SelectWord>Recipes</SelectWord></Title45>
                <RecipesContainer data={data?.recipes} />
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

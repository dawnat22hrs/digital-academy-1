import styled from "@emotion/styled";
import {RecipesCard} from "../organism/RecipesCard.tsx";
import {CATEGORY_VARIANT} from "../atoms/categoryChip";
import {SelectWord, Title45} from "../utils/style.ts";
import {ArrowRight} from "../assets/ArrowRight.tsx";

const model = [
    {
        img: 'src/assets/RecipesImg1.png',
        title: 'The Chicken King',
        category: CATEGORY_VARIANT.PIZZA,
        min: 24,
        rating: 4.8,
    },
    {
        img: 'src/assets/RecipesImg2.png',
        title: 'The Burger King',
        category: CATEGORY_VARIANT.PIZZA,
        min: 24,
        rating: 4.9,
    },
    {
        img: 'src/assets/RecipesImg1.png',
        title: 'The Chicken King ',
        category: CATEGORY_VARIANT.PIZZA,
        min: 24,
        rating: 4.8,
    },
]

export const RecipesSection = () => {
    return (
        <Section id={'recipes'}>
            <Container>
                <Title45>Our Top <SelectWord>Recipes</SelectWord></Title45>
                <RecipesContainer>
                    {
                        model.map((item) => (
                            <RecipesCard key={item.title} img={item.img} categoryChip={item.category} min={item.min} rating={item.rating} title={item.title}/>
                        ))
                    }
                </RecipesContainer>
                <LinkBlock>
                    <Link href={'#'}>View all <ArrowRight/></Link>
                </LinkBlock>
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
const RecipesContainer = styled.div`
  display: flex;
  width: 1248.95px;
  justify-content: space-between;
  margin: 85.7px 0 65.7px;
`
const LinkBlock = styled.div`
  width: 1248.95px;
  overflow: auto;
`
const Link = styled.a`
  text-decoration: none;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 500;
  line-height: 45px;
  color: #ACADB9;
  display: flex;
  align-items: center;
  width: 112.8px;
  justify-content: space-between;
  position: relative;
  right: 0;
  float: right;
  cursor: pointer;
`

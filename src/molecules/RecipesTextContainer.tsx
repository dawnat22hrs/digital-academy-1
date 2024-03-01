import styled from "@emotion/styled"

interface IRecipesTextContainer {
    name: string | undefined,
}

export const RecipesTextContainer = ({name}: IRecipesTextContainer) => {
    return (
        <TextContainer>
            <Title>{name}</Title>
            <AddMark id="mark" data-testid="bookmark">
                <BookMark src={'src/assets/Book Mark.png'} alt="bookmark"/>
            </AddMark>
        </TextContainer>
    )
}

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
import styled from "@emotion/styled";

interface IReaction {
    reactions: number | undefined
}
export const Reaction = ({reactions}: IReaction) => {
    return (
        <ReactionBlock>
            <Level>{reactions}</Level>
            <Img src={'../src/assets/Star.png'} alt={'star'}/>
        </ReactionBlock>
    )
}

const ReactionBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const Level = styled.span`
  font-family: Manrope;
  font-size: 19px;
  font-weight: 400;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.manatee};
  cursor: pointer;
`
const Img = styled.img`
  width: 23.38px;
  height: 23.38px;
  cursor: pointer;
`
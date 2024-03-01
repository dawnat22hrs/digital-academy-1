import {Title45} from "../atoms/style.ts";
import styled from "@emotion/styled";
import {IPostItem} from "../types/interfaces.ts";
import {useGetSingleUserQuery} from "../api/api.ts";
import {UserOneArtical} from "../molecules/UserOneArtical.tsx";
import {ReactionOneArtical} from "../molecules/ReactionOneArtical.tsx";

export const HeaderOneArticles = ({title, reactions, tags, userId}: IPostItem) => {
    const {data} = useGetSingleUserQuery(userId)
    return (
        <Header>
            <Title45>{title}</Title45>
            <UserReactionWrapper>
                <UserOneArtical {...data}/>
                <ReactionOneArtical reactions={reactions} tags={tags}/>
            </UserReactionWrapper>
        </Header>
    )
}

const Header = styled.div`
  height: 132.85px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const UserReactionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


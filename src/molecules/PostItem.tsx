import styled from "@emotion/styled";
import {IPostItem} from "../types/interfaces.ts";
import {Link} from "react-router-dom";
import {getHashtags} from "../utils/utils.ts";
import {Reaction} from "./Reaction.tsx";
import {SubtitleTelegrey, Body} from "../utils/style.ts";
import { UserOneArtical } from "./UserOneArtical.tsx";
import { useGetSingleUserQuery } from "../api/api.ts";

export const PostItem = ({title, tags, reactions,body, id, userId}: IPostItem) => {
  const {data} = useGetSingleUserQuery(userId)
    return (
        <Link to={`/artical/${id}`} style={{textDecoration: 'none'}}>
        <Item>
            <TitleBlock>
                <Title>{title}</Title>
            </TitleBlock>
            <TagsRatingWrapper>
              <UserOneArtical {...data}/>
              <Reaction reactions={reactions}/>
            </TagsRatingWrapper>
            <TagsRatingWrapper>
                <SubtitleTelegrey>{getHashtags(tags)}</SubtitleTelegrey>
            </TagsRatingWrapper>
            <BodyBlock>
                <Body>
                    {body}
                </Body>
            </BodyBlock>
        </Item>
        </Link>
    )
}

const Item = styled.div`
  width: 349px;
  height: 270px;
  border-radius: 15.85px;
  box-shadow: 0px 3.9053337574005127px 46.86400604248047px 0px #C5C5C540;
  cursor: pointer;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const TitleBlock = styled.div`
  height: 60px;
  cursor: pointer;
`
const Title = styled.span`
  font-family: Poppins;
  font-size: 19px;
  font-weight: 600;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.signalBlack};
  cursor: pointer;
`
const TagsRatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const BodyBlock = styled.div`
  width: 305px;
  height: 83px;
  margin-top: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: break-spaces;
  cursor: pointer;
`
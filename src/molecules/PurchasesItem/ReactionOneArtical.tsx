import styled from "@emotion/styled";
import {Reaction} from "../Reaction.tsx";
import {SubtitleTelegrey} from "../../utils/style.ts";
import {getHashtags} from "../../utils/utils.ts";
import {IPostItem} from "../../types/interfaces.ts";

export const ReactionOneArtical = ({reactions, tags}: IPostItem) => {
    return (
        <ReactionWrapper>
            <Reaction reactions={reactions} />
            <SubtitleTelegrey>{getHashtags(tags)}</SubtitleTelegrey>
        </ReactionWrapper>
    )
}

const ReactionWrapper = styled.div`
  height: 49px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`
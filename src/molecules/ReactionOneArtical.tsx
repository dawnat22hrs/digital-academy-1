import styled from "@emotion/styled"
import { Reaction } from "./Reaction"
import { SubtitleTelegrey } from "../atoms/style"
import { getHashtags } from "../utils/utils"
import { IPostItem } from "../types/interfaces"

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
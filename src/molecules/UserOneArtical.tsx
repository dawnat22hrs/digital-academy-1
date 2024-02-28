import styled from "@emotion/styled";
import {Avatar} from "../atoms/Avatar.tsx";
import {SubtitleTelegrey, Body} from "../utils/style.ts";
export const UserOneArtical = ({image, firstName, lastName}:any) => {
    return (
        <UserWrapper>
            <Avatar img={image}/>
            <TextBlock>
                <SubtitleTelegrey>Written By</SubtitleTelegrey>
                <Body>{firstName} {lastName}</Body>
            </TextBlock>
        </UserWrapper>
    )
}

const UserWrapper = styled.div`
  width: 233px;
  display: flex;
  align-items: center;
`
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 14.24px;
  white-space: nowrap;
`
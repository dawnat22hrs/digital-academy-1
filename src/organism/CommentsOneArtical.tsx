import styled from "@emotion/styled";
import {useGetCommentByPostIdQuery} from "../api/api.ts";
import {CommentsItem} from "../molecules/CarouselItem/CarouselItem.tsx";
import {COMMENTS_VARIANT} from "../molecules/CarouselItem";

interface ICommentsOneArtical {
    postId: number
}
export const CommentsOneArtical = ({postId}: ICommentsOneArtical) => {
    const {data} = useGetCommentByPostIdQuery(postId)
    const comments = data ?  [...data.comments] : []
    return (
        <Wrapper>
            <Title>Comments</Title>
            <CommentsBlock>
                {
                    comments.map((item) => <CommentsItem key={item.id} {...item} variant={COMMENTS_VARIANT.LARGE}/>)
                }
            </CommentsBlock>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 100px auto
`
const Title = styled.span`
  font-family: Poppins;
  font-size: 30px;
  font-weight: 600;
  line-height: 45px;
  color: ${({ theme }) => theme.colors.signalBlack};
`
const CommentsBlock = styled.div`
  margin-top: 77px;
  display: grid;
  gap: 118px;
`
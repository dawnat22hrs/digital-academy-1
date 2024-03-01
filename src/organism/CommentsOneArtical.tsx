import styled from "@emotion/styled";
import {useGetCommentByPostIdQuery} from "../api/api.ts";
import {CommentsItem} from "../molecules/CarouselItem/CarouselItem.tsx";
import {COMMENTS_VARIANT} from "../molecules/CarouselItem";
import { useEffect } from "react";
import { useAction } from "../hooks/useAction.ts";
import { useSelector } from "react-redux";
import { ICarouselItem } from "../types/interfaces.ts";

interface ICommentsOneArtical {
    postId: number
}
export const CommentsOneArtical = ({postId}: ICommentsOneArtical) => {
    const {data} = useGetCommentByPostIdQuery(postId)
    const comments = data ?  [...data.comments] : []
    const {defineComments} = useAction()
    const {currentComments} = useSelector((state: any) => state.comments)

    useEffect(() => {
        (defineComments(comments))
    }, [data])

    return (
        <Wrapper>
            <Title>Comments</Title>
            <CommentsBlock>
                {
                    currentComments?.map((item: ICarouselItem, id: number) => <CommentsItem key={id} {...item} variant={COMMENTS_VARIANT.LARGE}/>)
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
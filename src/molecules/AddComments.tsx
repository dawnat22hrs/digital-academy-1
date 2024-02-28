import styled from "@emotion/styled"
import { SelectWord } from "../utils/style"
import { BUTTON_VARIANT, Button } from "../atoms/Button"
import { BUTTON_SIZE } from "../atoms/Button/types/enum"
import { useState } from "react"
import { getCurrentId } from "../utils/utils"
import { useCreateCommentMutation } from "../api/api"
import { useAction } from "../hooks/useAction"

export const AddComments = () => {
    const defaultComment = {
        body: '',
        postId: getCurrentId(),
        userId: 5,
    }
    const [comment, setComment] = useState(defaultComment)
    const [createComment] = useCreateCommentMutation()
    const {pushComment} = useAction()
    
    

    const sendComment = () => {
        const fixComment = {
            id: 341,
            body: comment.body,
            postId: comment.postId,
            user: {
                id: 5,
                username:"kmeus4"
            }
        }

        pushComment(fixComment)
        createComment(comment).then(() => {
            setComment(defaultComment)
        })
    }

    return (
        <CommentWrapper>
            <Title>Add <SelectWord>comment</SelectWord></Title>
            <Textarea
                placeholder="Enter  your comment "
                value={comment.body}
                onChange={e => setComment({...comment, body: e.target.value})}
            />
            <Button
                variant={BUTTON_VARIANT.PRIMARY}
                size={BUTTON_SIZE.LARGE}
                onClick={() => sendComment()}
            >
                Send
            </Button>
        </CommentWrapper>
    )
}

const CommentWrapper = styled.div`
    height: 579px;
    width: 1238px; 
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
`

const Title = styled.label`
    font-family: Poppins;
    font-size: 40px;
    font-weight: 600;
    line-height: 55px;
`
const Textarea = styled.textarea`
    width: 1238px;
    height: 345px;
    padding: 22.65px;
    border-radius: 18.12px;
    border: 2px solid ${({ theme }) => theme.colors.blue_violet_Crayola};
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    color: ${({ theme }) => theme.colors.light_gray};
    resize: none;
    cursor: text;
`
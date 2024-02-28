import {useGetSinglePostQuery} from "../api/api.ts";
import {Button, BUTTON_VARIANT} from "../atoms/Button";
import styled from "@emotion/styled";
import {HeaderOneArticles} from "../organism/HeaderOneArticles.tsx";
import {getCurrentId} from "../utils/utils.ts";
import {Link} from "react-router-dom";
import {ClipLoader} from "react-spinners";
import {CommentsOneArtical} from "../organism/CommentsOneArtical.tsx";
import {ArrowRight} from "../assets/ArrowRight.tsx";
import { AddComments } from "../molecules/AddComments.tsx";

export const OneArticalSection = () => {
    const {data} = useGetSinglePostQuery(getCurrentId())

    return (
        <Section data={data}>
            {
                data
                    ?
                        <>
                            <HeaderOneArticles {...data}/>
                            <BodyBlock>
                                <Body>{data.body}</Body>
                            </BodyBlock>
                            <ButtonBlock>
                                <Link to={'/blog'} style={{textDecoration: 'none'}}><Button variant={BUTTON_VARIANT.SECONDARY} startIcon={<ReverseArrow><ArrowRight/></ReverseArrow>}>All Articles</Button></Link>
                            </ButtonBlock>
                            <CommentsOneArtical postId={data.id}/>
                            <AddComments />
                        </>
                    :
                        <LoaderBlock>
                            <ClipLoader
                                color={'#000'}
                                size={'40px'}
                            />
                            <Button variant={BUTTON_VARIANT.SECONDARY} startIcon={<ReverseArrow><ArrowRight/></ReverseArrow>}>All Articles</Button>
                        </LoaderBlock>
            }
        </Section>
    )
}

const Section = styled.section<{data: any}>`
  width: 1250px;
  margin: 0 auto;
  padding: 126px 0 144px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.data ? null : 'center'};
`
const LoaderBlock = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const BodyBlock = styled.div`
    margin-top: 60.15px
`
const Body = styled.p`
  font-family: Poppins;
  font-size: 22px;
  font-weight: 400;
  line-height: 45px;
  color: ${({ theme }) => theme.colors.signalBlack};
`
const ButtonBlock = styled.div`
    margin-top: 90px;
`
const ReverseArrow = styled.div`
    transform: scale(-1, 1);
`

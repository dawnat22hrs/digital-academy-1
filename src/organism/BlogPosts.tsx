import styled from "@emotion/styled";
import {useGetPostsQuery} from "../api/api.ts";
import {PostItem} from "../molecules/PostItem.tsx";
import {PaginationArrow} from "../assets/PaginationArrow.tsx";
import {IPostItem} from "../types/interfaces.ts";
import {ClipLoader} from "react-spinners";
import {useSelector} from "react-redux";
import {useAction} from "../hooks/useAction.ts";
import {CONTROL_PAGE} from "../types/enums.ts";
import {useEffect} from "react";

export const BlogPosts = () => {
    const { currentPage, perPage, totalPage} = useSelector((state: any) => state.posts)
    const {data} = useGetPostsQuery({limitValue: perPage, skipValue: currentPage,})
    const {controlTable, installTotalPage} = useAction()

    useEffect(() => {
        installTotalPage(data?.total)
    }, [data])

    const checkDisable = () => {
        if (totalPage - (currentPage * perPage) < 0) return true
    }

    return (
        <Wrapper>
            {
                data
                    ?
                        <BlogsItems>
                            {
                                    data.posts.map((item: IPostItem) => <PostItem key={item.id} {...item}/>)
                            }
                        </BlogsItems>
                    :
                        <ClipLoader
                            color={'#000'}
                            size={'40px'}
                        />
            }

            <PaginationBlock>
                <Prev onClick={() => currentPage === 1 ? null : controlTable(CONTROL_PAGE.PREV)} disable={currentPage === 1}>
                    <PaginationArrow />
                </Prev>
                <Next onClick={() =>  checkDisable() ? null : controlTable (CONTROL_PAGE.NEXT)} disable={checkDisable()}>
                    <PaginationArrow />
                </Next>
            </PaginationBlock>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin-top: 97px;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const BlogsItems = styled.div`
  display: grid;
  grid-template-columns: 349px 349px 349px ;
  grid-template-rows: 233px 233px 233px;
  gap: 42px 53px;
`
const PaginationBlock = styled.div`
  width: 170.22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 85px;
`
const Next = styled.div<{disable: boolean | undefined}>`
  color: ${props => props.disable ? '#CECECE' : '#605E5E'};
`
const Prev = styled.div<{disable: boolean}>`
  color: ${props => props.disable ? '#CECECE' : '#605E5E'};
  transform: scale(-1, 1)
`
import styled from "@emotion/styled";
import {SelectWord, Title45} from "../utils/style.ts";
import {BlogPosts} from "../organism/BlogPosts.tsx";

export const BlogSection = () => {
    return (
        <Section>
            <Title45>Latest <SelectWord>Articles</SelectWord> </Title45>
            <BlogPosts />
        </Section>
    )
}

const Section = styled.section`
  width: 1210px;
  margin: 0 auto;
  padding: 96px 0 191px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
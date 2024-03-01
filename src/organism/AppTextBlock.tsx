import styled from "@emotion/styled";
import {SelectWord, Title50} from "../atoms/style.ts";
import { AppList } from "../molecules/AppList.tsx";
import { AppButtonBlock } from "../molecules/AppButtonBlock.tsx";

export const AppTextBlock = () => {
    return (
        <Block>
            <TitleBlock>
                <Title50>
                    Premium <SelectWord>Quality</SelectWord> For Your Health
                </Title50>
            </TitleBlock>
            <AppList />
            <AppButtonBlock />
        </Block>
    )
}

const Block = styled.div`
    width: 559.71px;
`
const TitleBlock = styled.div`
    width: 500px;
`
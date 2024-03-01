import styled from "@emotion/styled"
import {AppTextBlock} from "../organism/AppTextBlock.tsx"
import { Mobile } from "../atoms/style.ts"

export const DownloadAppSection = () => {
    return (
        <Section>
            <Mobile src={'src/assets/Mobile.png'} alt={'Phone App'}/>
            <AppTextBlock />
        </Section>
    )
}

const Section = styled.section`
  margin: 103.5px auto 0;
  padding: 0 0 120px 111px;
  display: flex;
  width: 1151px;
  justify-content: space-between;
  align-items: end;
`

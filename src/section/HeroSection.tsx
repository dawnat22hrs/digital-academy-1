import {HeroTitleBlock} from "../molecules/HeroTitleBlock.tsx"
import { HeroImg, HeroWrapper } from "../atoms/style.ts"

export const HeroSection  = () => {
    return (
        <HeroWrapper>
            <HeroTitleBlock />
            <HeroImg src={'src/assets/Hero.png'}/>
        </HeroWrapper>
    )
}

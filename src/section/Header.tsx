import {Logo, LOGO_SIZE} from "../atoms/Logo/Logo.tsx"
import styled from "@emotion/styled";
import {NAV_MENU_VARIANT, NavMenu} from "../molecules/NavMenu.tsx";

export const Header = () => {
    return (
        <HeaderWrapper>
            <Logo size={LOGO_SIZE.SMALL}/>
            <NavMenu variant={NAV_MENU_VARIANT.HEADER}/>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
  height:135px;
  display: flex;
  align-items: center;
  padding: 48px 0 24.6px;
  border-bottom: 1px solid #CBCBCB;
  margin: 0 auto;
  width: 1246px;
`
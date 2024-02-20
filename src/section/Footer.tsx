import styled from "@emotion/styled";
import {Logo, LOGO_SIZE} from "../atoms/Logo/Logo.tsx";
import {NAV_MENU_VARIANT, NavMenu} from "../molecules/NavMenu.tsx";

export const Footer = () => {
    const followLinks = [
        {
            src: '../src/assets/Inst.png',
            href: '#',
            alt: 'link to Instagram'
        },
        {
            src: '../src/assets/In.png',
            href: '#',
            alt: 'link to Linked in'
        },
        {
            src: '../src/assets/Facebook.png',
            href: '#',
            alt: 'link to Facebook'
        },
        {
            src: '../src/assets/X.png',
            href: '#',
            alt: 'link to X (Twitter)'
        },
    ]
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterContentTop>
                    <Logo size={LOGO_SIZE.LARGE}/>
                    <NavMenu variant={NAV_MENU_VARIANT.FOOTER}/>
                </FooterContentTop>
                <FooterContentBottom>
                    <Text>© 2023 EATLY All Rights Reserved.</Text>
                    <FollowLinks>
                        {
                            followLinks.map((link) => (
                                <Link href={link.href} key={link.src}>
                                    <ImgLink src={link.src} alt={link.alt}/>
                                </Link>
                            ))
                        }
                    </FollowLinks>
                </FooterContentBottom>
            </FooterContent>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
  background: #EAEAEA;
  height: 345px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const FooterContent = styled.div`
`
const FooterContentTop = styled.div`
  width: 1246px;
  height: 87px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #818181;
  padding-bottom: 29px;
`
const FooterContentBottom = styled.div`
  padding-top: 57px;
  width: 1246px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Text = styled.span`
  font-family: 'Inter';
  font-size: 17px;
  font-weight: 500;
  line-height: 25px;
  color: #999999;
`
const FollowLinks = styled.div`
    width: 234.46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Link = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`
const ImgLink = styled.img`
  cursor: pointer;
`
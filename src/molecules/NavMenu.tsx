import styled from "@emotion/styled";


export enum NAV_MENU_VARIANT {
    HEADER = 'HEADER',
    FOOTER = 'FOOTER',
}
export interface INavMenu {
    variant: NAV_MENU_VARIANT,
}
export const NavMenu = ({variant}: INavMenu) => {
    type NavItem = {
        title: string;
        href: string;
    }

    const headerItem: NavItem[] = [
        {
            title: 'Recipes',
            href: '#'
        },
        {
            title: 'Blog',
            href: '#'
        },
    ]

    const footerItem: NavItem[] = [
        {
            title: 'About us',
            href: '#'
        },
        {
            title: 'Contact',
            href: '#'
        },
    ]

    const navItems: NavItem[] = variant === NAV_MENU_VARIANT.HEADER ? headerItem : footerItem

    return (
        <UnorderedList variant={variant}>
            {
                navItems.map((item) => (
                    <ListItem key={item.title}>
                        <Link href={item.href}>{ item.title }</Link>
                    </ListItem>
                ))
            }
        </UnorderedList>
    )
}
const UnorderedList = styled.ul<{variant: NAV_MENU_VARIANT}>`
  font-family: 'Inter';
  font-weight: 500;
  font-size: 17.83px;
  line-height: 26.74px;
  color: ${props => props.variant === NAV_MENU_VARIANT.HEADER ? ({ theme }) => theme.colors.dullGray : ({ theme }) => theme.colors.pearlescentLightGray};
  display: flex;
  margin-left: 49.63px;
`
const ListItem = styled.li`
  list-style-type: none;
  margin-left: 53.49px;
  cursor: pointer;
`
const Link = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`
import styled from "@emotion/styled"

export enum LOGO_SIZE {
    SMALL = 'SMALL',
    LARGE = 'LARGE'
}

export interface ILogo {
    size: LOGO_SIZE,
}
export const Logo = ({size}: ILogo) => {
    return (
        <LogoWrapper size={size}>
            <Img size={size} src={'../src/assets/Logo.png'} alt="Логотип"/>
            <LogoText size={size}>eatly</LogoText>
        </LogoWrapper>
    )
}

const LogoWrapper = styled.div<{size: LOGO_SIZE}>`
  width: ${props => props.size === LOGO_SIZE.SMALL ? '111.94' : '150.7'}px;
  height:  ${props => props.size === LOGO_SIZE.SMALL ? '42.31' : '57'}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Img = styled.img<{size: LOGO_SIZE}>`
  width: ${props => props.size === LOGO_SIZE.SMALL ? '45.94' : '61.88'}px;
  height: ${props => props.size === LOGO_SIZE.SMALL ? '42.31' : '57px'}px;
`
const LogoText = styled.span<{size: LOGO_SIZE}>`
  font-family: 'Poppins';
  color: ${({ theme }) => theme.colors.blue_violet_Crayola};
  font-weight: 600;
  font-size: ${props => props.size === LOGO_SIZE.SMALL ? '21.18' : '28.52'}px;
  line-height: ${props => props.size === LOGO_SIZE.SMALL ? '27.53' : '37.08'}px;
`
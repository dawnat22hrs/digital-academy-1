import styled from "@emotion/styled";

interface IAvatar {
    img: string,
}
export const Avatar = ({img}: IAvatar) => {
    return <Img src={img} alt={'Avatar'}/>
}

const Img = styled.img`
  width: 55.76px;
  height: 55.85px;
  border-radius: 50%;
`
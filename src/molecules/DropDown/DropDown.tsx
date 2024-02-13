import styled from "@emotion/styled";

export const DropDown = () => {
    return (
        <BaseDropDown>
            This month
            <Chevron src={'src/assets/ChevronDown.png'}/>
        </BaseDropDown>
    )
}

const BaseDropDown = styled.div`
  width: 175.91px;
  height: 53.4px;
  padding: 12.56px 18.85px 12.56px 18.85px;
  border-radius: 12.56px;
  gap: 6.28px;
  background: ${({ theme }) => theme.colors.white_10};
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Manrope;
  font-size: 19px;
  font-weight: 600;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.sapphireBlue};
  cursor: pointer;
`
const Chevron = styled.img`
`
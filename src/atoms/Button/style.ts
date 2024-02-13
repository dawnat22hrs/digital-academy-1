import styled from "@emotion/styled";
import {BUTTON_VARIANT} from "./types/enum.ts";

const BaseButton = styled.button`
  height: 59px;
  border-radius: 12.41px;
  padding: 0 30px;
  width: fit-content;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const PrimaryButton = styled(BaseButton)`
  color: ${({ theme }) => theme.colors.white100};
  background: ${({ theme }) => theme.colors.blue_violet_Crayola};
`
const SecondaryButton = styled(BaseButton)`
  color: ${({ theme }) => theme.colors.blue_violet_Crayola};
  background: ${({ theme }) => theme.colors.white100};
  outline: 1.5px solid ${({ theme }) => theme.colors.blue_violet_Crayola};
`
export const ButtonVariant = {
    [BUTTON_VARIANT.PRIMARY]: PrimaryButton,
    [BUTTON_VARIANT.SECONDARY]: SecondaryButton,
}
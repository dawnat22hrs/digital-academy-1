import styled from "@emotion/styled";
import {CATEGORY_VARIANT} from "./types/enum.ts";
import { COLORS } from "../../theme/colors.ts";

interface ICategoryChip {
    variant: CATEGORY_VARIANT
}
export const CategoryChip = ({variant}: ICategoryChip) => {
    return (
        <Chip>
            {variant.toUpperCase()}
        </Chip>
    )
}

const Chip = styled.div`
  width: 44px;
  height: 25px;
  border-radius: 5.4px;
  background: ${COLORS.greenishWhite};
  color: ${COLORS.goldenBirch};
  font-family: Poppins;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`

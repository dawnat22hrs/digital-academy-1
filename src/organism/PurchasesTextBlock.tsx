import {SelectWord, Title50} from "../utils/style.ts";
import styled from "@emotion/styled";
import {PurchasesCard} from "../molecules/PurchasesCerd/PurchasesCard.tsx";
import {PURCHASES_STATUS} from "../molecules/PurchasesCerd/types/enum.ts";

const model = [
    {
        title: 'Chicken Hell',
        status:PURCHASES_STATUS.ON_THE_WAY,
        date: '3:09 PM',
        img: 'src/assets/Food image 1.png',
        isActive: true,
    },
    {
        title: 'Swe Dish',
        status: PURCHASES_STATUS.DELIVERED,
        date: 'Yesterday',
        img: 'src/assets/Food image 2.png',
        isActive: false,
    },
    {
        title: 'Fish Hell Veg',
        status: PURCHASES_STATUS.CANCELLED,
        date: 'Yesterday',
        img: 'src/assets/Food image 3.png',
        isActive: false,
    },
]
export const PurchasesTextBlock = () => {
    return (
        <Wrapper>
            <Title50>Control <SelectWord>Purchases</SelectWord> <br />Via Dashboard</Title50>
            <PurchasesList>
                {
                    model.map((item, id) => (
                        <PurchasesCard key={id} active={item.isActive} title={item.title} status={item.status} date={item.date} img={item.img}/>
                    ))
                }
            </PurchasesList>
        </Wrapper>
    )
}
const Wrapper = styled.div`
`

const PurchasesList = styled.div`
    margin-top: 48px;
`
import styled from "@emotion/styled";
import {CarouselItem} from "../molecules/CarouselItem/CarouselItem.tsx";

const  model = [
    {
        avatar: 'src/assets/134 (image).png',
        name: 'Alexander R.',
        text: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”',
        grade: [ 1, 2, 3, 4, 5, ],
        timeWithUs: '01',
        isActive: true,
    },
    {
        avatar: 'none',
        name: 'none',
        text: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”',
        grade: [ 1, 2, 3, 4, 5, ],
        timeWithUs: 'none',
        isActive: false,
    },
    {
        avatar: 'none',
        name: 'none',
        text: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”',
        grade: [ 1, 2, 3, 4, 5, ],
        timeWithUs: 'none',
        isActive: false,
    },
]

export const CustomerCarousel = () => {
    return (
        <Carousel>
            {
                model.map((item, id) => <CarouselItem {...item} key={id}/>)
            }
            <Sidebar>
                <Scroller />
            </Sidebar>
        </Carousel>
    )
}

const Carousel = styled.div`
  margin-top: 80px;
  display: flex;
  gap: 46px;
  position: relative;
`
const Sidebar = styled.div`
  width: 667px;
  height: 9.42px;
  border-radius: 20px;
  background: #6C5FBC22;
  margin-top: 20.42px;
  position: absolute;
  bottom: 0;
  left: 574px;
`
const Scroller = styled.div`
  width: 191px;
  height: 9.42px;
  border-radius: 20px;
  background: #6C5FBC;
`
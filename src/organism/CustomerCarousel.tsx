import styled from "@emotion/styled";
import {CommentsItem} from "../molecules/CarouselItem/CarouselItem.tsx";
import {useGetCommentsQuery} from "../api/api.ts";
import {ICarouselItem} from "../types/interfaces.ts";
import {ClipLoader} from "react-spinners";
import { useCallback, useEffect, useRef, useState } from "react";

const slidesContainerStyles = {
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.3s",
};

export const CustomerCarousel = () => {
    const {data} = useGetCommentsQuery(null)
    const sortedData = data?.comments.slice(0, 6)
    const timerRef = useRef<number>(0)
    const [currentIndex, setCurrentIndex] = useState(0)

    console.log(data)

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === sortedData?.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }, [currentIndex, sortedData])

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }

    const getSlidesContainerStylesWithWidth = () => ({
        ...slidesContainerStyles,
        width: 1800,
        transform: `translateX(${-(currentIndex * 300)}px)`,
    })

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => {
            goToNext()
        }, 2000) as any

        return () => clearTimeout(timerRef.current)
    }, [goToNext])

        return (
            <Slider data={data}>
                {
                    data
                        ?
                            <>
                                <Container>
                                    <Item style={getSlidesContainerStylesWithWidth()}>
                                        {sortedData?.map((item: ICarouselItem) =>( <CommentsItem {...item} key={item.id}/>))}
                                    </Item>
                                </Container>
                                <DotContainer>
                                    {sortedData?.map((slide: ICarouselItem, slideIndex: number) => (
                                        <Dot
                                            key={slide.id}
                                            onClick={() => goToSlide(slideIndex)}
                                        >
                                            ●
                                        </Dot>
                                    ))}
                                </DotContainer>
                            </>
                        :
                        <ClipLoader
                            color={'#000'}
                            size={'40px'}
                        />
                }
            </Slider>
        )
    }

const Slider = styled.div<{data: ICarouselItem}>`
  position: relative;
  height: 400px;
  width: ${props => props.data ? null : '1250px'};
  margin-top: 80px;
  display: ${props => props.data ? null : 'flex'};
  justify-content: ${props => props.data ? null : 'center'};
`
const Container = styled.div`
  height: 100%;
`
const Item = styled.div`
`
const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 100px;
  right: 280px;
`
const Dot = styled.div`
  margin: 0 3px;
  cursor: pointer;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.blue_violet_Crayola};
`
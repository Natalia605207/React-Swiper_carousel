import { dataCarousel } from "./dataCarousel";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Carousel = () => {
    return(
        <Swiper spaceBetween={10} slidesPerView={3} loop>
        {dataCarousel.map((slide) => (
            <SwiperSlide key={slide.id}>
                <img src={slide.image} alt='car' />
            </SwiperSlide>
        ))}
        </Swiper>
    )
}
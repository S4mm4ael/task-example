import React, { useState } from 'react';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';

import cover1 from '../../assets/img/book-cover-none.jpg';
import cover2 from '../../assets/img/covers/cover-1.jpg';
import cover3 from '../../assets/img/covers/cover-2.jpg';
import cover4 from '../../assets/img/covers/cover-4.jpg';
import cover5 from '../../assets/img/covers/cover-5.jpg';
import { SliderProps } from '../../shared/types.interface';

import styles from './slider-book.module.css';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

export function SliderBook({ isDesktopSize, imageCount }: SliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [coversArray, setCoversArray] = useState([cover1, cover2, cover3, cover4, cover5]);

  function renderCoversSlider(className: string, height: number, thumb: boolean) {
    if (imageCount === 0) {
      return (
        <SwiperSlide data-test-id={thumb && 'slide-mini'} className={className}>
          <img src={cover1} alt='cover' height={`${height}px`} />
        </SwiperSlide>
      );
    }
    const array = coversArray.slice(1, imageCount + 1);

    return array.map((el) => (
      <SwiperSlide key={Math.random()} data-test-id={thumb && 'slide-mini'} className={className}>
        <img src={el} alt='cover' height={`${height}px`} />
      </SwiperSlide>
    ));
  }

  return (
    <React.Fragment>
      {' '}
      {isDesktopSize ? (
        <React.Fragment>
          <Swiper
            data-test-id='slide-big'
            height={300}
            spaceBetween={0}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.SliderBook__slider}
          >
            {renderCoversSlider(styles.SliderBook__sliderItem, 593, false)}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            height={5}
            spaceBetween={20}
            slidesPerView={4}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.SliderBook__thumbSlider}
          >
            {renderCoversSlider(styles.SliderBook__thumbItem, 86, true)}
          </Swiper>
        </React.Fragment>
      ) : (
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className={styles.SliderBook__slider_mobile}
          data-test-id='slide-big'
        >
          {renderCoversSlider(styles.SliderBook__sliderItem, 198, false)}
        </Swiper>
      )}
    </React.Fragment>
  );
}

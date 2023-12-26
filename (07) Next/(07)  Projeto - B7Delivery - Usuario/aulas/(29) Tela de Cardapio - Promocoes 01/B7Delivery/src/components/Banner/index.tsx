import styles from './Banner.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Banner = () => {
   return(
      <div className={ styles.container }>
         <Swiper
            slidesPerView={ 1 } >
            <SwiperSlide>..</SwiperSlide>
            <SwiperSlide>..</SwiperSlide>
         </Swiper>
      </div>
   )
}

export default Banner
import styles from './Banner.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const Banner = () => {
   return(
      <div className={ styles.container }>
         <Swiper
            slidesPerView={ 1 } 
            className={ styles.swiper }>
            <SwiperSlide className={ styles.slide }>
               <div className={ styles.slideImg }>
                  {/* <img src='/tmp/banner01.png' alt="Banner 01" /> */}
                  Img01
               </div>
            </SwiperSlide>

            <SwiperSlide className={ styles.slide }>
               <div className={ styles.slideImg }>
                  {/* <img src='/tmp/banner02.png' alt="Banner 02" /> */}
                  Img02
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   )
}

export default Banner
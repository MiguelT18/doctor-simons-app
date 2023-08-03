import { TestimonioCard } from './TestimonioCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import Swiper custom styles
import './Styles/swiper_slides.css';

export function Testimonios() {
	return (
		<section className='px-5 pb-6'>
			<h1 className='text-center text-lg text-blue-light dark:text-white font-my-montserrat uppercase font-bold py-5'>
				Esto es lo que opinan los demás
			</h1>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}>
				<SwiperSlide>
					<TestimonioCard />
				</SwiperSlide>
				<SwiperSlide>
					<TestimonioCard />
				</SwiperSlide>
				<SwiperSlide>
					<TestimonioCard />
				</SwiperSlide>
				<SwiperSlide>
					<TestimonioCard />
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

import { TestimonioCard } from './TestimonioCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

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
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
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

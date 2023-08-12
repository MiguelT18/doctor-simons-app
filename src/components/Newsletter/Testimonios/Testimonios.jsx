// Components
import { TestimonioCard } from './TestimonioCard';

// Hooks
import useTestimoniosData from '../../../hooks/useTestimoniosData';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//? Import Swiper custom styles
import '../../../components/styles/swiper_slides.css';

export function Testimonios() {
	const { users, error } = useTestimoniosData('newsletter');

	if (error) {
		return (
			<h1 className='text-md text-red-600 font-bold text-center'>
				Error: {error.message}
			</h1>
		);
	}

	return (
		<section className='bg-gradient-linear-light dark:bg-gradient-linear-dark text-white px-5 pb-5'>
			<h1 className='text-lg text-center uppercase font-bold font-my-montserrat py-6 md:py-8'>
				Opiniones de mis suscriptores
			</h1>

			<Swiper
				modules={[Navigation, Pagination, A11y]}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: false }}
				autoHeight={true}
				spaceBetween={50}
				slidesPerView={1}>
				{users &&
					users.length > 0 &&
					users.map((user) =>
						user.login && user.login.uuid ? (
							<SwiperSlide key={user.login.uuid}>
								<TestimonioCard user={user} />
							</SwiperSlide>
						) : null
					)}
			</Swiper>
		</section>
	);
}

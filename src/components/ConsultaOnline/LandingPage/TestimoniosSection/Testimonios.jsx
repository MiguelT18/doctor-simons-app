// Font Awesome
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

// Components
import { NextNavButton } from '../../../NextNavButton';
import { TestimonioCard } from './TestimonioCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//? Import Swiper custom styles
import '../../../../components/styles/swiper_slides.css';

// Hooks
import useTestimoniosData from '../../../../hooks/useTestimoniosData';

export function Testimonios() {
	const { users, error } = useTestimoniosData('consulta');

	if (error) {
		return (
			<h1 className='text-md text-red-600 font-bold text-center'>
				Error: {error.message}
			</h1>
		);
	}

	return (
		<section className='px-5 relative'>
			<h1 className='text-center text-lg text-blue-light dark:text-white font-my-montserrat uppercase font-bold lg:pt-14 pt-8 lg:pb-10 pb-5'>
				Esto es lo que opinan los demás
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

			<div className='flex justify-center lg:pt-8 pt-4 lg:pb-12 pb-8'>
				<NextNavButton
					icon={faCalendarCheck}
					next='/consulta_online/consideraciones'
					text='Reserva tu consulta aquí'
				/>
			</div>
		</section>
	);
}

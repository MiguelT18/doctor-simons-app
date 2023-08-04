import { useState, useEffect } from 'react';

import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { NextNavButton } from '../../NextNavButton';
import testimoniosData from './testimonios.json';

import { TestimonioCard } from './TestimonioCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper custom styles
import './Styles/swiper_slides.css';

export function Testimonios() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://randomuser.me/api/?results=6'
				);
				const data = await response.json();
				const usersWithTestimonios = data.results.map((user, index) => {
					return {
						...user,
						testimonio:
							testimoniosData.testimonios[index].comentario,
					};
				});
				setUsers(usersWithTestimonios);
			} catch (error) {
				setError(error);
			}
		};

		fetchData();
	}, []);

	if (error) {
		return (
			<h1 className='text-md text-red-600 font-bold'>
				Error: {error.message}
			</h1>
		);
	}

	return (
		<section className='px-5'>
			<h1 className='text-center text-lg text-blue-light dark:text-white font-my-montserrat uppercase font-bold pt-8 pb-5'>
				Esto es lo que opinan los demás
			</h1>
			<Swiper
				className='w-full max-w-[520px]'
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				navigation
				autoHeight={true}
				spaceBetween={50}
				slidesPerView={1}>
				{users.map((user, index) => (
					<SwiperSlide key={index}>
						<TestimonioCard user={user} />
					</SwiperSlide>
				))}
			</Swiper>
			<div className='flex justify-center lg:justify-start pt-4 pb-8'>
				<NextNavButton
					icon={faCalendarCheck}
					next='/consulta_online/consideraciones'
					text='Reserva tu consulta aquí'
				/>
			</div>
		</section>
	);
}

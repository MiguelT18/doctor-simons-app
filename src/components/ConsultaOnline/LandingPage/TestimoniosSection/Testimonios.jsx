import { useState, useEffect } from 'react';

import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { NextNavButton } from '../../../NextNavButton';
import testimoniosData from './testimonios.json';

import { TestimonioCard } from './TestimonioCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//? Import Swiper custom styles
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
				{users.map((user) => (
					<SwiperSlide key={user.login.uuid}>
						<TestimonioCard user={user} />
					</SwiperSlide>
				))}
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

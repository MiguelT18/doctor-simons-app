import { useState, useEffect } from 'react';

import { TestimonioCard } from './TestimonioCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

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
				setUsers(data.results);
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
		<section className='px-5 pb-6'>
			<h1 className='text-center text-lg text-blue-light dark:text-white font-my-montserrat uppercase font-bold py-5'>
				Esto es lo que opinan los demás
			</h1>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}>
				{users.map((user, index) => (
					<SwiperSlide key={index}>
						<TestimonioCard user={user} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

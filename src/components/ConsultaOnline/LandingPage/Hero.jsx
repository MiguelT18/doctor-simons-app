import { useState, useEffect } from 'react';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

import { NextNavButton } from '../../NextNavButton';

export function Hero() {
	const [paddingTop, setPaddingTop] = useState(0);

	useEffect(() => {
		const adjustPaddingTop = () => {
			const headerHeight =
				document.getElementById('hero-header').offsetHeight;
			setPaddingTop(headerHeight + 30);
		};

		adjustPaddingTop(); // Ajusta el padding-top inicialmente

		window.addEventListener('resize', adjustPaddingTop); // Ajusta el padding-top cada vez que se redimensiona la página

		return () => {
			// Limpia el event listener cuando el componente se desmonta
			window.removeEventListener('resize', adjustPaddingTop);
		};
	}, []);

	return (
		<section
			id='hero-section'
			className='text-white h-screen grid lg:grid-cols-2 lg:gap-10 items-center bg-hero-mob-pattern bg-center bg-no-repeat bg-cover bg-fixed lg:bg-hero-desk-pattern px-5'
			style={{ paddingTop: `${paddingTop}px` }}>
			<div className='w-full max-w-[750px] mx-auto'>
				<h1 className='text-lg text-center lg:text-left uppercase font-bold font-my-montserrat'>
					Revela tu belleza con la rinoplastia personalizada del Dr.
					Simons
				</h1>
				<p className='text-sm text-center pt-4 lg:text-left'>
					Embárcate en un viaje transformador con el Dr. Simons y
					nuestro equipo dedicado. Descubre un plan personalizado para
					tu rinoplastia, aprende los detalles del proceso y recibe un
					presupuesto transparente. ¡Estamos aquí para hacer realidad
					la nariz de tus sueños!
				</p>
				<div className='flex justify-start max-lg:hidden py-5'>
					<NextNavButton
						next='/consulta_online/consideraciones'
						text='Reserva tu consulta aquí'
						icon={faCalendarCheck}
					/>
				</div>
			</div>

			<div className='w-full h-fit'>
				<iframe
					className='w-full max-w-[720px] mx-auto h-fit aspect-video'
					src='https://www.youtube.com/embed/F1cjxLL1KeQ'
					title='Consulta en línea con el Dr. Cristian Simons: todo lo que necesitas saber'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowfullscreen></iframe>
				<div className='flex justify-center lg:hidden py-6'>
					<NextNavButton
						next='/consulta_online/consideraciones'
						text='Reserva tu consulta aquí'
						icon={faCalendarCheck}
					/>
				</div>
			</div>
		</section>
	);
}

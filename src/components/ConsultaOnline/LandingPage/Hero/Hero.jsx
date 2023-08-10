import { useState, useEffect, useRef } from 'react';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

import { NextNavButton } from '../../../NextNavButton';

export function Hero() {
	const [paddingTop, setPaddingTop] = useState(0);
	const headerRef = useRef(null);

	const adjustPaddingTop = () => {
		if (headerRef.current) {
			const headerHeight = headerRef.current.offsetHeight;
			setPaddingTop(headerHeight + 30);
		}
	};

	useEffect(() => {
		adjustPaddingTop(); // Ajusta el padding-top

		const debouncedResize = debounce(adjustPaddingTop, 150);
		window.addEventListener('resize', debouncedResize); // Ajusta el padding-top cada vez que se redimensiona la página

		return () => {
			// Limpia el event listener cuando el componente se desmonta
			window.removeEventListener('resize', debouncedResize);
		};
	}, []);

	function debounce(func, wait) {
		let timeout;
		return function executedFunction(...args) {
			const later = () => {
				clearTimeout(timeout);
				func(...args);
			};
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	}

	return (
		<section
			id='hero-section'
			className='text-white grid h-full lg:h-screen lg:grid-cols-2 lg:gap-10 items-center bg-hero-mob-pattern bg-center bg-no-repeat bg-cover bg-fixed lg:bg-hero-desk-pattern px-5 pb-24'
			style={{ paddingTop: `${paddingTop}px` }}>
			<div className='w-full max-w-[500px] mx-auto'>
				<h1
					ref={headerRef}
					className='text-lg text-center lg:text-left uppercase font-bold font-my-montserrat'>
					Revela tu belleza con la rinoplastia personalizada del Dr.
					Simons
				</h1>
				<p className='text-sm text-center pt-4 pb-5 lg:pb-10 lg:text-left'>
					Embárcate en un viaje transformador con el Dr. Simons y
					nuestro equipo dedicado. Descubre un plan personalizado para
					tu rinoplastia, aprende los detalles del proceso y recibe un
					presupuesto transparente. ¡Estamos aquí para hacer realidad
					la nariz de tus sueños!
				</p>
				<div className='flex justify-center lg:justify-normal pb-8'>
					<NextNavButton
						next='/consulta_online/consideraciones'
						text='Reserva tu consulta aquí'
						icon={faCalendarCheck}
					/>
				</div>
			</div>

			<div className='w-full h-fit'>
				<iframe
					loading='lazy'
					className='w-full max-w-[720px] mx-auto h-fit aspect-video'
					src='https://www.youtube.com/embed/F1cjxLL1KeQ'
					title='Consulta en línea con el Dr. Cristian Simons: todo lo que necesitas saber'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen></iframe>
			</div>
		</section>
	);
}

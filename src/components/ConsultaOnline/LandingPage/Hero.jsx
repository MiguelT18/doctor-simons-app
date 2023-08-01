import { useState, useEffect } from 'react';

import { NextNavButton } from '../../NextNavButton';

export function Hero() {
	const [paddingTop, setPaddingTop] = useState(0);

	useEffect(() => {
		const adjustPaddingTop = () => {
			const headerHeight =
				document.getElementById('hero-header').offsetHeight;
			setPaddingTop(headerHeight + 20);
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
			className='text-white h-screen bg-hero-mob-pattern bg-center bg-no-repeat bg-cover bg-fixed md:bg-hero-desk-pattern px-5'
			style={{ paddingTop: `${paddingTop}px` }}>
			<h1 className='text-lg text-center uppercase font-bold font-my-montserrat pb-5'>
				Revela tu belleza con la rinoplastia personalizada del Dr.
				Simons
			</h1>
			<div>
				<iframe
					className='w-full max-w-[720px] mx-auto h-fit aspect-video'
					src='https://www.youtube.com/embed/F1cjxLL1KeQ'
					title='Consulta en línea con el Dr. Cristian Simons: todo lo que necesitas saber'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowfullscreen></iframe>
			</div>
			<p className='text-sm text-center pt-5'>
				Embárcate en un viaje transformador con el Dr. Simons y nuestro
				equipo dedicado. Descubre un plan personalizado para tu
				rinoplastia, aprende los detalles del proceso y recibe un
				presupuesto transparente. ¡Estamos aquí para hacer realidad la
				nariz de tus sueños!
			</p>
			<div className='flex justify-center py-5'>
				<NextNavButton next='/consulta_online/consideraciones' />
			</div>
		</section>
	);
}

export function UneteArticle() {
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<article className='w-full max-w-[500px] h-fit flex flex-col items-center lg:items-start'>
			<h1 className='text-blue-light dark:text-white pb-2 text-center lg:text-start text-md font-my-montserrat font-bold uppercase'>
				Conoce nuestra newsletter por dentro
			</h1>
			<p className='text-center lg:text-start text-sm pb-4'>
				Suscríbete y recibe cada semana en tu correo electrónico valiosa
				información, consejos útiles y experiencias inspiradoras sobre
				rinoplastia ultrasónica. Nuestro objetivo es apoyarte en tu
				camino hacia una salud nasal óptima. Este servicio es totalmente
				gratuito y está diseñado para cumplir con tus expectativas y
				asistirte en cada paso de tu viaje.
			</p>
			<button
				onClick={handleScrollToTop}
				className='bg-main-red text-white w-fit h-fit text-center text-buttonSize italic font-bold py-2 px-5 rounded-md hover:scale-110 transition-transform duration-100 linear'>
				¡Quiero suscribirme ya!
			</button>
		</article>
	);
}

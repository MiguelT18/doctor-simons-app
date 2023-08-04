import CopyImg1 from '../../../assets/images/consulta-landing-copy1.webp';
import CopyImg2 from '../../../assets/images/consulta-landing-copy2.webp';

export function MainCopy() {
	const Copy1 = [
		'¿Tienes más de 16 años y la forma de tu nariz te causa inseguridad o vergüenza?',
		'¿Las desviaciones, obstrucciones o asimetrías nasales dificultan tu respiración?',
		'¿Anhelas una nariz estética y armoniosa que realce tu belleza natural?',
		'¿Estás listo para un cambio transformador y duradero en tu vida?',
		'¿Quieres mejorar tu perfil con una rinoplastia personalizada?',
		'¿Buscas un cambio que te haga sentir más confiado y atractivo?',
		'¿Estás listo para dar el primer paso hacia la nariz de tus sueños?',
	];

	const Copy2 = [
		'Obtén el resultado deseado sin preocupaciones. El Dr. Simons te guiará para lograr los cambios que buscas.',
		'Recupérate rápidamente y sin moretones. Nuestras técnicas avanzadas y atención postoperatoria te brindan tranquilidad.',
		'Experimenta una cirugía sin dolor. Nuestro equipo de anestesia y experiencia en rinoplastias te garantizan confort absoluto.',
		'Consigue los resultados deseados desde el principio. Evita la necesidad de operaciones adicionales para corregir errores. Confía en nuestra experiencia y enfoque preciso.',
	];

	const emoji = '🔴';

	return (
		<section className='w-full max-w-[1500px] mx-auto grid gap-5 lg:gap-0 bg-white dark:bg-slate-900 text-dark dark:text-white'>
			<div className='lg:grid lg:grid-cols-2'>
				<div className='max-w-[600px] lg:pt-10 pt-6 px-5 mx-auto'>
					<h1 className='text-lg text-center lg:text-start font-my-montserrat font-bold uppercase pb-6'>
						Esta consulta es para ti si...
					</h1>
					<ul className='text-sm text-center lg:text-start flex flex-col gap-5'>
						{Copy1.map((_, index) => (
							<li key={index}>
								{emoji} {_}
							</li>
						))}
					</ul>
				</div>
				<img
					src={CopyImg1}
					alt='Cristian Simons team'
					loading='lazy'
					className='object-cover object-center w-full h-full hidden lg:block'
				/>
			</div>

			<span className='block lg:hidden relative h-[2px] w-[80%] max-w-[390px] mx-auto my-5 bg-black dark:bg-white after:block after:w-[7px] after:h-[7px] after:bg-black after:dark:bg-white after:rotate-45 after:absolute after:-top-[3px] before:block before:w-[7px] before:h-[7px] before:bg-black before:dark:bg-white before:rotate-45 before:absolute before:-top-[3px] before:right-0'></span>

			<div className='lg:grid lg:grid-cols-2 lg:grid-flow-col-reverse'>
				<div className='max-w-[600px] order-2 lg:order-1 lg:py-10 pb-6 px-5 mx-auto'>
					<h1 className='text-lg text-center lg:text-start font-my-montserrat font-bold uppercase pb-6'>
						El cambio en tu apariencia que estabas buscando
					</h1>
					<ul className='text-sm text-center lg:text-start flex flex-col gap-5'>
						{Copy2.map((_, index) => (
							<li key={index}>
								{emoji} {_}
							</li>
						))}
					</ul>
				</div>
				<img
					src={CopyImg2}
					alt='Subscribe to our online consultation'
					loading='lazy'
					className='object-cover object-center w-full h-full hidden lg:block'
				/>
			</div>
		</section>
	);
}

import CopyImage1 from '../../../../assets/images/consulta-landing-copy1.webp';
import CopyImage2 from '../../../../assets/images/consulta-landing-copy2.webp';
import { MainInfoContent } from './MainInfoContent';
import { NextNavButton } from '../../../NextNavButton';

export function Main() {
	const Copy1 = [
		'🔴 Tienes más de 16 años y te sientes inseguro o avergonzado por la forma de tu nariz.',
		'🔴 Tienes dificultad para respirar debido a desvíos, obstrucciones o asimetrías nasales.',
		'🔴 Tienes dificultad para respirar debido a desvíos, obstrucciones o asimetrías nasales.',
		'🔴 Te gustaría tener un cambio en tu vida por siempre.',
	];

	const Copy2 = [
		'🎉 Obtén el resultado deseado sin preocupaciones. El Dr. Simons te guiará para lograr los cambios que buscas.',
		'🎉 Recupérate rápidamente y sin moretones. Nuestras técnicas avanzadas y atención postoperatoria te brindan tranquilidad.',
		'🎉 Experimenta una cirugía sin dolor. Nuestro equipo de anestesia y experiencia en rinoplastias te garantizan confort absoluto.',
		'🎉 Consigue los resultados deseados desde el principio. Evita la necesidad de operaciones adicionales para corregir errores. Confía en nuestra experiencia y enfoque preciso.',
	];

	return (
		<section className='bg-gradient-linear-light dark:bg-gradient-linear-dark overflow-x-hidden'>
			<div className='grid lg:grid-cols-2'>
				<MainInfoContent
					list={Copy2}
					title='El cambio en tu apariencia que estabas buscando'
				/>
				<img
					src={CopyImage1}
					alt='Doctor Cristian Simons team'
					className='w-full h-full max-lg:hidden'
				/>
			</div>

			<span className='hidden max-lg:block relative h-[2px] w-[80%] max-w-[500px] mx-auto my-5 bg-white after:block after:w-[7px] after:h-[7px] after:bg-white after:rotate-45 after:absolute after:-top-[3px] before:block before:w-[7px] before:h-[7px] before:bg-white before:rotate-45 before:absolute before:-top-[3px] before:right-0'></span>

			<div className='grid lg:grid-cols-2'>
				<img
					src={CopyImage2}
					alt='Doctor Cristian Simons team'
					className='w-full h-full max-lg:hidden'
				/>
				<div>
					<MainInfoContent
						list={Copy1}
						title='Esta consulta es para ti si...'
					/>
					<div className='flex justify-center pb-6'>
						<NextNavButton next='/consulta_online/consideraciones' />
					</div>
				</div>
			</div>
		</section>
	);
}

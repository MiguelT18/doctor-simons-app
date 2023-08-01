export function MainCopy() {
	const Copy1 = [
		'Tienes más de 16 años y te sientes inseguro o avergonzado por la forma de tu nariz.',
		'Tienes dificultad para respirar debido a desvíos, obstrucciones o asimetrías nasales.',
		'Te gustaría disfrutar de una nariz bonita y estética que haga juego con tus rasgos faciales.',
		'Te gustaría tener un cambio en tu vida por siempre.',
	];

	const Copy2 = [
		'Obtén el resultado deseado sin preocupaciones. El Dr. Simons te guiará para lograr los cambios que buscas.',
		'Recupérate rápidamente y sin moretones. Nuestras técnicas avanzadas y atención postoperatoria te brindan tranquilidad.',
		'Experimenta una cirugía sin dolor. Nuestro equipo de anestesia y experiencia en rinoplastias te garantizan confort absoluto.',
		'Consigue los resultados deseados desde el principio. Evita la necesidad de operaciones adicionales para corregir errores. Confía en nuestra experiencia y enfoque preciso.',
	];

	const emoji = '🔴';

	return (
		<section className='grid gap-5 px-5 bg-white dark:bg-slate-900 text-dark dark:text-white'>
			<div>
				<h1 className='text-lg text-center font-my-montserrat font-bold uppercase pb-4'>
					Esta consulta es para ti si
				</h1>
				<ul className='text-sm text-center flex flex-col gap-2'>
					{Copy1.map((_, index) => (
						<li key={index}>
							{emoji} {_}
						</li>
					))}
				</ul>
			</div>

			<span className='block relative h-[2px] w-[80%] max-w-[390px] mx-auto my-5 bg-black dark:bg-white after:block after:w-[7px] after:h-[7px] after:bg-black after:dark:bg-white after:rotate-45 after:absolute after:-top-[3px] before:block before:w-[7px] before:h-[7px] before:bg-black before:dark:bg-white before:rotate-45 before:absolute before:-top-[3px] before:right-0'></span>

			<div>
				<h1 className='text-lg text-center font-my-montserrat font-bold uppercase pb-4'>
					El cambio en tu apariencia que estabas buscando
				</h1>
				<ul className='text-sm text-center flex flex-col gap-2'>
					{Copy2.map((_, index) => (
						<li key={index}>
							{emoji} {_}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

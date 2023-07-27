import { CardContent } from './CardContent';

export function Content() {
	return (
		<main className='px-4'>
			<h1 className='text-blue-light dark:text-white text-lg text-center uppercase font-my-montserrat font-bold pt-4 leading-6'>
				Conéctate con el Dr. Cristian Simons
			</h1>
			<p className='text-sm text-center font-my-montserrat pt-2'>
				Encuentra sus redes sociales y consulta en línea en un solo
				lugar.
			</p>
			<div className='w-full flex flex-wrap gap-5 justify-center pt-5'>
				<CardContent
					title='Consulta en Línea'
					text='Atención médica en tiempo real por Internet.'
					cardContainer='bg-gradient-linear-light dark:bg-gradient-linear-dark'
				/>
				<CardContent
					title='Newsletter'
					text='Salud nasal y bienestar general.'
					cardContainer='bg-gradient-linear-light dark:bg-gradient-linear-dark'
				/>
				<CardContent
					title='Mi TikTok'
					text='Descubre nuestros consejos de salud en TikTok.'
					cardContainer='bg-gradient-linear-light dark:bg-gradient-linear-dark'
				/>
				<CardContent
					title='Mi Instagram'
					text='Conéctate conmigo en Instagram para consejos de bienestar.'
					cardContainer='bg-gradient-linear-light dark:bg-gradient-linear-dark'
				/>
				<CardContent
					title='Mi Facebook'
					text='Entérate de las últimas noticias y consejos de salud.'
					cardContainer='bg-gradient-linear-light dark:bg-gradient-linear-dark'
				/>
			</div>
		</main>
	);
}

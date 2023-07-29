import { ContentCard } from './ContentCard';
// Card Images:
import ConsultaOnline from '/src/assets/images/consulta-en-linea-card.webp';
import Newsletter from '/src/assets/images/newsletter-cristian.webp';
import TikTok from '/src/assets/images/tiktok-cristian-card.webp';
import Instagram from '/src/assets/images/instagram-cristian-card.webp';
import Facebook from '/src/assets/images/facebook-cristian-card.webp';

export function Content() {
	return (
		<main>
			<h1 className='text-blue-light dark:text-white text-lg text-center uppercase font-my-montserrat font-bold pt-8 px-4 leading-6'>
				Conéctate con el Dr. Cristian Simons
			</h1>
			<p className='text-sm text-center font-my-sans pt-3 px-4'>
				Encuentra sus redes sociales y consulta en línea en un solo
				lugar.
			</p>
			<div className='max-w-[1000px] mx-auto grid lg:grid-cols-2 justify-items-center gap-20 pt-16 pb-10 px-6'>
				<ContentCard
					title='Consulta en Línea'
					text='Atención médica en tiempo real por Internet.'
					LinkTo='/consulta_online'
					cardContainer='bg-gradient-linear-light dark:bg-gradient-linear-dark'
					imgSrc={ConsultaOnline}
					imgClass='-right-2 bottom-0 w-36'
				/>
				<ContentCard
					title='Newsletter'
					text='Recibe consejos exclusivos para mejorar tu salud.'
					LinkTo='/newsletter'
					LinkClass='justify-end'
					cardContainer='bg-gradient-linear-newsletter'
					containerClass='items-end text-end'
					imgSrc={Newsletter}
					imgClass='left-0 bottom-0 w-40'
				/>
				<ContentCard
					title='Mi TikTok'
					text='Descubre nuestros consejos de salud en TikTok.'
					LinkTo='https://www.tiktok.com/@drsimonscristian'
					cardContainer='bg-gradient-linear-tiktok'
					imgSrc={TikTok}
					imgClass='right-0 bottom-0 w-32'
				/>
				<ContentCard
					title='Mi Instagram'
					text='Conéctate conmigo en Instagram para consejos de bienestar.'
					LinkTo='https://www.instagram.com/drsimonscristian/'
					LinkClass='justify-end'
					containerClass='items-end text-end'
					cardContainer='bg-gradient-linear-instagram'
					imgSrc={Instagram}
					imgClass='-left-2 bottom-0 w-32'
				/>
				<ContentCard
					title='Mi Facebook'
					text='Entérate de las últimas noticias y consejos de salud.'
					LinkTo='https://www.facebook.com/drcristiansimons'
					cardContainer='bg-gradient-linear-facebook lg:col-span-2'
					imgSrc={Facebook}
					imgClass='-right-4 bottom-0 w-40'
				/>
			</div>
		</main>
	);
}

import { CardContent } from './CardContent';
import { Footer } from '../Footer';
// Card Images:
import ConsultaOnline from '../../../public/images-processed/consulta-en-linea-card.webp';
import Newsletter from '../../../public/images-processed/newsletter-cristian.webp';
import TikTok from '../../../public/images-processed/tiktok-cristian-card.webp';
import Instagram from '../../../public/images-processed/instagram-cristian-card.webp';
import Facebook from '../../../public/images-processed/facebook-cristian-card.webp';

export function Content() {
	return (
		<main>
			<h1 className='text-blue-light dark:text-white text-lg text-center uppercase font-my-montserrat font-bold pt-4 px-4 leading-6'>
				Conéctate con el Dr. Cristian Simons
			</h1>
			<p className='text-sm text-center font-my-sans pt-2 px-4'>
				Encuentra sus redes sociales y consulta en línea en un solo
				lugar.
			</p>
			<div className='max-w-[1000px] mx-auto flex flex-wrap items-center justify-center gap-16 pt-16 pb-10 px-4'>
				<CardContent
					title='Consulta en Línea'
					text='Atención médica en tiempo real por Internet.'
					LinkTo='/consulta_online'
					cardContainer='bg-gradient-linear-light dark:bg-gradient-linear-dark'
					imgSrc={ConsultaOnline}
					imgClass='-right-2 -top-[70px] w-[140px]'
				/>
				<CardContent
					title='Newsletter'
					text='Salud nasal y bienestar general.'
					LinkTo='/newsletter'
					LinkClass='justify-end'
					cardContainer='bg-gradient-linear-newsletter'
					containerClass='items-end text-end'
					imgSrc={Newsletter}
					imgClass='left-0 -top-[71px] w-28'
				/>
				<CardContent
					title='Mi TikTok'
					text='Descubre nuestros consejos de salud en TikTok.'
					LinkTo='https://www.tiktok.com/@drsimonscristian'
					cardContainer='bg-gradient-linear-tiktok'
					imgSrc={TikTok}
					imgClass='right-0 -top-[74px] w-[120px]'
				/>
				<CardContent
					title='Mi Instagram'
					text='Conéctate conmigo en Instagram para consejos de bienestar.'
					LinkTo='https://www.instagram.com/drsimonscristian/'
					LinkClass='justify-end'
					containerClass='items-end text-end'
					cardContainer='bg-gradient-linear-instagram'
					imgSrc={Instagram}
					imgClass='-left-2 -top-[70px] w-[140px]'
				/>
				<CardContent
					title='Mi Facebook'
					text='Entérate de las últimas noticias y consejos de salud.'
					LinkTo='https://www.facebook.com/drcristiansimons'
					cardContainer='bg-gradient-linear-facebook'
					imgSrc={Facebook}
					imgClass='-right-4 -top-[85px] w-[150px]'
				/>
			</div>
			<Footer />
		</main>
	);
}

// Components
import { Testimonios } from './Testimonios/Testimonios';
import { WelcomeCopy } from './Hero/WelcomeCopy';
import { Form } from './Hero/Form';
import { UneteArticle } from './Unete/UneteArticle';

// Hooks
import useDarkMode from '../../hooks/useDarkMode';

// Images
import HeroDarkImg from '../../assets/images/newsletter/images/hero-dark-img.webp';
import HeroLightImg from '../../assets/images/newsletter/images/hero-light-img.webp';
import MailImg from '../../assets/images/newsletter/images/mail-image.webp';

export function Content() {
	const { isDarkMode } = useDarkMode();

	return (
		<main>
			<section className='h-[80vh] flex items-center justify-center gap-20 px-5 py-2 lg:px-10 lg:py-6'>
				<div className='max-w-[620px] mx-auto'>
					<WelcomeCopy />
					<Form />
				</div>
				<img
					className='w-hero-clamp hidden mx-auto animate-float lg:block'
					src={isDarkMode ? HeroDarkImg : HeroLightImg}
					alt='Cristian Hero'
				/>
			</section>
			<Testimonios />
			<section className='px-5 py-10'>
				<h1 className='text-blue-light dark:text-white text-center text-lg font-my-montserrat font-bold uppercase pb-6'>
					Únete gratis antes de que enviemos el email de hoy
				</h1>
				<div className='max-w-[900px] mx-auto grid lg:grid-cols-2 items-center justify-center'>
					<img
						className='w-full max-w-[420px] mx-auto h-full'
						src={MailImg}
						alt='Subscribe to our newsletter'
					/>
					<UneteArticle />
				</div>
			</section>
		</main>
	);
}

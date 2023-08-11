import { WelcomeCopy } from './Hero/WelcomeCopy';
import { Form } from './Hero/Form';

// Components
import { Testimonios } from './Testimonios/Testimonios';

// Hooks
import useDarkMode from '../../hooks/useDarkMode';

// Images
import HeroDarkImg from '../../assets/images/newsletter/images/hero-dark-img.webp';
import HeroLightImg from '../../assets/images/newsletter/images/hero-light-img.webp';

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
		</main>
	);
}

import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Proceso } from './ProcesosSection/Proceso';
import { MainCopy } from './CopySection/MainCopy';
import { Testimonios } from './TestimoniosSection/Testimonios';
import { SocialMedia } from './SocialMedia/SocialMedia';
import { Footer } from '../../Footer';

export function MainContent() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<section className='flex justify-center pb-20 mx-8'>
					<Proceso />
				</section>
				<MainCopy />
				<Testimonios />
				<SocialMedia />
			</main>
			<Footer />
		</>
	);
}

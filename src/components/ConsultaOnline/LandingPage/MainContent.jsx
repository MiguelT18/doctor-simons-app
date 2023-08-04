import { Header } from './Header';
import { Hero } from './Hero';
import { Proceso } from './Proceso';
import { MainCopy } from './MainCopy';
import { Testimonios } from './Testimonios';
import { SocialMedia } from './SocialMedia';
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

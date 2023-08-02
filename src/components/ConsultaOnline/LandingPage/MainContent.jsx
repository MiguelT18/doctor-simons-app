import { Header } from './Header';
import { Hero } from './Hero';
import { Proceso } from './Proceso';
import { MainCopy } from './MainCopy';
import { Testimonios } from './Testimonios';
import { Footer } from '../../Footer';

export function MainContent() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<section className='mx-8 mb-12'>
					<Proceso />
				</section>
				<MainCopy />
				<Testimonios />
			</main>
			<Footer />
		</>
	);
}

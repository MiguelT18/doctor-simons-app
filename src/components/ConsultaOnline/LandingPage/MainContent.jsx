import { Header } from './Header';
import { Hero } from './Hero';
import { Proceso } from './Proceso';
import { MainCopy } from './MainCopy';
import { Footer } from '../../Footer';

export function MainContent() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<div className='mx-8 mb-12'>
					<Proceso />
				</div>
				<MainCopy />
			</main>
			<Footer />
		</>
	);
}

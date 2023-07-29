import { HeroCopy } from './HeroCopy';
import { HeroVideo } from './HeroVideo';

export function Hero() {
	return (
		<section className='pt-6 max-w-[1000px] mx-auto'>
			<h1 className='text-blue-light dark:text-white text-center text-lg uppercase font-my-montserrat font-bold'>
				Descubre cómo la rinoplastia del Dr. Simons puede transformar tu
				apariencia y funcionalidad
			</h1>
			<div className='flex flex-col gap-12 py-10'>
				<HeroVideo />
				<HeroCopy />
			</div>
		</section>
	);
}

import { WelcomeCopy } from './Hero/WelcomeCopy';
import { Form } from './Hero/Form';

export function Content() {
	return (
		<main>
			<section className='max-w-[900px] mx-auto'>
				<WelcomeCopy />
				<Form />
			</section>
		</main>
	);
}

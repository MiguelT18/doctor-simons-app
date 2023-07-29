import { PrevNavButton } from '../../../components/PrevNavButton';

export function Paso1() {
	return (
		<div>
			<h1>Hello World!</h1>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Corporis explicabo, ipsa placeat excepturi modi aperiam cum
				sequi beatae eum alias nihil vel, soluta ducimus magni velit. In
				dolore quidem aspernatur?
			</p>
			<input
				type='text'
				placeholder='datos del paciente'
			/>
			<PrevNavButton prev='/consulta_online/consideraciones' />
		</div>
	);
}

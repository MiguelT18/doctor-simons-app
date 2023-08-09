import { PrevNavButton } from '../../../components/PrevNavButton';

const Paso1 = () => {
	return (
		<div>
			<h1 className='text-center text-lg'>Paso #1</h1>
			<p className='text-center text-sm'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Aliquam aperiam dicta dignissimos modi, repellat aspernatur
				aliquid. Totam non laudantium commodi id, possimus magnam sed
				repellat optio! Fugiat, quod. Cum, eaque!
			</p>
			<PrevNavButton prev='/consulta_online/consideraciones' />
		</div>
	);
};

export default Paso1;

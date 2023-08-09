import { ContarPasos } from '../../../../components/ConsultaOnline/ContarPasos';
import { DarkButton } from '../../../../components/DarkButton';

const Paso2 = () => {
	return (
		<div className='bg-gradient-linear-light dark:bg-gradient-linear-dark text-white'>
			<ContarPasos />
			<DarkButton />
		</div>
	);
};

export default Paso2;

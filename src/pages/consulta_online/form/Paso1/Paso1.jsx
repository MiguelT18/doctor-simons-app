import { ContarPasos } from '../../../../components/ConsultaOnline/Formulario/ContarPasos';
import FormPaso1 from './form';

import { PrevNavButton } from '../../../../components/PrevNavButton';
import { DarkButton } from '../../../../components/DarkButton';

const Paso1 = () => {
	return (
		<div className='bg-gradient-linear-light dark:bg-gradient-linear-dark text-white'>
			<ContarPasos />
			<FormPaso1 />
			<PrevNavButton prev='/consulta_online/consideraciones' />
			<DarkButton />
		</div>
	);
};

export default Paso1;

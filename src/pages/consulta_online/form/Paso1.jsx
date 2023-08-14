import { ContarPasos } from '../../../components/ConsultaOnline/Formulario/ContarPasos';
import FormPaso1 from '../../../components/ConsultaOnline/Formulario/Paso1/FormPaso1';

import { PrevNavButton } from '../../../components/PrevNavButton';
import { DarkButton } from '../../../components/DarkButton';

const Paso1 = () => {
	return (
		<div className='h-full sm:h-screen bg-gradient-linear-light dark:bg-gradient-linear-dark text-white'>
			<ContarPasos />
			<FormPaso1 />
			<PrevNavButton prev='/consulta_online/consideraciones' />
			<DarkButton />
		</div>
	);
};

export default Paso1;

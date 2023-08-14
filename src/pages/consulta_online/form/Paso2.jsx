import { ContarPasos } from '../../../components/ConsultaOnline/Formulario/ContarPasos';
import { DarkButton } from '../../../components/DarkButton';

import FormPaso2 from '../../../components/ConsultaOnline/Formulario/Paso2/FormPaso2';

const Paso2 = () => {
	return (
		<div className='h-screen bg-gradient-linear-light dark:bg-gradient-linear-dark text-white'>
			<ContarPasos />
			<DarkButton />
			<FormPaso2 />
		</div>
	);
};

export default Paso2;

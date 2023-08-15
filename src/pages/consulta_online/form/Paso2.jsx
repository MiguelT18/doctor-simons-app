import { ContarPasos } from '../../../components/ConsultaOnline/Formulario/ContarPasos';
import { DarkButton } from '../../../components/DarkButton';

import FormPaso2 from '../../../components/ConsultaOnline/Formulario/Paso2/FormPaso2';

const Paso2 = () => {
	return (
		<div className='min-h-screen h-full bg-gradient-linear-light dark:bg-gradient-linear-dark text-white'>
			<ContarPasos />
			<FormPaso2 />
			<DarkButton />
		</div>
	);
};

export default Paso2;

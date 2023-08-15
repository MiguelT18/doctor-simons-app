import { ContarPasos } from '../../../components/ConsultaOnline/Formulario/ContarPasos';
import { DarkButton } from '../../../components/DarkButton';
import FormPaso4 from '../../../components/ConsultaOnline/Formulario/Paso4/FormPaso4';

const Paso4 = () => {
	return (
		<div className='h-full min-h-screen bg-gradient-linear-light dark:bg-gradient-linear-dark text-white'>
			<ContarPasos />
			<FormPaso4 />
			<DarkButton />
		</div>
	);
};

export default Paso4;

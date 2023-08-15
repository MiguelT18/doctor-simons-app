import { ContarPasos } from '../../../components/ConsultaOnline/Formulario/ContarPasos';
import { DarkButton } from '../../../components/DarkButton';
import FormPaso3 from '../../../components/ConsultaOnline/Formulario/Paso3/FormPaso3';

const Paso3 = () => {
	return (
		<div className='h-full min-h-screen bg-gradient-linear-light dark:bg-gradient-linear-dark text-white'>
			<ContarPasos />
			<FormPaso3 />
			<DarkButton />
		</div>
	);
};

export default Paso3;

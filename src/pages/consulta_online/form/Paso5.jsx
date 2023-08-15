import { ContarPasos } from '../../../components/ConsultaOnline/Formulario/ContarPasos';
import { DarkButton } from '../../../components/DarkButton';
import FormPaso5 from '../../../components/ConsultaOnline/Formulario/Paso5/FormPaso5';

const Paso5 = () => {
	return (
		<div className='h-full min-h-screen bg-gradient-linear-light dark:bg-gradient-linear-dark text-white'>
			<ContarPasos />
			<FormPaso5 />
			<DarkButton />
		</div>
	);
};

export default Paso5;

import WarningIcon from '../../../assets/images/warning-icon.png';
import WifiLogo from '../../../assets/images/wifi-logo.png';
import Gmail from '../../../assets/images/gmail-logo.png';
import QuestionsImage from '../../../assets/images/questions.png';
import { ConsiderationsCard } from './ConsiderationsCard';
import { NextNavButton } from '../../NextNavButton';

export function Considerations() {
	return (
		<main className='px-5'>
			<p className='text-sm text-center max-w-[855px] mx-auto'>
				La Consulta en Línea es una preconsulta donde por medio de una
				encuesta de tu historial médico y fotografías recibirás un
				informe médico y presupuesto a tu correo electrónico. Asimismo
				obtendrás una consulta privada online con el Dr. Cristian Simons
				especialista en cirugía de rinoplastia ultrasónica.
			</p>
			<div className='grid md:grid-cols-2 justify-items-center items-center max-w-[1000px] mx-auto gap-8 py-8'>
				<ConsiderationsCard
					text='Asegúrate de tener una conexión a Internet estable.'
					imgSrc={WifiLogo}
				/>
				<ConsiderationsCard
					text='Procura utilizar un correo electrónico que uses frecuentemente y procura escribirlo bien.'
					imgSrc={Gmail}
				/>
				<div className='md:col-span-2'>
					<ConsiderationsCard
						text='Tus dudas adicionales las puedes aclarar a través del siguiente correo: '
						imgSrc={QuestionsImage}
					/>
				</div>
			</div>
			<ConsiderationsCard
				title='Advertencia'
				text='Al realizar el proceso de la consulta en línea, tendrás un plazo de siete días continuos, para concretar la misma posterior a esto deberás ingresar como una nueva consulta.'
				imgSrc={WarningIcon}
				customConsiderationsCard='text-white bg-gradient-linear-light dark:bg-gradient-linear-dark rounded-md p-3 mx-auto my-6 relative'
				customImgClass='max-w-[50px] h-fit absolute -right-2 -top-2 animate-bounce'
			/>
			<div className='w-full flex justify-center mb-5'>
				<NextNavButton
					text='¡Registrarme ya!'
					next='/consulta_online/consideraciones/paso1'
				/>
			</div>
		</main>
	);
}

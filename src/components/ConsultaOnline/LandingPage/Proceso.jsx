import { ProcesoCard } from './ProcesoCard';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';

export function Proceso() {
	return (
		<article className='w-fit h-fit flex flex-col gap-8 bg-gradient-linear-light dark:bg-gradient-linear-dark -mt-12 px-6 py-8 rounded-3xl shadow-custom dark:shadow-custom-dark'>
			<h1 className='text-white text-center text-lg uppercase font-my-montserrat font-bold'>
				Este será tu proceso
			</h1>
			<div className='w-full max-w-[1300px] h-full flex items-stretch justify-center flex-wrap-reverse gap-10'>
				<ProcesoCard
					title='Completa tu registro'
					description='Deberás registrarte en la Consulta y llenar el formulario con tus datos.'
					icon={faListCheck}
				/>
				<ProcesoCard
					title='Realiza tu pago'
					description='Una vez registrado en la consulta en línea deberás realizar el pago.'
					icon={faMoneyBillWave}
				/>
				<ProcesoCard
					title='Programa tu consulta'
					description='Deberás programar la hora y fecha de tu consulta, puedes contactar a nuestro soporte para eso.'
					icon={faCalendarDays}
				/>
				<ProcesoCard
					title='Asiste a la reunión'
					description='Reunión por Google Meets. Espera el correo con el enlace para unirte.'
					icon={faUserGroup}
				/>
			</div>
		</article>
	);
}

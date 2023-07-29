import Tap from '../../../../assets/icons/tap.svg';
import { useState } from 'react';
import { NextNavButton } from '../../../../components/NextNavButton';

export function HeroCopy() {
	const [rotated, setRotated] = useState(false);

	const handleRotation = () => {
		setRotated(!rotated);
	};

	return (
		<div
			onClick={handleRotation}
			className='max-w-[500px] h-fit mx-auto flex flex-col items-center lg:col-span-3 px-4 cursor-pointer animate-float'>
			<div
				className={`${
					rotated ? 'hidden' : ''
				} flex flex-wrap gap-3 justify-center shadow-lg shadow-black dark:shadow-black dark:shadow-2xl p-5 bg-gradient-linear-newsletter text-white h-full rounded-xl`}>
				<h1 className='max-w-[260px] text-center text-md font-my-montserrat font-bold uppercase'>
					Durante tu consulta, tendrás la oportunidad de:
				</h1>
				<img
					src={Tap}
					alt='Tap the card'
					className='w-fit h-fit animate-pulse'
				/>
			</div>
			<div
				className={`${
					rotated ? '' : 'hidden'
				} shadow-lg shadow-black dark:shadow-black dark:shadow-2xl p-5 bg-gradient-linear-newsletter text-white h-full rounded-xl`}>
				<ul className='text-sm flex flex-col gap-5'>
					<li>
						✅ Conocer a nuestro equipo y recibir un servicio
						personalizado que te hará sentir en confianza.
					</li>
					<li>
						✅ Compartir tus deseos y expectativas para tu nariz, y
						recibir el consejo experto del Dr. Simons para lograr el
						resultado deseado.
					</li>
					<li>
						✅ Obtener un diagnóstico preciso de las características
						de tu nariz y recibir un plan de tratamiento
						personalizado, adaptado a tus necesidades específicas.
					</li>
					<li>
						✅ Aprender sobre los detalles del proceso de la
						cirugía, incluyendo el tiempo de recuperación y las
						precauciones necesarias.
					</li>
					<li>
						✅ Obtener un presupuesto detallado y transparente para
						tu rinoplastia estética o funcional, con opciones de
						financiamiento disponibles.
					</li>
				</ul>
				<div className='flex justify-center mt-6'>
					<NextNavButton next='/consulta_online/consideraciones' />
				</div>
			</div>
		</div>
	);
}

{
	/*  */
}

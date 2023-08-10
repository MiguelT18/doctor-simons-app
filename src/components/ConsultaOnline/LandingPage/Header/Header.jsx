import { useState, useEffect } from 'react';

export function Header() {
	const [contador, setContador] = useState(0);

	useEffect(() => {
		const increment = (1000 / 5000) * 10;
		const intervalID = setInterval(() => {
			setContador((prevContador) => {
				const newContador = prevContador + increment;
				if (newContador >= 1000) {
					clearInterval(intervalID);
					return 1000;
				}
				return newContador;
			});
		}, 1);

		return () => clearInterval(intervalID);
	}, []);

	return (
		<header
			id='hero-header'
			className='w-full h-fit bg-blue-light dark:bg-blue-dark dark:bg-opacity-50 bg-opacity-50 text-white text-center border-b-2 border-white py-3 lg:py-6 px-2'>
			<h1 className='text-md lg:text-lg uppercase font-bold mb-2'>
				Regístrate en la Consulta en Línea con el Dr. Cristian Simons
			</h1>
			<h2 className='text-md lg:text-lg uppercase font-bold'>
				<span className='text-green-500 dark:text-just-yellow font-my-montserrat'>
					+{Math.round(contador)}
				</span>{' '}
				Pacientes Satisfechos
			</h2>
		</header>
	);
}

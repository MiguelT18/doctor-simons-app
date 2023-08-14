import { Link, useLocation } from 'react-router-dom';

export function ContarPasos() {
	const steps = [
		{
			number: '1',
			path: '/consulta_online/consideraciones/paso1',
		},
		{
			number: '2',
			path: '/consulta_online/consideraciones/paso2',
		},
		{
			number: '3',
			path: '/consulta_online/consideraciones/paso3',
		},
		{
			number: '4',
			path: '/consulta_online/consideraciones/paso4',
		},
		{
			number: '5',
			path: '/consulta_online/consideraciones/paso5',
		},
	];

	const location = useLocation();

	return (
		<header className='max-w-[900px] mx-auto p-5'>
			<h1 className='text-lg font-my-montserrat text-center font-bold uppercase pb-1 md:tracking-wider'>
				Datos Personales
			</h1>
			<p className='text-sm font-my-sans text-center pb-6'>
				En este paso deberás proporcionar tus datos personales.
			</p>
			<span className='w-full h-0.5 block bg-white'></span>
			<ul className='flex justify-center gap-5 my-4'>
				{steps.map((step, index) => {
					const isActiveStep = location.pathname === step.path;
					return (
						<Link
							className={`${
								isActiveStep
									? 'bg-just-yellow text-white'
									: 'bg-white text-dark'
							} p-4 rounded-full flex items-center justify-center w-10 h-10 md:w-12 md:h-12 text-md font-bold`}
							to={`/consulta_online/consideraciones/paso${step.number}`}
							key={index}>
							{step.number}
						</Link>
					);
				})}
			</ul>
			<span className='w-full h-0.5 block bg-white'></span>
		</header>
	);
}

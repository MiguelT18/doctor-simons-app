import { Link } from 'react-router-dom';

// Componentes
import { RuleCard } from './RuleCard';

// Imágenes
import Number1 from '../../../assets/images/consultaOnline/payment-form/number1.png';
import Number2 from '../../../assets/images/consultaOnline/payment-form/number2.png';
import Number3 from '../../../assets/images/consultaOnline/payment-form/number3.png';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
	const rules = [
		{
			image: Number1,
			rule: 'Si optas por Hotmart, completa los datos del checkout que aparecen en la página.',
		},
		{
			image: Number2,
			rule: 'En caso de dudas, contacta a nuestro equipo de soporte, estaremos encantados de ayudarte.',
		},
		{
			image: Number3,
			rule: 'En caso de que quieras realizar el pago a través de una transferencia bancaria directa al doctor o por código QR dale click al botón "Transferencia Bancaria".',
		},
	];

	return (
		<header className='max-w-[900px] mx-auto'>
			<h1 className='text-blue-light dark:text-white text-center text-lg font-my-montserrat font-bold uppercase pt-5'>
				Pago de Consulta
			</h1>
			<p className='text-center text-sm font-my-sans pt-1 px-4'>
				Para realizar tu pago, por favor sigue estos sencillos pasos
				viendo el siguiente video:👇👇
			</p>

			<div className='w-full h-fit mt-7 px-5'>
				<iframe
					loading='lazy'
					className='w-full max-w-[720px] mx-auto h-fit aspect-video'
					src='https://www.youtube.com/embed/x40D3ZF2V5o'
					title='Consulta en línea con el Dr. Cristian Simons: todo lo que necesitas saber'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen></iframe>
			</div>

			<h2 className='text-blue-light dark:text-white text-center text-sm md:text-md font-my-montserrat font-bold uppercase pt-6 pb-12 px-5'>
				Sigue las instrucciones y completa el formulario de pago para
				conseguir una consulta con el Dr. Cristian Simons
			</h2>
			<div className='flex max-md:flex-col gap-14 px-10'>
				{rules.map((rule, index) => (
					<RuleCard
						key={index}
						instruction={rule.rule}
						imgSrc={rule.image}
					/>
				))}
			</div>

			<div className='flex justify-center my-8'>
				<Link
					to='https://wa.link/vmwsw3'
					className='bg-main-red text-white w-fit h-fit text-center text-buttonSize italic font-bold py-2 px-5 rounded-md hover:scale-110 transition-transform duration-100 linear'>
					Transferencia Bancaria
					<FontAwesomeIcon
						className='ml-3'
						icon={faQrcode}
					/>
				</Link>
			</div>
		</header>
	);
};

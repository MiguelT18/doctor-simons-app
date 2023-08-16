import { Link } from 'react-router-dom';

// Componentes
import { Header } from './Header';
import { Footer } from '../../Footer';
import { PrevNavButton } from '../../PrevNavButton';
import { DarkButton } from '../../DarkButton';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

const PaymentForm = () => {
	return (
		<>
			<Header />
			<div className='w-full h-fit px-8'>
				<h1 className='text-center text-lg font-my-montserrat font-bold pb-8 pt-2 uppercase text-blue-light dark:text-white'>
					Llena el siguiente formulario y realiza el pago 👇
				</h1>
				<iframe
					src='https://payment.hotmart.com/next/E77601218Y?bid=1692198471505'
					className='w-full max-w-[720px] mx-auto h-fit aspect-video'
					allowFullScreen></iframe>
			</div>

			<div className='flex justify-center my-8'>
				<Link
					className='bg-main-red text-white w-fit h-fit text-center text-buttonSize italic font-bold py-2 px-5 rounded-md hover:scale-110 transition-transform duration-100 linear'
					to='https://wa.link/xlqh9d'>
					Contacto de Soporte
					<FontAwesomeIcon
						className='ml-2'
						icon={faHeadset}
					/>
				</Link>
			</div>

			<Footer />

			<PrevNavButton prev='/' />
			<DarkButton />
		</>
	);
};

export default PaymentForm;

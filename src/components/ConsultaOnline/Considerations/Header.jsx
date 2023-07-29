import { PaymentCard } from '../../../components/ConsultaOnline/Considerations/PaymentCard';

export function Header() {
	return (
		<header>
			<h1 className='text-center text-blue-light dark:text-white text-lg font-my-montserrat font-bold uppercase py-4'>
				Consideraciones
			</h1>
			<div className='grid justify-items-center md:grid-cols-2 gap-6 max-w-[1000px] mx-auto px-5 pb-8'>
				<PaymentCard
					title='Depósito o Pago QR'
					price='250 Bs'
					description='Deberás solicitar el código QR a nuestro soporte.'
				/>
				<PaymentCard
					title='Método internacional'
					price='$39.99 / 270 Bs'
					description='Paga de forma segura a través de Hotmart.'
				/>
			</div>
		</header>
	);
}

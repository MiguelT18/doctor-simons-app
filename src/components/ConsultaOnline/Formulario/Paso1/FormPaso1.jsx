import { useState } from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import ChakraPhone from './ChakraPhone';
import 'react-international-phone/style.css';

const FormPaso1 = () => {
	const [phone, setPhone] = useState('');

	return (
		<ChakraProvider>
			<CSSReset />
			<form className='max-w-[900px] mx-auto px-5 pt-2'>
				<p className='text-center font-my-sans text-sm pb-5'>
					Completa la siguiente información.
					<br />
					Recibe un diagnóstico y presupuesto
				</p>

				<div className='grid md:grid-cols-2 gap-4 pb-4 font-my-sans'>
					<input
						className='w-full h-[40px] rounded-md px-4 text-sm text-dark'
						type='text'
						placeholder='Nombres'
					/>
					<input
						className='w-full h-[40px] rounded-md px-4 text-sm text-dark'
						type='text'
						placeholder='Apellidos'
					/>
				</div>

				<select
					className='w-full h-[40px] rounded-md px-4 text-sm text-dark bg-white mb-4'
					name='gender'
					id='gender'>
					<option
						selected
						disabled>
						Género
					</option>
					<option value='male'>Masculino</option>
					<option value='female'>Femenino</option>
				</select>

				<select
					className='w-full h-[40px] rounded-md px-4 text-sm text-dark bg-white mb-4'
					name='document'
					id='document'>
					<option
						className='font-bold'
						selected
						disabled>
						Tipo de documento
					</option>
					<option value='foreign'>Extranjero</option>
					<option value='national'>Nacional C.I</option>
				</select>

				<input
					type='email'
					placeholder='Ingresa tu mejor correo'
					className='w-full h-[40px] rounded-md px-4 text-sm text-dark bg-white mb-4'
				/>

				<ChakraPhone
					value={phone}
					onChange={(phone) => setPhone(phone)}
				/>
			</form>
		</ChakraProvider>
	);
};

export default FormPaso1;

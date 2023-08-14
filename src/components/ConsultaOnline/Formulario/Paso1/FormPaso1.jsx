import { useState, useEffect } from 'react';

import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

import { NextNavButton } from '../../../NextNavButton';

// Input phone number library
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import ChakraPhone from './ChakraPhone';
import 'react-international-phone/style.css';

const FormPaso1 = () => {
	const [phone, setPhone] = useState('');
	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState('');

	// Obtener la lista de países desde la API de Rest Countries
	useEffect(() => {
		fetch('https://restcountries.com/v3/all')
			.then((response) => response.json())
			.then((data) => {
				const countriesData = data.map((country) => {
					return {
						name: country.name.common,
						flag: country.flags.svg,
					};
				});
				setCountries(countriesData);
			})
			.catch((error) =>
				console.error('Error fetching countries:', error)
			);
	}, []);

	return (
		<ChakraProvider>
			<CSSReset />
			<form className='max-w-[900px] mx-auto px-5 pt-2'>
				<p className='text-center font-my-sans text-sm pb-5'>
					Completa la siguiente información.
					<br />
					Recibe un diagnóstico y presupuesto.
				</p>
				<div className='grid md:grid-cols-2 gap-4 pb-4 font-my-sans'>
					<input
						className='w-full h-10 rounded-md px-4 text-sm text-dark'
						type='text'
						placeholder='Nombres'
					/>
					<input
						className='w-full h-10 rounded-md px-4 text-sm text-dark'
						type='text'
						placeholder='Apellidos'
					/>
				</div>
				<select
					className='w-full h-10 rounded-md px-4 text-sm text-dark bg-white mb-4'
					name='gender'
					id='gender'
					defaultValue=''>
					<option
						value=''
						disabled>
						Género
					</option>
					<option value='male'>Masculino</option>
					<option value='female'>Femenino</option>
				</select>
				<select
					className='w-full h-10 rounded-md px-4 text-sm text-dark bg-white mb-4'
					name='document'
					id='document'
					defaultValue=''>
					<option
						className='font-bold'
						value=''
						disabled>
						Tipo de documento
					</option>
					<option value='foreign'>Extranjero</option>
					<option value='national'>Nacional C.I</option>
				</select>
				<input
					type='email'
					placeholder='Ingresa tu mejor correo'
					className='w-full h-10 rounded-md px-4 text-sm text-dark bg-white mb-4'
				/>
				<p className='text-sm font-my-sans pb-2'>
					Ingresa tu número de teléfono:
				</p>
				<ChakraPhone
					value={phone}
					onChange={(phone) => setPhone(phone)}
				/>
				<p className='text-sm font-my-sans pb-2 pt-4'>
					Ingresa tu fecha de nacimiento:
				</p>
				<div className='w-full flex justify-between min-[400px]:justify-start gap-2'>
					<input
						className='max-w-[80px] px-4 h-10 rounded-md text-sm text-center text-dark'
						type='number'
						placeholder='Año'
					/>
					<input
						className='max-w-[80px] px-4 h-10 rounded-md text-sm text-center text-dark'
						type='number'
						placeholder='Mes'
					/>
					<input
						className='max-w-[80px] px-4 h-10 rounded-md text-sm text-center text-dark'
						type='number'
						placeholder='Día'
					/>
				</div>

				<p className='text-sm font-my-sans pt-4'>Selecciona tu país:</p>
				<select
					className='w-full h-10 rounded-md px-4 text-sm text-dark bg-white mt-2'
					value={selectedCountry}
					onChange={(e) => setSelectedCountry(e.target.value)}>
					<option
						value=''
						disabled>
						País
					</option>
					{countries.map((country, index) => (
						<option
							key={index}
							value={country.name}>
							{country.name}
						</option>
					))}
				</select>

				<div className='flex justify-center pt-5 max-sm:pb-16'>
					<NextNavButton
						next='/consulta_online/consideraciones/paso2'
						text='Siguiente paso'
						icon={faHandPointRight}
					/>
				</div>
			</form>
		</ChakraProvider>
	);
};

export default FormPaso1;

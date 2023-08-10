const FormPaso1 = () => {
	return (
		<form>
			<p className='text-center text-sm'>
				Completa la siguiente información.
				<br />
				Recibe un diagnóstico y presupuesto
			</p>

			<div className='grid gap-5 place-content-center'>
				<div className='w-full flex sm:flex-col gap-5'>
					<input
						className='w-full text-sm text-dark'
						type='text'
						placeholder='Nombres'
					/>
					<input
						className='w-full text-sm text-dark'
						type='text'
						placeholder='Apellidos'
					/>
				</div>

				<select
					className='text-sm text-dark'
					name='genders'
					id='genders'>
					<option disabled>Género</option>
					<option value='male'>Masculino</option>
					<option value='female'>Femenino</option>
				</select>

				<select
					className='text-sm text-dark'
					name='document'
					id='document'>
					<option disabled>Tipo de documento</option>
					<option value='national'>Nacional C.I.</option>
					<option value='foreign'>Extranjero</option>
				</select>

				<input
					className='w-full text-sm text-dark'
					type='number'
					placeholder='Número de documento'
				/>
				<label
					className='w-full text-sm text-dark'
					htmlFor='email-input'>
					<input
						id='email-input'
						type='email'
						placeholder='Ingresa tu mejor correo'
					/>
					Ingresa el correo que más utilices
				</label>
			</div>
		</form>
	);
};

export default FormPaso1;

const FormPaso1 = () => {
	return (
		<form>
			<p className='text-center text-sm'>
				Completa la siguiente información.
				<br />
				Recibe un diagnóstico y presupuesto
			</p>

			<div className='grid gap-5 place-content-center'>
				<div className='flex flex-wrap'>
					<input
						type='text'
						placeholder='Nombres'
					/>
					<input
						type='text'
						placeholder='Apellidos'
					/>
				</div>

				<select
					name='genders'
					id='genders'>
					<option disabled>Género</option>
					<option value='male'>Masculino</option>
					<option value='female'>Femenino</option>
				</select>

				<select
					name='document'
					id='document'>
					<option disabled>Tipo de documento</option>
					<option value='national'>Nacional C.I.</option>
					<option value='foreign'>Extranjero</option>
				</select>

				<input
					type='number'
					placeholder='Número de documento'
				/>
				<label htmlFor='email-input'>
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

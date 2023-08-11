import { NextNavButton } from '../../NextNavButton';

export function Form() {
	return (
		<form className='flex flex-col justify-center gap-5 pt-4 pb-8 mx-4'>
			<input
				className='text-sm px-3 py-2 text-dark rounded-md border-2 border-gray-300'
				type='text'
				placeholder='Tu nombre completo'
			/>
			<input
				className='text-sm px-3 py-2 text-dark rounded-md border-2 border-gray-300'
				type='email'
				placeholder='Tu correo electrónico'
			/>

			<NextNavButton text='¡Suscríbete aquí!' />
		</form>
	);
}

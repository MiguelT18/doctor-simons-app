import { NextNavButton } from '../../NextNavButton';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export function Form() {
	return (
		<form className='flex flex-col justify-center items-start gap-5 pt-2 pb-8'>
			<input
				className='text-sm px-3 w-full py-2 text-dark rounded-md border-2 border-gray-300 dark:border-none'
				type='text'
				placeholder='Tu nombre completo'
			/>
			<input
				className='text-sm px-3 w-full py-2 text-dark rounded-md border-2 border-gray-300 dark:border-none'
				type='email'
				placeholder='Tu correo electrónico'
			/>

			<div className='flex w-full justify-center lg:justify-normal'>
				<NextNavButton
					text='¡Suscríbete aquí!'
					icon={faRightToBracket}
					iconSize='lg'
					next='/newsletter/thankspage_newsletter'
				/>
			</div>
		</form>
	);
}

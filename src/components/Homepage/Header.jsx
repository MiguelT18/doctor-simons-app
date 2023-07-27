import HeaderImage from '../../../public/images-processed/home-header-picture.webp';
import DoctorName from '../../../public/assets/images/doctor-name.png';
import Elipse from '../../../public/assets/icons/elipse.svg';

export function Header() {
	return (
		<header className='bg-blue-light dark:bg-blue-dark'>
			<div className='flex justify-center items-center gap-3 pt-3'>
				<div className='relative flex'>
					<img
						src={HeaderImage}
						alt='Dr. Cristian Simons'
						className='w-header-img h-full rounded-full m-1 -scale-x-100'
					/>
					<img
						src={Elipse}
						alt='Border image'
						className='w-full h-full absolute'
					/>
				</div>
				<img
					src={DoctorName}
					alt='Doctor logo'
					className='w-header-drname h-full'
				/>
			</div>
			<span className='block relative h-[2px] w-[80%] max-w-[390px] mx-auto my-4 bg-white after:block after:w-[7px] after:h-[7px] after:bg-white after:rotate-45 after:absolute after:-top-[3px] before:block before:w-[7px] before:h-[7px] before:bg-white before:rotate-45 before:absolute before:-top-[3px] before:right-0'></span>
			<p className='text-white font-my-sans max-w-[770px] mx-auto text-sm text-center pb-4 px-2'>
				¡Hola! Soy el Dr. Cristian Simons, especialista en rinoplastía
				ultrasónica y rinología. Mi misión es ayudarte a tener la nariz
				de tus sueños y a respirar mejor.
			</p>
		</header>
	);
}

import HeaderLightImage from '../../assets/images/newsletter/images/light-logo.png';
// import HeaderDarkImage from '../../assets/images/newsletter/images/dark-logo.png';

export function Header() {
	return (
		<div className='flex justify-center py-4'>
			<img
				src={HeaderLightImage}
				alt=''
			/>
		</div>
	);
}

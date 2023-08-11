import useDarkMode from '../../../hooks/useDarkMode';

import HeaderLightImage from '../../../assets/images/newsletter/images/light-logo.png';
import HeaderDarkImage from '../../../assets/images/newsletter/images/dark-logo.png';

export function Header() {
	const { isDarkMode } = useDarkMode();

	return (
		<header className='flex justify-center py-4'>
			<img
				src={isDarkMode ? HeaderDarkImage : HeaderLightImage}
				alt='Header Logo'
			/>
		</header>
	);
}

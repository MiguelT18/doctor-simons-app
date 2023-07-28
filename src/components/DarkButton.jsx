import { useState, useEffect } from 'react';
import LightRoundButton from '../../public/assets/icons/light-round-button.svg';
import LightSwitchElements from '../../public/assets/icons/light-switch-elements.svg';
import DarkRoundButton from '../../public/assets/icons/night-round-button.svg';
import DarkSwitchElements from '../../public/assets/icons/night-switch-elements.svg';

export function DarkButton() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedTheme = localStorage.getItem('isDarkMode');
		return savedTheme === 'true' ? true : false;
	});

	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
		localStorage.setItem('isDarkMode', isDarkMode);
	}, [isDarkMode]);

	const handleButtonClick = () => {
		setIsDarkMode(!isDarkMode);
	};

	const roundButton = isDarkMode ? DarkRoundButton : LightRoundButton;
	const switchElements = isDarkMode
		? DarkSwitchElements
		: LightSwitchElements;

	return (
		<div
			onClick={handleButtonClick}
			className='fixed w-fit bottom-0 right-0 mb-3 mr-3 cursor-pointer z-50'>
			<img
				src={roundButton}
				alt='round button element'
				className={`w-fit h-fit absolute -top-[8%] transition-transform duration-300 ease-in-out ${
					isDarkMode ? 'transform translate-x-[115%]' : ''
				}`}
			/>
			<img
				src={switchElements}
				alt='switch button element'
				className='w-fit h-fit'
			/>
		</div>
	);
}

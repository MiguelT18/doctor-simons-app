import { useState, useEffect } from 'react';
import useDarkMode from '../hooks/useDarkMode';

import LightRoundButton from '/src/assets/icons/light-round-button.svg';
import LightSwitchElements from '/src/assets/icons/light-switch-elements.svg';
import DarkRoundButton from '/src/assets/icons/night-round-button.svg';
import DarkSwitchElements from '/src/assets/icons/night-switch-elements.svg';

export function DarkButton() {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		const position = window.scrollY;
		const specificPosition = 500;
		if (position > specificPosition) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const roundButton = isDarkMode ? DarkRoundButton : LightRoundButton;
	const switchElements = isDarkMode
		? DarkSwitchElements
		: LightSwitchElements;

	return (
		<div
			onClick={toggleDarkMode}
			className={`fixed ${
				isScrolled ? 'top-0' : 'bottom-0'
			} left-0 m-3 cursor-pointer z-50`}>
			<img
				src={roundButton}
				alt='round button element'
				className={`w-fit h-fit absolute -top-1 transition-transform duration-300 ease-in-out ${
					isDarkMode ? 'transform translate-x-[105%] -top-[5px]' : ''
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

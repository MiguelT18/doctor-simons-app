import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Crear el contexto
export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
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

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	const contextValue = {
		isDarkMode,
		toggleDarkMode,
	};

	return (
		<DarkModeContext.Provider value={contextValue}>
			{children}
		</DarkModeContext.Provider>
	);
};

DarkModeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

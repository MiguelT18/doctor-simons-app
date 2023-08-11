import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';

// Hook personalizado para usar el contexto fácilmente
const useDarkMode = () => {
	return useContext(DarkModeContext);
};

export default useDarkMode;

import { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';

// Hook personalizado para usar el contexto fácilmente
const useDarkMode = () => {
	return useContext(DarkModeContext);
};

export default useDarkMode;

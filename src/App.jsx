import { BrowserRouter, Routes } from 'react-router-dom';
import RenderRoutes from './routes';
import { routes } from './routes';
import { DarkModeProvider } from './hooks/DarkModeContext';

function App() {
	return (
		<DarkModeProvider>
			<BrowserRouter>
				<Routes>{RenderRoutes(routes)}</Routes>
			</BrowserRouter>
		</DarkModeProvider>
	);
}

export default App;

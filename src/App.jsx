import { BrowserRouter, Routes } from 'react-router-dom';
import RenderRoutes from './routes';
import { routes } from './routes';

function App() {
	return (
		<BrowserRouter>
			<Routes>{RenderRoutes(routes)}</Routes>
		</BrowserRouter>
	);
}

export default App;

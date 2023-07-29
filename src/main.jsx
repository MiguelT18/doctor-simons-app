import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';
import ErrorPage from './routes/404.jsx';
import App from './routes/App.jsx';
import './styles/index.css';

//? Route Elements:
//* Consulta en Línea
import { ConsultaOnline } from './routes/ConsultaOnline/ConsultaOnline.jsx';
import { Paso1 } from './routes/ConsultaOnline/form/Paso1.jsx';

//* Newsletter
import { Newsletter } from './routes/Newsletter.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path='/'
				element={<App />}
			/>
			<Route
				path='/consulta_online/*'
				element={<ConsultaOnline />}
			/>
			<Route
				path='/consulta_online/formulario/paso1'
				element={<Paso1 />}
			/>
			<Route
				path='/newsletter'
				element={<Newsletter />}
			/>
			<Route
				path='*'
				element={<ErrorPage />}
			/>
		</>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

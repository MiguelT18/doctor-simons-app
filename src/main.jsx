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
// Routes:
import { ConsultaOnline } from './routes/ConsultaOnline.jsx';
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

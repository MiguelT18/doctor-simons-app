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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path='/'
			element={<App />}>
			<Route
				path='/about'
				element={<h1>About Page</h1>}
			/>
			<Route
				path='/contact'
				element={<h1>Contact Page</h1>}
			/>
			<Route
				path='/about/nested'
				element={<h1>Nested Route</h1>}
			/>
			<Route
				path='*'
				element={<ErrorPage />}
			/>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

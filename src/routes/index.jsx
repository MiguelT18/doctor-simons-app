import { lazy, Fragment, Suspense } from 'react';
import { Route, Outlet } from 'react-router-dom';

export const renderRoutes = (routes) => {
	return routes.map((route) => {
		const Component = route.element || Fragment;
		const Layout = route.layout || Fragment;
		return (
			<Route
				key={route.path}
				path={route.path}
				element={
					<Suspense fallback={<h1>Loading..</h1>}>
						<Layout>
							{route.children ? <Outlet /> : <Component />}
						</Layout>
					</Suspense>
				}>
				{route.children && renderRoutes(route.children)}
			</Route>
		);
	});
};

export const routes = [
	// Página de Inicio
	{
		path: '/',
		element: lazy(async () => await import('../pages/Home')),
	},

	// Consulta en Línea
	{
		path: '/consulta_online',
		element: Fragment,
		children: [
			{
				path: '',
				element: lazy(
					async () =>
						await import('../pages/consulta_online/ConsultaEnLinea')
				),
			},
			{
				path: 'consideraciones',
				element: lazy(
					async () =>
						await import('../pages/consulta_online/Consideraciones')
				),
			},
		],
	},

	// Newsletter
	{
		path: '/newsletter',
		element: lazy(async () => await import('../pages/Newsletter')),
	},

	// Página 404
	{
		path: '*',
		element: lazy(async () => await import('../pages/NotFound')),
	},
];

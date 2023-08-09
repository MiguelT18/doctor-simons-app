import { lazy, Fragment, Suspense } from 'react';
import { Route, Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

export default function renderRoutes(routes) {
	return routes.map((route) => {
		const Component = route.element || Fragment;
		const Layout = route.layout || Fragment;
		return (
			<Route
				key={route.path}
				path={route.path}
				element={
					<Suspense
						fallback={
							<h1 className='text-center text-lg'>Loading..</h1>
						}>
						<ScrollToTop>
							<Layout>
								{route.children ? <Outlet /> : <Component />}
							</Layout>
						</ScrollToTop>
					</Suspense>
				}>
				{route.children && renderRoutes(route.children)}
			</Route>
		);
	});
}

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
			//? Consideraciones
			{
				path: 'consideraciones',
				element: Fragment,
				children: [
					{
						path: '',
						element: lazy(
							async () =>
								await import(
									'../pages/consulta_online/Consideraciones'
								)
						),
					},
					//? Paso #1:
					{
						path: 'paso1',
						element: lazy(
							async () =>
								await import(
									'../pages/consulta_online/form/Paso1/Paso1'
								)
						),
					},
					//? Paso #2:
					{
						path: 'paso2',
						element: lazy(
							async () =>
								await import(
									'../pages/consulta_online/form/Paso2/Paso2'
								)
						),
					},
					//? Paso #3:
					{
						path: 'paso3',
						element: lazy(
							async () =>
								await import(
									'../pages/consulta_online/form/Paso3/Paso3'
								)
						),
					},
					//? Paso #4:
					{
						path: 'paso4',
						element: lazy(
							async () =>
								await import(
									'../pages/consulta_online/form/Paso4/Paso4'
								)
						),
					},
					//? Paso #5:
					{
						path: 'paso5',
						element: lazy(
							async () =>
								await import(
									'../pages/consulta_online/form/Paso5/Paso5'
								)
						),
					},
					//? Formulario de Pago
					{
						path: 'payment_form',
						element: lazy(
							async () =>
								await import(
									'../pages/consulta_online/PaymentForm'
								)
						),
					},
				],
			},
		],
	},

	// Newsletter
	{
		path: '/newsletter',
		element: Fragment,
		children: [
			{
				path: '',
				element: lazy(
					async () => await import('../pages/newsletter/Newsletter')
				),
			},
			{
				path: 'thankspage_newsletter',
				element: lazy(
					async () =>
						await import('../pages/newsletter/ThanksNewsletterPage')
				),
			},
		],
	},

	// Página 404
	{
		path: '*',
		element: lazy(async () => await import('../pages/404')),
	},
];

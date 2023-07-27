import { Outlet } from 'react-router-dom';
import { DarkButton } from '../components/DarkButton';

function HeaderAppComponent() {
	return (
		<header className='bg-gradient-linear-light dark:bg-gradient-linear-dark'>
			<h1 className='text-white'>Hola soy el Header de esta página</h1>
		</header>
	);
}

function App() {
	return (
		<>
			<HeaderAppComponent />
			<DarkButton />
			<Outlet />
		</>
	);
}

export default App;

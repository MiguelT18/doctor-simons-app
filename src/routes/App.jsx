import { Outlet } from 'react-router-dom';
import { DarkButton } from '../components/DarkButton';
import { Header } from '../components/Homepage/Header';
import { Content } from '../components/Homepage/Content';

function App() {
	return (
		<>
			<Header />
			<Content />
			<DarkButton />
			<Outlet />
		</>
	);
}

export default App;

import { ScrollRestoration } from 'react-router-dom';
import { DarkButton } from '../components/DarkButton';
import { Header } from '../components/Homepage/Header';
import { Content } from '../components/Homepage/Content';
import { Footer } from '../components/Footer';

function App() {
	return (
		<div>
			<Header />
			<Content />
			<Footer />
			<DarkButton />
			<ScrollRestoration />
		</div>
	);
}

export default App;

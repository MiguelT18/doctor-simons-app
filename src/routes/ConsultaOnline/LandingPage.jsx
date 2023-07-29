import { ScrollRestoration } from 'react-router-dom';

import { Header } from '../../components/ConsultaOnline/LandingPage/Header';
import { Content } from '../../components/ConsultaOnline/LandingPage/Content';
import { PrevNavButton } from '../../components/PrevNavButton';
import { DarkButton } from '../../components/DarkButton';

export function LandingPage() {
	return (
		<>
			<Header />
			<Content />
			<PrevNavButton prev='/' />
			<DarkButton />
			<ScrollRestoration />
		</>
	);
}

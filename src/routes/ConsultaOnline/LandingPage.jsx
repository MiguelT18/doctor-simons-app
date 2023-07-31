import { ScrollRestoration } from 'react-router-dom';

import { MainContent } from '../../components/ConsultaOnline/LandingPage/MainContent';
import { PrevNavButton } from '../../components/PrevNavButton';
import { DarkButton } from '../../components/DarkButton';

export function LandingPage() {
	return (
		<>
			<MainContent />
			<PrevNavButton prev='/' />
			<DarkButton />
			<ScrollRestoration />
		</>
	);
}

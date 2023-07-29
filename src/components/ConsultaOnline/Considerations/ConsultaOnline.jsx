import { ScrollRestoration } from 'react-router-dom';

import { Header } from './Header';
import { DarkButton } from '../../DarkButton';
import { PrevNavButton } from '../../PrevNavButton';
import { Considerations } from './Considerations';
import { Footer } from '../../Footer';

export function ConsultaOnline() {
	return (
		<>
			<Header />
			<Considerations />
			<Footer />
			<DarkButton />
			<PrevNavButton prev='/consulta_online' />
			<ScrollRestoration />
		</>
	);
}

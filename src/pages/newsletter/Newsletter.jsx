import { PrevNavButton } from '../../components/PrevNavButton';
import { DarkButton } from '../../components/DarkButton';

import { Header } from '../../components/Newsletter/Header/Header';
import { Content } from '../../components/Newsletter/Content';
import { Footer } from '../../components/Footer';

export default function Newsletter() {
	return (
		<>
			<Header />
			<Content />
			<Footer />
			<DarkButton />
			<PrevNavButton />
		</>
	);
}

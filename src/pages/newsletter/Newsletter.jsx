import { PrevNavButton } from '../../components/PrevNavButton';
import { DarkButton } from '../../components/DarkButton';

import { Header } from '../../components/Newsletter/MainPage/Header/Header';
import { Content } from '../../components/Newsletter/MainPage/Content';
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

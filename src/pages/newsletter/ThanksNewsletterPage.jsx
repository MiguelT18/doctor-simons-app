// Componentes
import { MainContent } from '../../components/Newsletter/ThanksPage/MainContent';
import { PrevNavButton } from '../../components/PrevNavButton';
import { DarkButton } from '../../components/DarkButton';

const ThanksNewsletterPage = () => {
	return (
		<>
			<MainContent />

			<PrevNavButton prev='/' />
			<DarkButton />
		</>
	);
};

export default ThanksNewsletterPage;

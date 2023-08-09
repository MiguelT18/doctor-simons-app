import { MainContent } from '../../components/ConsultaOnline/LandingPage/MainContent';
import { PrevNavButton } from '../../components/PrevNavButton';
import { DarkButton } from '../../components/DarkButton';

export default function ConsultaEnLinea() {
	return (
		<>
			<MainContent />
			<PrevNavButton prev='/' />
			<DarkButton />
		</>
	);
}

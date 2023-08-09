import { Header } from '../../components/ConsultaOnline/Considerations/Header';
import { DarkButton } from '../../components/DarkButton';
import { PrevNavButton } from '../../components/PrevNavButton';
import { Considerations } from '../../components/ConsultaOnline/Considerations/Considerations';
import { Footer } from '../../components/Footer';

export default function ConsultaOnline() {
	return (
		<>
			<Header />
			<Considerations />
			<Footer />
			<DarkButton />
			<PrevNavButton prev='/consulta_online' />
		</>
	);
}

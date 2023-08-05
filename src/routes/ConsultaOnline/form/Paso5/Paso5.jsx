import { ContarPasos } from '../../../../components/ConsultaOnline/ContarPasos';
import { PrevNavButton } from '../../../../components/PrevNavButton';

export function Paso5() {
	return (
		<div>
			<ContarPasos />
			<PrevNavButton prev='/consulta_online/consideraciones' />
		</div>
	);
}

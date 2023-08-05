import { ContarPasos } from '../../../../components/ConsultaOnline/ContarPasos';
import { PrevNavButton } from '../../../../components/PrevNavButton';
import { NextNavButton } from '../../../../components/NextNavButton';

export function Paso1() {
	return (
		<div>
			<ContarPasos />
			<NextNavButton
				text='Ir al paso 2'
				next='/consulta_online/consideraciones/formulario/paso2'
			/>
			<PrevNavButton prev='/consulta_online/consideraciones' />
		</div>
	);
}

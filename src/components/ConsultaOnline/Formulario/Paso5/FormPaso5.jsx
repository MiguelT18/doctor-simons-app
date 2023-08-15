import { UploadPicture } from '../UploadPicture';
import VistaPicado from '../../../../assets/images/consultaOnline/vista-en-picado.webp';

const FormPaso5 = () => {
	return (
		<>
			<UploadPicture
				title='Foto Vista en Picado'
				description='Debes mantenerte con la vista hacia arriba en donde se aprecie tu rostro.'
				imgSrc={VistaPicado}
			/>
		</>
	);
};

export default FormPaso5;

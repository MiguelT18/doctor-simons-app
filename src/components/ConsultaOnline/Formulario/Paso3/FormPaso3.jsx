import { UploadPicture } from '../UploadPicture';
import FotoFrontal from '../../../../assets/images/consultaOnline/form/foto-frontal.webp';

const FormPaso3 = () => {
	return (
		<>
			<UploadPicture
				title='Foto Frontal'
				description='Debes mantenerte de frente donde se aprecie tu rostro.'
				imgSrc={FotoFrontal}
				nextStep='/consulta_online/consideraciones/paso4'
			/>
		</>
	);
};

export default FormPaso3;

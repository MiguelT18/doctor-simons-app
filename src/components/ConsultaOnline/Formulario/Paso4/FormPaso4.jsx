import { UploadPicture } from '../UploadPicture';
import FotoPerfil from '../../../../assets/images/consultaOnline/foto-perfil.webp';

const FormPaso4 = () => {
	return (
		<>
			<UploadPicture
				title='Foto de Perfil'
				description='Debes mantenerte de perfil donde se aprecie tu rostro.'
				nextStep='/consulta_online/consideraciones/paso5'
				imgSrc={FotoPerfil}
			/>
		</>
	);
};

export default FormPaso4;

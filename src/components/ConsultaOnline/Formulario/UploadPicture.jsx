import PropTypes from 'prop-types';
import { NextNavButton } from '../../NextNavButton';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UploadPicture = (props) => {
	const { title, description, imgSrc, nextStep, nextButtonText } = props;

	return (
		<form className='grid justify-items-center max-w-[900px] mx-auto px-5'>
			<h2 className='text-md text-center text-white font-bold font-my-montserrat uppercase'>
				{title}
			</h2>
			<p className='text-sm text-center text-white font-my-sans pb-5'>
				{description}
			</p>

			<p className='text-sm text-white text-center font-my-sans pb-4'>
				Haz click para subir tu foto: ⬇️
			</p>
			<div className='relative'>
				<FontAwesomeIcon
					icon={faUpload}
					className='absolute z-20 inset-0 m-auto text-[40px] text-white'
					bounce
				/>
				<img
					className='w-full max-w-[300px] h-full brightness-50'
					src={imgSrc}
					alt='Upload a picture of your face'
				/>
			</div>

			<div className='flex justify-center mt-8'>
				<NextNavButton
					text={nextButtonText}
					next={nextStep}
					icon={faHandPointRight}
				/>
			</div>
		</form>
	);
};

UploadPicture.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	nextStep: PropTypes.string,
	nextButtonText: PropTypes.string,
	imgSrc: PropTypes.object,
};

UploadPicture.defaultProps = {
	title: 'Untitled picture',
	description: 'Here goes the description of this form.',
	nextButtonText: 'Siguiente paso',
};

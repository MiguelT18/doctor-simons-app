import PropTypes from 'prop-types';
import { useState } from 'react';
import { NextNavButton } from '../../NextNavButton';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

export const UploadPicture = (props) => {
	const { title, description, nextStep, nextButtonText } = props;

	const [selectedImage, setSelectedImage] = useState(null);
	const [showIcon, setShowIcon] = useState(true);
	const [changeImage, setChangeImage] = useState(false);

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setSelectedImage(reader.result);
				setShowIcon(false);
				setChangeImage(true);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<form className='grid justify-items-center max-w-[900px] mx-auto px-5 '>
			<h2 className='text-md text-center text-white font-bold font-my-montserrat uppercase'>
				{title}
			</h2>
			<p className='text-sm text-center text-white font-my-sans pb-5'>
				{description}
			</p>

			<p className='text-sm text-white text-center font-my-sans pb-4'>
				Haz click para subir tu foto: ⬇️
			</p>
			<div
				onClick={() => document.getElementById('imageInput').click()}
				className='relative cursor-pointer'>
				<input
					id='imageInput'
					type='file'
					accept='image/*'
					className='hidden'
					onChange={handleImageChange}
				/>
				{showIcon && (
					<FontAwesomeIcon
						icon={faUpload}
						className='absolute z-20 inset-0 m-auto text-[40px] text-white'
						bounce
					/>
				)}
				<img
					className={`w-full max-w-[235px] h-fit max-h-[295px] ${
						selectedImage ? '' : 'brightness-50'
					}`}
					src={selectedImage || props.imgSrc}
					alt='Upload a picture of your face'
				/>
			</div>
			{changeImage ? (
				<p
					onClick={() =>
						document.getElementById('imageInput').click()
					}
					className='text-sm text-center font-my-sans pt-4 underline cursor-pointer'>
					Subir otra imagen
					<FontAwesomeIcon
						className='ml-2'
						icon={faRotateRight}
					/>
				</p>
			) : (
				''
			)}

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
	imgSrc: PropTypes.string,
};

UploadPicture.defaultProps = {
	title: 'Untitled picture',
	description: 'Here goes the description of this form.',
	nextButtonText: 'Siguiente paso',
};

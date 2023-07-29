import PropTypes from 'prop-types';

export function ConsiderationsCard(props) {
	const { imgSrc, title, text, customConsiderationsCard, customImgClass } =
		props;

	return (
		<div
			className={`${customConsiderationsCard} max-w-[340px] flex flex-col items-center text-center`}>
			<img
				className={`${customImgClass} w-[80px]`}
				src={imgSrc}
				alt=''
			/>
			<h1 className='text-md uppercase pb-1'>{title}</h1>
			<p className='text-sm font-my-sans'>{text}</p>
		</div>
	);
}

ConsiderationsCard.defaultProps = {
	text: 'Undefined',
	customConsiderationsCard: '',
	customImgClass: '',
};

ConsiderationsCard.propTypes = {
	imgSrc: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	customConsiderationsCard: PropTypes.string,
	customImgClass: PropTypes.string,
};

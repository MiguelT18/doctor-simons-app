import PropTypes from 'prop-types';

export function CardContent({ title, text, imgSrc, cardContainer }) {
	return (
		<div
			className={`${cardContainer} text-white w-full max-w-[320px] rounded-md`}>
			<div>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
			<img
				src={imgSrc}
				alt='Cristian Simons Card'
			/>
		</div>
	);
}

CardContent.defaultProps = {
	title: 'Undefined card title',
	text: 'Undefined card text',
};

CardContent.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	imgSrc: PropTypes.string,
	cardContainer: PropTypes.string,
};

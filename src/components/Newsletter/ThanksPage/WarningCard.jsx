import PropTypes from 'prop-types';

export const WarningCard = ({ imgIcon, title, description }) => {
	return (
		<article>
			<img
				src={imgIcon}
				alt='Heads Up!'
			/>
			<h1>{title}</h1>
			<p>{description}</p>
		</article>
	);
};

WarningCard.propTypes = {
	imgIcon: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
};

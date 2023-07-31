import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function ContentCard(props) {
	const {
		title,
		text,
		imgSrc,
		cardContainer,
		LinkTo,
		LinkClass,
		containerClass,
		imgClass,
		titleClass,
		textClass,
	} = props;

	return (
		<div
			className={`${cardContainer} text-white p-3 shadow-xl w-full max-w-[340px] h-32 flex items-center relative rounded-lg sm:rounded-xl z-10 animate-float`}>
			<Link
				to={LinkTo}
				className={`${LinkClass} flex items-center w-full`}>
				<div
					className={`${containerClass} flex flex-col items-stretch justify-evenly h-full w-[70%]`}>
					<h1
						className={`${titleClass} text-md mb-1 uppercase font-my-montserrat font-bold`}>
						{title}
					</h1>
					<p className={`${textClass} text-sm font-my-sans`}>
						{text}
					</p>
				</div>
				<img
					src={imgSrc}
					alt='Cristian Simons Card'
					className={`${imgClass} absolute -z-10`}
				/>
			</Link>
		</div>
	);
}

ContentCard.defaultProps = {
	title: 'Undefined card title',
	text: 'Undefined card text',
};

ContentCard.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	LinkTo: PropTypes.string,
	LinkClass: PropTypes.string,
	cardContainer: PropTypes.string,
	imgSrc: PropTypes.string,
	imgClass: PropTypes.string,
	titleClass: PropTypes.string,
	textClass: PropTypes.string,
	containerClass: PropTypes.string,
};

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function CardContent(props) {
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
			className={`${cardContainer} text-white w-full max-w-[400px] h-28 relative flex rounded-md sm:rounded-xl p-3 z-10`}>
			<Link
				to={LinkTo}
				className={`${LinkClass} flex w-full`}>
				<div
					className={`${containerClass} w-[75%] h-fit flex flex-col self-center gap-1`}>
					<h1
						className={`${titleClass} text-md uppercase font-my-montserrat font-bold leading-6`}>
						{title}
					</h1>
					<p
						className={`${textClass} text-sm font-my-sans font-regular leading-5`}>
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

CardContent.defaultProps = {
	title: 'Undefined card title',
	text: 'Undefined card text',
};

CardContent.propTypes = {
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

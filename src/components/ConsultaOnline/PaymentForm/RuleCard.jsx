import PropTypes from 'prop-types';

export const RuleCard = ({ imgSrc, instruction }) => {
	return (
		<article className='relative w-full max-w-[400px] pr-5 pl-14 py-5 mx-auto bg-blue-900 text-white rounded-lg text-sm'>
			<img
				className='absolute -left-5 -top-5'
				src={imgSrc}
				alt='Read the instruction'
			/>
			<p className='w-full'>{instruction}</p>
		</article>
	);
};

RuleCard.propTypes = {
	imgSrc: PropTypes.string,
	instruction: PropTypes.string,
};

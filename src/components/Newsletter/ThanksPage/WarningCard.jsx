import PropTypes from 'prop-types';
import WarningIcon from '../../../assets/images/warning-icon.png';

export const WarningCard = ({ title, description }) => {
	return (
		<article className='bg-gradient-linear-light dark:bg-gradient-linear-dark max-w-[450px] relative rounded-md text-center text-white px-4 py-6'>
			<img
				className='w-14 h-12 absolute -right-4 -top-5 animate-float'
				src={WarningIcon}
				alt='Heads Up!'
			/>
			<h1 className='text-md font-my-sans font-bold pb-2'>{title}</h1>
			<p className='text-sm font-my-sans'>{description}</p>
		</article>
	);
};

WarningCard.defaultProps = {
	title: 'Default Title',
	description: 'Default Description',
};

WarningCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

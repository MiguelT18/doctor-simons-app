import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function NextNavButton({ next, text, icon, iconSize }) {
	return (
		<Link
			className='bg-main-red text-white w-fit h-fit text-center text-buttonSize italic font-bold py-2 px-5 rounded-md hover:scale-110 transition-transform duration-100 linear'
			to={next}>
			{text}
			{icon && (
				<FontAwesomeIcon
					className='pl-3'
					icon={icon}
					size={iconSize}
				/>
			)}
		</Link>
	);
}

NextNavButton.defaultProps = {
	next: '/',
	text: 'Continuar',
	icon: null,
	iconSize: 'lg',
};

NextNavButton.propTypes = {
	next: PropTypes.string,
	text: PropTypes.string,
	icon: PropTypes.object,
	iconSize: PropTypes.string,
};

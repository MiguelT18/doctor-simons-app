import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function NextNavButton({ next, text, icon }) {
	return (
		<Link
			className='bg-main-red text-white text-sm italic font-bold py-2 px-3 mx-auto rounded-md hover:scale-110 transition-transform duration-100 linear'
			to={next}>
			{text}
			{icon && (
				<FontAwesomeIcon
					className='pl-3'
					icon={icon}
				/>
			)}
		</Link>
	);
}

NextNavButton.defaultProps = {
	next: '/',
	text: 'Continuar',
	icon: null,
};

NextNavButton.propTypes = {
	next: PropTypes.string,
	text: PropTypes.string,
	icon: PropTypes.object,
};

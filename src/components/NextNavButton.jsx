import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function NextNavButton({ next }) {
	return (
		<Link
			className='bg-main-red text-white text-sm italic font-bold py-2 px-3 rounded-md'
			to={next}>
			Continuar
		</Link>
	);
}

NextNavButton.defaultProps = {
	next: '/',
};

NextNavButton.propTypes = {
	next: PropTypes.string,
};

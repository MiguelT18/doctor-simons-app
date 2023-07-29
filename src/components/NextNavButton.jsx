import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function NextNavButton({ linkTo }) {
	return (
		<Link
			className='bg-main-red text-white text-sm py-2 px-3 rounded-md'
			to={linkTo}>
			Continuar
		</Link>
	);
}

NextNavButton.defaultProps = {
	linkTo: '/',
};

NextNavButton.propTypes = {
	linkTo: PropTypes.string,
};

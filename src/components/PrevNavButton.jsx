import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';

export function PrevNavButton({ prev }) {
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		const position = window.scrollY;
		const specificPosition = 500;
		if (position > specificPosition) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.addEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Link
			to={prev}
			className={`right-0 top-0 m-4 fixed z-40 ${
				isScrolled ? '-bottom-[90%]' : 'top-0'
			}`}>
			<FontAwesomeIcon
				className='w-10 h-full text-main-red fa-bounce fa-beat-fade'
				style={{ '--fa-animation-duration': '3s' }}
				icon={faCircleLeft}
			/>
		</Link>
	);
}

PrevNavButton.defaultProps = {
	prev: '/',
};

PrevNavButton.propTypes = {
	prev: PropTypes.string,
};

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProcesoCardComponent({ title, description, icon }) {
	return (
		<div className='bg-white text-dark dark:bg-gray-900 dark:text-white w-fit max-w-[220px] mx-auto flex flex-col justify-stretch items-start gap-4 p-5'>
			<FontAwesomeIcon
				className='text-4xl text-black dark:text-white'
				icon={icon}
			/>
			<div className='flex flex-col gap-2'>
				<h1 className='w-fit text-md font-bold font-my-montserrat uppercase'>
					{title}
				</h1>
				<p className='w-fit max-w-[260px] text-sm'>{description}</p>
			</div>
		</div>
	);
}

ProcesoCardComponent.defaultProps = {
	title: 'Undefined Card',
	description: 'Undefined description',
	icon: null,
};

ProcesoCardComponent.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	icon: PropTypes.object,
};

export const ProcesoCard = React.memo(ProcesoCardComponent);

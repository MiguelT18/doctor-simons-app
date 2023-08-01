import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ProcesoCard({ title, description, icon }) {
	return (
		<div className='bg-white text-dark dark:bg-gray-900 dark:text-white w-full max-w-[280px] h-50 flex flex-col items-start gap-3  p-5'>
			<FontAwesomeIcon
				className='text-4xl text-black dark:text-white'
				icon={icon}
			/>
			<div className='flex flex-col gap-2'>
				<h1 className='text-md font-bold font-my-montserrat uppercase'>
					{title}
				</h1>
				<p className='text-sm'>{description}</p>
			</div>
		</div>
	);
}

ProcesoCard.defaultProps = {
	title: 'Undefined Card',
	description: 'Undefined description',
	icon: null,
};

ProcesoCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	icon: PropTypes.object,
};

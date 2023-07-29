import PropTypes from 'prop-types';

export function MainInfoContent({ title, list }) {
	return (
		<div className='text-white flex flex-col gap-6 p-6 max-lg:text-center'>
			<h1 className='text-lg uppercase font-my-montserrat font-bold'>
				{title}
			</h1>
			<ul className='text-sm flex flex-col gap-5'>
				{list.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}

MainInfoContent.propTypes = {
	title: PropTypes.string,
	list: PropTypes.arrayOf(PropTypes.string),
};

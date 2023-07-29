import PropTypes from 'prop-types';

export function PaymentCard({ title, price, description }) {
	return (
		<div className='bg-white dark:bg-gray-800 text-dark dark:text-white w-full h-40 flex flex-col justify-around gap-1 items-stretch p-3 max-w-[350px] text-center'>
			<h2 className='text-md font-my-montserrat font-[900] uppercase'>
				{title}
			</h2>
			<h1 className='text-lg font-[600]'>{price}</h1>
			<p className='text-sm w-full'>{description}</p>
		</div>
	);
}

PaymentCard.defaultProps = {
	title: 'Payment Card',
	price: '$ --.--',
	description: 'Default description',
};

PaymentCard.propTypes = {
	title: PropTypes.string,
	price: PropTypes.string,
	description: PropTypes.string,
};

import PropTypes from 'prop-types';

export function TestimonioCard({ user }) {
	const { picture, name, login, testimonio } = user;

	if (!user) {
		return <h1 className='text-md text-center'>Loading...</h1>;
	}

	return (
		<article className='w-full max-w-[520px] mx-auto relative bg-gradient-linear-light text-white dark:bg-gradient-linear-dark p-4 pt-10 mt-10 rounded-xl cursor-pointer'>
			<img
				src={picture.medium}
				alt={name.first}
				className='w-15 border-white border-2 -top-10 left-1/2 transform -translate-x-[50%] rounded-full absolute'
			/>
			<div className='flex flex-col gap-2'>
				<p className='text-sm text-center py-2'>{testimonio}</p>
				<h2 className='text-sm text-center uppercase font-bold font-my-montserrat'>
					{name.first} {name.last}
				</h2>
				<h3 className='text-sm text-center font-bold text-yellow-500'>
					@{login.username}
				</h3>
			</div>
		</article>
	);
}

TestimonioCard.propTypes = {
	user: PropTypes.shape({
		picture: PropTypes.shape({
			medium: PropTypes.string.isRequired,
		}).isRequired,
		name: PropTypes.shape({
			first: PropTypes.string.isRequired,
			last: PropTypes.string.isRequired,
		}).isRequired,
		login: PropTypes.shape({
			username: PropTypes.string.isRequired,
		}).isRequired,
		testimonio: PropTypes.string.isRequired,
	}),
};

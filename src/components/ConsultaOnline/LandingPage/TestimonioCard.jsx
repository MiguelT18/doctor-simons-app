import { useEffect, useState } from 'react';

export function TestimonioCard() {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await Promise.race([
					fetch('https://randomuser.me/api/'),
					new Promise((_, reject) =>
						setTimeout(
							() => reject(new Error('Request Timed out')),
							5000
						)
					),
				]);
				const data = await response.json();
				const [user] = data.results;
				setUser(user);
			} catch (error) {
				setError(error);
			}
		};

		fetchData();
	}, []);

	if (error) {
		return <h1>Error: {error.message}</h1>;
	}

	if (!user) {
		return <h1 className='text-md text-center'>Loading...</h1>;
	}

	const { picture, name, login } = user;

	return (
		<div className='w-full max-w-[520px] mx-auto h-full relative bg-gradient-linear-light text-white dark:bg-gradient-linear-dark p-4 pt-12 mt-12 rounded-xl cursor-pointer'>
			<img
				src={picture.medium}
				alt={name.first}
				className='w-15 border-white border-2 -top-10 left-1/2 transform -translate-x-[50%] rounded-full absolute'
			/>
			<p className='text-sm text-center'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
				molestiae corporis at dolor, dolorem ea? Saepe optio, eos
				reprehenderit nobis possimus dolor, aliquam perferendis quia
				ullam ipsum vero incidunt accusamus.
			</p>
			<h2 className='text-sm text-center uppercase font-bold font-my-montserrat'>
				{name.first} {name.last}
			</h2>
			<h3 className='text-sm text-center font-bold text-yellow-500'>
				@{login.username}
			</h3>
		</div>
	);
}

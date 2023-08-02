import { useEffect, useState } from 'react';

export function TestimonioCard() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch('https://randomuser.me/api/')
			.then((response) => response.json)
			.then((data) => setUser(data.results[0]));
	}, []);

	if (!user) {
		return <h1 className='text-md text-center'>Loading...</h1>;
	}

	return (
		<div className='bg-gradient-linear-light text-white dark:bg-gradient-linear-dark mx-5 p-4 rounded-xl'>
			<img
				src={user.picture.thumbnail}
				alt={user.name.first}
			/>
			<p className='text-sm text-center'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
				molestiae corporis at dolor, dolorem ea? Saepe optio, eos
				reprehenderit nobis possimus dolor, aliquam perferendis quia
				ullam ipsum vero incidunt accusamus.
			</p>
			<h2 className='text-sm text-center uppercase font-bold font-my-montserrat'>
				{user.name.first} {user.name.last}
			</h2>
			<h3 className='text-sm text-center font-bold text-yellow-500'>
				@{user.login.username}
			</h3>
		</div>
	);
}

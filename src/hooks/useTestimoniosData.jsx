import { useState, useEffect } from 'react';
import consultaTestimonios from '../json/testimonios_consulta.json';
import newsletterTestimonios from '../json/testimonios_newsletter.json';

const useTestimoniosData = (type) => {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://randomuser.me/api/?results=6'
				);
				const data = await response.json();
				const testimonios =
					type === 'newsletter'
						? newsletterTestimonios
						: consultaTestimonios;
				const usersWithTestimonios = data.results.map((user, index) => {
					return {
						...user,
						testimonio: testimonios.testimonios[index].comentario,
					};
				});
				setUsers(usersWithTestimonios);
			} catch (error) {
				setError(error);
			}
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [type]);

	return { users, error };
};

export default useTestimoniosData;

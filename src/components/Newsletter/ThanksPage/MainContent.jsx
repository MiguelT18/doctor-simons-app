// Componentes
import { WarningCard } from './WarningCard';

export const MainContent = () => {
	const WarningCardContent = [
		{
			title: 'Atento a tu correo',
			description:
				'Asegúrate de mantener tu correo electrónico actualizado para que no te pierdas nuestras próximas comunicaciones. ¡Mantente atento a tu correo y descubre todo lo que necesitas saber sobre rinoplastía y rinología con el equipo del Dr. Cristian Simons!',
		},
		{
			title: '¿No estás recibiendo nuestras últimas novedades?',
			description:
				'Buscando las últimas novedades sobre rinoplastía y rinología con el equipo del Dr. Cristian Simons en Tarija, Bolivia? Verifica tu bandeja de promociones y mueve nuestras comunicaciones a la bandeja principal para no perderte ningún detalle. ¡Estamos emocionados de compartir contigo nuestras últimas noticias y consejos! ',
		},
	];

	return (
		<>
			<header className='w-full py-6 px-5 text-center text-lg text-white bg-blue-light dark:bg-blue-dark font-my-montserrat font-bold uppercase'>
				<h1 className='max-w-[900px] mx-auto'>
					¡Te damos la bienvenida a nuestro boletín informativo sobre
					rinoplastía!
				</h1>
			</header>

			<main>
				<section>
					<h1 className='text-center text-lg py-6 text-blue-light dark:text-white font-my-montserrat font-bold uppercase'>
						Ten en cuenta lo siguiente:
					</h1>
					<div>
						<WarningCard />
						<WarningCard />
					</div>
				</section>
			</main>
		</>
	);
};

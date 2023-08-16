// Imágenes
import ConsultaOnline from '/src/assets/images/consulta-en-linea-card.webp';

// Componentes
import { WarningCard } from './WarningCard';
import { ContentCard } from '../../Homepage/ContentCard';
import { SocialMedia } from '../../ConsultaOnline/LandingPage/SocialMedia/SocialMedia';
import { Footer } from '../../Footer';

export const MainContent = () => {
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
					<div className='flex justify-evenly flex-wrap gap-16 pt-5 mx-6'>
						<WarningCard
							title='Atento a tu correo'
							description='Asegúrate de mantener tu correo electrónico actualizado para que no te pierdas nuestras próximas comunicaciones. ¡Mantente atento a tu correo y descubre todo lo que necesitas saber sobre rinoplastía y rinología con el equipo del Dr. Cristian Simons!'
						/>
						<WarningCard
							title='¿No estás recibiendo nuestras últimas novedades?'
							description='Buscando las últimas novedades sobre rinoplastía y rinología con el equipo del Dr. Cristian Simons en Tarija, Bolivia? Verifica tu bandeja de promociones y mueve nuestras comunicaciones a la bandeja principal para no perderte ningún detalle. ¡Estamos emocionados de compartir contigo nuestras últimas noticias y consejos!'
						/>
					</div>
				</section>

				<section>
					<h1 className='text-center text-lg pb-6 pt-8 text-blue-light dark:text-white font-my-montserrat font-bold uppercase'>
						Regístrate en la Consulta en Línea
					</h1>
					<div className='flex justify-center pt-14 pb-10'>
						<ContentCard
							title='Consulta en Línea'
							text='Atención médica en tiempo real por Internet.'
							LinkTo='/consulta_online'
							cardContainer='bg-gradient-linear-light dark:bg-gradient-linear-dark'
							imgSrc={ConsultaOnline}
							imgClass='-right-2 bottom-0 w-36'
						/>
					</div>

					<SocialMedia />
				</section>
			</main>

			<Footer />
		</>
	);
};

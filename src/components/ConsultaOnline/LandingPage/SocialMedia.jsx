import FacebookLogo from '../../../assets/images/facebook-logo.png';
import InstagramLogo from '../../../assets/images/instagram-logo.png';
import TiktokLogo from '../../../assets/images/tiktok-logo.png';

export function SocialMedia() {
	const logos = [
		{ logo: FacebookLogo, name: 'facebook' },
		{ logo: InstagramLogo, name: 'instagram' },
		{ logo: TiktokLogo, name: 'tiktok' },
	];
	const socialMediaTo = {
		facebook: 'https://www.facebook.com/drcristiansimons',
		instagram: 'https://www.instagram.com/drsimonscristian/',
		tiktok: 'https://www.tiktok.com/@drsimonscristian',
	};

	return (
		<div className='px-5 flex flex-col gap-5 pb-8'>
			<h1 className='text-center text-lg text-blue-light dark:text-white font-my-montserrat font-bold uppercase'>
				Sígueme en mis Redes Sociales
			</h1>
			<div className='flex justify-center gap-10'>
				{logos.map((item, index) => (
					<a
						className='h-[50px]'
						key={index}
						href={socialMediaTo[item.name]}
						target='_blank'
						rel='noopener noreferrer'>
						<img
							className='w-full h-full'
							src={item.logo}
							alt='Social media logo'
						/>
					</a>
				))}
			</div>
		</div>
	);
}

export function HeroVideo() {
	return (
		<div className='px-4 flex flex-col gap-6'>
			<div
				className='relative max-w-[1080px]'
				style={{ paddingBottom: '56.25%' }}>
				<iframe
					className='absolute inset-0 w-full h-full'
					src='https://www.youtube.com/embed/F1cjxLL1KeQ'
					title='Consulta en línea con el Dr. Cristian Simons: todo lo que necesitas saber'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen></iframe>
			</div>
		</div>
	);
}

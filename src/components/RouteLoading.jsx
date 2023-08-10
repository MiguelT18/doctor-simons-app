import './styles/RouterLoadingIcon.css';

const RouteLoading = () => {
	return (
		<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
			<div className='max-w-[420px] min-w-[280px] bg-gradient-linear-light dark:bg-gradient-linear-dark rounded-lg shadow-lg p-5'>
				<h1 className='text-lg text-center font-my-montserrat mb-4'>
					Cargando...
				</h1>
				<div className='loading w-fit mx-auto'>
					<svg
						width='64px'
						height='48px'>
						<polyline
							points='0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24'
							id='back'></polyline>
						<polyline
							points='0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24'
							id='front'></polyline>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default RouteLoading;

import { DynamicCheckBoxTextarea } from './DynamicCheckBoxTextarea';
import { NextNavButton } from '../../../NextNavButton';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

const FormPaso2 = () => {
	const CheckboxContents = [
		{
			enfermedades: {
				label: '¿Padece de alguna enfermedad?',
				placeholder: 'Indícanos las enfermedades que padeces...',
				id: 'enfermedadTextarea',
			},
		},
		{
			medicamentos: {
				label: '¿Estás tomando algún medicamento?',
				placeholder: 'Indícanos los medicamentos que estás tomando...',
				id: 'medicamentoTextarea',
			},
		},
		{
			cirugiaPrevia: {
				label: '¿Tienes alguna cirugía previa de nariz, ya sea funcional o estética?',
				placeholder:
					'Indícanos hace cuánto tiempo se realizó la cirugía...',
				id: 'cirugiaTextarea',
			},
		},
		{
			biopolimeros: {
				label: '¿Te hiciste colocar biopolímeros (ácido Hialurónico) o hilos tensores?',
				placeholder: 'Indícanos hace cuánto tiempo...',
				id: 'biopolimerosTextarea',
			},
		},
		{
			dificultades: {
				label: '¿Tienes dificultad para respirar por la nariz?',
				placeholder: 'Indícanos en cuál de las 2 fosas nasales...',
				id: 'dificultadTextarea',
			},
		},
	];

	return (
		<form className='mx-auto px-5'>
			<p className='text-center font-my-sans text-sm pb-5'>
				Completa la siguiente información.
				<br />
				Describe brevemente...
			</p>

			<div className='flex flex-col gap-4'>
				{CheckboxContents.map((item, index) => {
					const key = Object.keys(item)[0];
					const checkBoxContent = item[key];
					return (
						<DynamicCheckBoxTextarea
							key={index}
							label={checkBoxContent.label}
							textareaPlaceholder={checkBoxContent.placeholder}
							textareaId={checkBoxContent.id}
						/>
					);
				})}

				<label
					className='text-sm text-center pt-4'
					htmlFor='defectos'>
					¿Qué es lo que más te molesta de tu nariz?
				</label>
				<textarea
					placeholder='Describe brevemente...'
					className='h-20 w-full text-sm text-dark outline-none py-2 px-4 rounded-md resize-none'
					name='defectos'
					id='defectos'></textarea>
			</div>

			<div className='flex justify-center py-8'>
				<NextNavButton
					next='/consulta_online/consideraciones/paso3'
					text='Siguiente paso'
					icon={faHandPointRight}
				/>
			</div>
		</form>
	);
};

export default FormPaso2;

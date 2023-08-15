import { useState } from 'react';
import PropTypes from 'prop-types';

export const DynamicCheckBoxTextarea = ({
	label,
	textareaPlaceholder,
	textareaId,
}) => {
	const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

	const handleCheckboxChange = (event) => {
		setIsCheckboxChecked(event.target.checked);
	};

	return (
		<div className='flex flex-col max-w-[900px]'>
			<div>
				<input
					checked={isCheckboxChecked}
					onChange={handleCheckboxChange}
					id={textareaId}
					className='w-5 h-5'
					type='checkbox'
				/>
				<label
					className='text-sm ml-4'
					htmlFor={textareaId}>
					{label}
				</label>
			</div>
			{isCheckboxChecked && (
				<textarea
					placeholder={textareaPlaceholder}
					id={textareaId}
					className='h-20 text-sm text-dark outline-none py-2 px-4 mt-3 rounded-md resize-none'></textarea>
			)}
		</div>
	);
};

DynamicCheckBoxTextarea.propTypes = {
	label: PropTypes.string,
	textareaPlaceholder: PropTypes.string,
	textareaId: PropTypes.string,
};

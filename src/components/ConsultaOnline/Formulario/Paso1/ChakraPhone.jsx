import { Button, ChakraProvider, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { CountrySelector, usePhoneInput } from 'react-international-phone';

const ChakraPhone = ({ value, onChange }) => {
	const phoneInput = usePhoneInput({
		defaultCountry: 'bo',
		value,
		onChange: (data) => {
			onChange(data.phone);
		},
	});

	return (
		<ChakraProvider>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
				}}>
				<CountrySelector
					selectedCountry={phoneInput.country}
					onSelect={(country) => phoneInput.setCountry(country.iso2)}
					renderButtonWrapper={({ children, rootProps }) => (
						<Button
							{...rootProps}
							background='#fff'
							px='20px'
							mr='8px'>
							{children}
						</Button>
					)}
				/>
				<Input
					border='none'
					background='#fff'
					placeholder='Número de teléfono'
					type='tel'
					color='#222'
					fontSize='clamp(0.75rem, 4.2vw, 1rem)'
					fontFamily='sans-serif'
					value={phoneInput.phone}
					onChange={phoneInput.handlePhoneValueChange}
					width={'full'}
					ref={phoneInput.inputRef}
				/>
			</div>
		</ChakraProvider>
	);
};

ChakraPhone.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default ChakraPhone;

'use client';
import {TextField, Box, useTheme, useMediaQuery} from '@mui/material';
import {ChangeEvent, FC, useEffect, useState} from 'react';

interface StyledInputProps {
	label: string;
	id: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	error?: boolean;
	helperText?: string;
}

const StyledInput: FC<StyledInputProps> = ({
	label,
	id,
	value,
	onChange,
	error = false,
	helperText = '',
}) => {
	const theme = useTheme();
	const [isReady, setIsReady] = useState(false);
	const isMobile = useMediaQuery(theme.breakpoints.down(376));

	useEffect(() => {
		if (theme) setIsReady(true);
	}, [theme]);

	if (!isReady) return null;

	if (isMobile) {
		return (
			<Box sx={{marginBottom: 3, position: 'relative'}}>
				<TextField
					id={id}
					label={label}
					variant="outlined"
					required
					value={value}
					onChange={onChange}
					error={error}
					helperText={helperText}
					sx={{
						width: '326px',
						height: '52px',
						'& .MuiOutlinedInput-root': {
							borderRadius: '8px',
							borderColor: '#eff3ff',
							'& fieldset': {
								borderColor: '#eff3ff',
							},
							'&:hover fieldset': {
								borderColor: '#418eff',
							},
							'&.Mui-focused fieldset': {
								borderColor: '#418eff',
								borderWidth: '1px',
							},
						},
						'& .MuiInputLabel-root': {
							color: '#eff3ff',
							fontSize: '13px',
							fontWeight: 300,
							fontFamily: 'var(--second-family)',
							top: '3px',
						},
						'& .MuiOutlinedInput-input': {
							color: '#eff3ff',
						},
						'& .MuiInputLabel-shrink': {
							transform: 'translate(14px, -10px)',
							fontSize: '12px',
						},

						'& .MuiFormLabel-asterisk': {
							marginLeft: '-1px',
						},
					}}
				/>
			</Box>
		);
	}

	return (
		<Box sx={{marginBottom: 4, position: 'relative'}}>
			<TextField
				id={id}
				label={label}
				variant="outlined"
				required
				value={value}
				onChange={onChange}
				error={error}
				helperText={helperText}
				InputLabelProps={{
					shrink: true,
				}}
				sx={{
					width: '390px',
					height: '60px',
					'& .MuiOutlinedInput-root': {
						borderRadius: '8px',
						borderColor: '#eff3ff',
						'& fieldset': {
							borderColor: '#eff3ff',
							paddingLeft: '26px',
						},
						'&:hover fieldset': {
							borderColor: '#418eff',
						},
						'&.Mui-focused fieldset': {
							borderColor: '#418eff',
							borderWidth: '1px',
						},
					},
					'& .MuiInputLabel-root': {
						color: '#eff3ff',
						fontSize: '18px',
						fontWeight: 300,
						fontFamily: 'var(--font-family)',
					},
					'& .MuiInputLabel-shrink': {
						transform: 'translate(36px, -10px)',
					},
					'& .MuiOutlinedInput-input': {
						padding: '16px 14px',
						color: '#eff3ff',
					},
					'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline legend': {
						padding: '0 10px 0 14px',
					},
					'& .MuiFormLabel-asterisk': {
						marginLeft: '-4px',
					},
				}}
			/>
		</Box>
	);
};

export default StyledInput;

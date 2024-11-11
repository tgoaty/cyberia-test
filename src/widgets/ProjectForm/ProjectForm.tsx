'use client';
import {Formik, Form, FormikHelpers} from 'formik';
import {Checkbox, FormControlLabel, Snackbar, Alert, useMediaQuery, useTheme} from '@mui/material';
import {FC, useState} from 'react';
import styles from './ProjectForm.module.css';
import StyledInput from '@/shared/ui/StyledInput/StyledInput';
import LargeStyledInput from '@/shared/ui/LargeStyledInput/LargeStyledInput';
import Image from 'next/image';
import {submitFeedback} from './api/feedbackService';
import {FormValues, ServerValidationErrors} from '@/shared/types/form-types';
import {AxiosError} from 'axios';
import {validationSchema} from './utils/validadtionScheme';

const ProjectForm: FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down(376));

	const [openSnackbar, setOpenSnackbar] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');
	const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

	const handleSubmit = async (
		values: FormValues,
		{setSubmitting, setErrors, resetForm}: FormikHelpers<FormValues>,
	) => {
		try {
			await submitFeedback(values);

			setSnackbarMessage('Форма успешно отправлена!');
			setSnackbarSeverity('success');
			setOpenSnackbar(true);

			resetForm();
		} catch (error) {
			const axiosError = error as AxiosError<{
				errors: ServerValidationErrors;
			}>;

			if (axiosError.response && axiosError.response.status === 422) {
				const serverErrors = axiosError.response.data.errors;
				setErrors(serverErrors);
			} else {
				setSnackbarMessage('Произошла ошибка. Пожалуйста, попробуйте снова.');
				setSnackbarSeverity('error');
				setOpenSnackbar(true);
			}
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					email: '',
					phone: '',
					message: '',
					consent: isMobile,
				}}
				validationSchema={validationSchema}
				validateOnChange={true}
				validateOnBlur={true}
				onSubmit={handleSubmit}
			>
				{({values, errors, touched, handleChange, handleSubmit}) => (
					<Form className={styles.form} onSubmit={handleSubmit}>
						<div className={styles['form--header']}>
							<Image
								width={76}
								height={70}
								src="/mailbox.svg"
								alt="mailbox"
								className={styles.logo}
							/>
							<h2 className={styles.title}>
								Расскажите
								<br /> о вашем проекте:
							</h2>
						</div>
						<div className={styles['input--wrapper']}>
							<StyledInput
								label="Ваше имя"
								id="name"
								value={values.name}
								onChange={handleChange}
								error={!!(touched.name && errors.name)}
								helperText={touched.name && errors.name ? errors.name : undefined}
							/>
							<StyledInput
								label="Email"
								id="email"
								value={values.email}
								onChange={handleChange}
								error={!!(touched.email && errors.email)}
								helperText={touched.email && errors.email ? errors.email : undefined}
							/>
							<StyledInput
								label="Телефон"
								id="phone"
								value={values.phone}
								onChange={handleChange}
								error={!!(touched.phone && errors.phone)}
								helperText={touched.phone && errors.phone ? errors.phone : undefined}
							/>
						</div>

						<LargeStyledInput
							label="Сообщение"
							id="message"
							value={values.message}
							onChange={handleChange}
							error={!!(touched.message && errors.message)}
							helperText={touched.message && errors.message ? errors.message : undefined}
						/>

						{!isMobile && (
							<div className={styles['checkbox--field']}>
								<FormControlLabel
									control={
										<Checkbox
											sx={{
												color: '#eff3ff',
												'& .MuiSvgIcon-root': {
													fontSize: '25px',
													borderWidth: '1px',
												},
											}}
											name="consent"
											checked={values.consent}
											onChange={handleChange}
										/>
									}
									label="Согласие на обработку персональных данных"
									sx={{
										color: '#eff3ff',
										fontWeight: 300,
										fontFamily: 'var(--font-family), sans-serif',
									}}
								/>
								{touched.consent && errors.consent && (
									<div className={styles['checkbox--error']}>{errors.consent}</div>
								)}
							</div>
						)}

						<div className={styles['button-wrapper']}>
							<button type="submit" className={styles.button}>
								Обсудить проект
							</button>
						</div>

						{isMobile && (
							<div className={styles['checkbox--field']}>
								Нажимая “Отправить”, Вы даете согласие на обработку персональных данных
							</div>
						)}
					</Form>
				)}
			</Formik>

			<Snackbar
				open={openSnackbar}
				autoHideDuration={6000}
				onClose={() => setOpenSnackbar(false)}
				anchorOrigin={{vertical: 'top', horizontal: 'center'}}
			>
				<Alert
					onClose={() => setOpenSnackbar(false)}
					severity={snackbarSeverity}
					sx={{width: '100%'}}
				>
					{snackbarMessage}
				</Alert>
			</Snackbar>
		</>
	);
};

export default ProjectForm;

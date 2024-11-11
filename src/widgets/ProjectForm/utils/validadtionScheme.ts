import * as Yup from 'yup';

export const validationSchema = Yup.object({
	name: Yup.string().required('Поле обязательно для заполнения'),
	email: Yup.string().email('Неверный формат email').required('Поле обязательно для заполнения'),
	phone: Yup.string()
		.matches(/^\+?[0-9]{10,12}$/, 'Введите корректный номер телефона')
		.required('Поле обязательно для заполнения'),
	message: Yup.string().required('Поле обязательно для заполнения'),
	consent: Yup.boolean().oneOf([true], 'Необходимо согласие на обработку данных'),
});

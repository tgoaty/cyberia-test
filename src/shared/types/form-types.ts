export interface FormValues {
	name: string;
	email: string;
	phone: string;
	message: string;
	consent: boolean;
}

export interface ServerValidationErrors {
	[field: string]: string;
}

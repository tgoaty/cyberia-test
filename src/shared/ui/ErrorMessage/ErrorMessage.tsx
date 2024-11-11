import React from 'react';
import styles from './ErrorMessage.module.css';

interface ErrorComponentProps {
	message: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({message}) => {
	return <div className={styles['server-error']}>{message}</div>;
};

export default ErrorComponent;

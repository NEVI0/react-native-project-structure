export interface GlobalColor {
	primary: string;
	background: string;
	text: string;
	gray: string;
}

export interface GlobalError {
	type?: string;
	err?: {
		message?: string;
		err?: any;
	};
	error?: {
		message?: string;
		error?: any;
	}
}

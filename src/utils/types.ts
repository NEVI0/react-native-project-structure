export type AppContextType = {
	isSigned: boolean;
	isInDarkMode: boolean;
	globalError: string;

	signin(): Promise<void>;
	signout(): Promise<void>;
	changeTheme(): void;

	createGlobalError(err: any): void;
	clearGlobalError(): void;
}

export type GlobalError = {
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

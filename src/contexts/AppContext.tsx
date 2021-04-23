import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { GlobalColor, GlobalError } from '../utils/types';

export interface AppContextType {
	isSigned: boolean;
	globalColor: GlobalColor;
	globalError: GlobalError;

	signin(): Promise<void>;
	signout(): Promise<void>;
	changeTheme(): void;

	createGlobalError(err: any): void;
	clearGlobalError(): void;
}

const AppContext: React.Context<AppContextType | any> = createContext({});

export const AppProvider: React.FC = ({ children }) => {
	
	const [ isSigned, setIsSigned ] = useState<boolean>(false);
	const [ globalError, setGlobalError ] = useState<GlobalError | string>('');
	const [ globalColor, setGlobalColor ] = useState<GlobalColor>({
		primary: '#156aea',
		background: '#fff',
		text: '#090b0f',
		gray: '#f2f2f2'
	});

	useEffect(() => {
		(async () => {
			try {
				
				const isSignedStorage = await AsyncStorage.getItem('@APP:signed');
				const isDarkMode = await AsyncStorage.getItem('@APP:darkmode');

				if (isSignedStorage) {
					setIsSigned(true);
				}

				if (isDarkMode == 'true') {
					setGlobalColor({ primary: '#156aea', background: '#090b0f', text: '#fff', gray: '#0a0a0c' });
				} else {
					setGlobalColor({ primary: '#156aea', background: '#fff', text: '#090b0f', gray: '#f2f2f2' });
				}

			} catch (err) {
				console.log('Start AppContext.tsx error: ', err);
			}
		})();
	}, []);

	const signin = async () => {
		try {
			await AsyncStorage.setItem('@APP:signed', 'true');
			setIsSigned(true);
		} catch (err) {
			createGlobalError(err);
		}
	}

	const signout = async () => {
		try {
			await AsyncStorage.removeItem('@APP:signed');
			setIsSigned(false);
		} catch (err) {
			createGlobalError(err);
		}
	}

	const changeTheme = async () => {

		await AsyncStorage.removeItem('@APP:darkmode');

		if (globalColor.background == '#fff') {
			await AsyncStorage.setItem('@APP:darkmode', 'true');
			setGlobalColor({ primary: '#156aea', background: '#090b0f', text: '#fff', gray: '#0a0a0c' });
		} else {
			await AsyncStorage.setItem('@APP:darkmode', 'false');
			setGlobalColor({ primary: '#156aea', background: '#fff', text: '#090b0f', gray: '#f2f2f2' });
		}

	}

	const createGlobalError = (err: any) => {
		try {
			if (typeof err == 'string') {
				setGlobalError(err);
			} else {
				if (err.response.data) {
					setGlobalError(err.response.data.message || err.response.data.type);
				} else {
					setGlobalError(err.error || err.err);
				}
			}
		} catch (err) {
			setGlobalError('Algum processo do aplicativo não foi finalizado ou não foi possível realiza-lo. Tente novamente ou chame o garçom para ajuda-lo!');
		}
	}

	const clearGlobalError = () => setGlobalError('');

	return (
		<AppContext.Provider
			value={{
				isSigned,
				globalColor,
				globalError,

				signin,
				signout,
				changeTheme,

				createGlobalError,
				clearGlobalError,
			}}
		>
			{ children }
		</AppContext.Provider>
	);

}

export default AppContext;

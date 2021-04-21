import React, { useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { GlobalColor, GlobalError } from '../utils/types';

export interface AppContextType {
	globalColor: GlobalColor;
	globalError: GlobalError;

	changeTheme(): void;

	createGlobalError(err: any): void;
	clearGlobalError(): void;
}

const AppContext: React.Context<AppContextType | any> = createContext({});

export const AppProvider: React.FC = ({ children }) => {
	
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
				
				const isDarkMode = await AsyncStorage.getItem('@APP:darkmode');

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
				globalColor,
				globalError,

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

import React, { useState, useEffect, useContext, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppContextType } from '../utils/types';

const AppContext: React.Context<AppContextType> = createContext({} as AppContextType);

export const AppProvider: React.FC = ({ children }) => {
	
	const [ isSigned, setIsSigned ] = useState<boolean>(false);
	const [ isInDarkMode, setIsInDarkMode ] = useState<boolean>(false);

	const [ globalError, setGlobalError ] = useState<string>('');

	useEffect(() => {
		(async () => {
			try {
				
				const isSignedStorage = await AsyncStorage.getItem('@APP:signed');
				const isDarkMode = await AsyncStorage.getItem('@APP:darkmode');

				setIsSigned(isSignedStorage ? true : false);
				setIsInDarkMode(isDarkMode == 'true');

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

		const isDarkMode = await AsyncStorage.getItem('@APP:darkmode');

		if (isDarkMode === 'true') {
			await AsyncStorage.setItem('@APP:darkmode', 'false');
			setIsInDarkMode(false);
		} else {
			await AsyncStorage.setItem('@APP:darkmode', 'true');
			setIsInDarkMode(true);
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
				isInDarkMode,
				globalError,

				signin,
				signout,
				changeTheme,

				createGlobalError,
				clearGlobalError
			}}
		>
			{ children }
		</AppContext.Provider>
	);

}

const useAppContext = () => useContext(AppContext);
export default useAppContext;

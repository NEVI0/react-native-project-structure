import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import AppFlow from './AppFlow';
import AuthFlow from './AuthFlow';
import Alert from '../components/Alert';

import useAppContext from '../contexts/AppContext';
import createTheme from '../styles/theme';

const Routes: React.FC = () => {

	const {
		isSigned,
		isInDarkMode,
		globalError,
		clearGlobalError
	} = useAppContext();

	return (
		<ThemeProvider theme={ createTheme(isInDarkMode) }>
			<NavigationContainer>
				{ isSigned ? <AppFlow /> : <AuthFlow /> }
			</NavigationContainer>

			<StatusBar
				animated={ true }
				translucent={ true }
				backgroundColor="transparent"
				barStyle={ isInDarkMode ? 'light-content' : 'dark-content' } 
			/>

			{
				globalError !== '' && (
					<Alert 
						visible={ true }
						message={ globalError }
						onClose={ clearGlobalError }
					/>
				)
			}
		</ThemeProvider>
	);

}

export default Routes;

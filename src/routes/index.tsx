import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppFlow from './AppFlow';
import AuthFlow from './AuthFlow';

import AppContext, { AppContextType } from '../contexts/AppContext';

const Routes: React.FC = () => {

	const { globalColor } = useContext<AppContextType>(AppContext);

	return (
		<>
			<NavigationContainer>
				{ true ? <AppFlow /> : <AuthFlow /> }
			</NavigationContainer>

			<StatusBar
				animated={ true }
				translucent={ true }
				backgroundColor="transparent"
				barStyle={ globalColor.background == '#fff' ? 'dark-content' : 'light-content' } 
			/>
		</>
	);

}

export default Routes;

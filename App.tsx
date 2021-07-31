import 'react-native-gesture-handler';
import React from 'react';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { AppProvider } from './src/contexts/AppContext';
import Routes from './src/routes';

const App: React.FC = () => {

	const [ loaded ] = Font.useFonts({
		'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
		'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
		'audiowide-regular': require('./assets/fonts/Audiowide-Regular.ttf')
	});

	if (!loaded) {
		return <AppLoading autoHideSplash={ true } />;
	}

	return (
		<AppProvider>
			<Routes />
		</AppProvider>
	);

}

export default App;

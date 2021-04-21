import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../screens/auth/Signin';
import Alert from '../components/Alert';

import AppContext, { AppContextType } from '../contexts/AppContext';

const Stack = createStackNavigator();

const AuthFlow: React.FC = () => {

	const { globalError, clearGlobalError } = useContext<AppContextType>(AppContext);

	return (
		<>
			<Stack.Navigator initialRouteName="Signin" screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Signin" component={ Signin } />
			</Stack.Navigator>
	
			{
				globalError ? (
					<Alert 
						visible={ true }
						danger={ true } /* @ts-ignore */
						message={ globalError || 'Algum processo do aplicativo apresentou erro durante a execução!' }
						button="Ok"
						onPress={ clearGlobalError }
						onClose={ clearGlobalError }
					/>
				) : null
			}
		</>
	);

}

export default AuthFlow;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../screens/auth/Signin';

const Stack = createStackNavigator();

const AuthFlow: React.FC = () => {
	return (
		<Stack.Navigator initialRouteName="Signin" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Signin" component={ Signin } />
		</Stack.Navigator>
	);
}

export default AuthFlow;

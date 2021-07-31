import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/app/Home';

const Stack = createStackNavigator();

const AppFlow: React.FC = () => {
	return (
		<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={ Home } />
		</Stack.Navigator>
	);
}

export default AppFlow;

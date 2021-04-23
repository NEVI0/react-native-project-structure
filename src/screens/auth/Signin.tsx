import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import Button from '../../components/Button';
import Loading from '../../components/Loading';

import AppContext, { AppContextType } from '../../contexts/AppContext';

const Signin: React.FC<StackScreenProps<any>> = ({ navigation }) => {

	const { globalColor, signin, changeTheme } = useContext<AppContextType>(AppContext);

	const [ showAppLoading, setShowAppLoading ] = useState<boolean>(false);

	const handleSignin = () => {
		setShowAppLoading(true);
		setTimeout(() => signin(), 2000);
	}

	useEffect(() => {
		(async () => {
			setShowAppLoading(true);
			setTimeout(() => setShowAppLoading(false), 1000);
		})();
	}, []);

	return (
		<View style={[ styles.container, { backgroundColor: globalColor.gray } ]}>

			<Text style={[ styles.text, { color: globalColor.text } ]}>
				Start editing Signin.tsx file!
			</Text>

			<View style={{ paddingVertical: 25 }}>
				<Button 
					text="Sign In"
					onPress={ handleSignin }
				/>
			</View>

			<TouchableOpacity onPress={ changeTheme }>
				<Text style={[ styles.text, { color: globalColor.primary } ]}>
					Change Theme
				</Text>
			</TouchableOpacity>

			<Loading visible={ showAppLoading } />

		</View>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontFamily: 'default-b'
	}
});

export default Signin;

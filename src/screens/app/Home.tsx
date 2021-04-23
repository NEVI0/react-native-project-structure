import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import Button from '../../components/Button';
import Loading from '../../components/Loading';

import AppContext, { AppContextType } from '../../contexts/AppContext';

const Home: React.FC<StackScreenProps<any>> = ({ navigation }) => {

	const { globalColor, signout, changeTheme } = useContext<AppContextType>(AppContext);

	const [ showAppLoading, setShowAppLoading ] = useState<boolean>(false);

	const handleSignout = () => {
		setShowAppLoading(true);
		setTimeout(() => signout(), 2000);
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
				Start editing Home.tsx file!
			</Text>

			<View style={{ paddingVertical: 25 }}>
				<Button 
					text="Sign Out"
					onPress={ handleSignout }
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

export default Home;

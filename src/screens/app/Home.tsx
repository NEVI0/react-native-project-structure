import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import Button from '../../components/Button';
import Loading from '../../components/Loading';

import AppContext, { AppContextType } from '../../contexts/AppContext';

const Home: React.FC<StackScreenProps<any>> = ({ navigation }) => {

	const { globalColor, changeTheme } = useContext<AppContextType>(AppContext);

	const [ showAppLoading, setShowAppLoading ] = useState<boolean>(false);

	useEffect(() => {
		(async () => {
			setShowAppLoading(true);
			setTimeout(() => setShowAppLoading(false), 1000);
		})();
	}, []);

	return (
		<View style={{ flex: 1 }}>

			<View style={[ styles.content, { backgroundColor: globalColor.gray } ]}>
				<Text style={[ styles.message, { color: globalColor.text } ]}>
					Start editing Home.tsx file!
				</Text>

				<Button 
					text="Mudar Tema"
					onPress={ changeTheme }
				/>
			</View>

			<Loading visible={ showAppLoading } />

		</View>
	);

}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	message: {
		fontFamily: 'default-b',
		marginBottom: 20
	}
});

export default Home;

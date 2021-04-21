import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import AppContext, { AppContextType } from '../contexts/AppContext';

const Button: React.FC<{ text: string; onPress(): void; }> = ({ text, onPress }) => {

	const { globalColor } = useContext<AppContextType>(AppContext);

	return (
		<TouchableOpacity 
			style={[ styles.container, { backgroundColor: globalColor.primary } ]}
			onPress={ onPress }
		>
			<Text style={ styles.text }>
				{ text }
			</Text>
		</TouchableOpacity>
	);

}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 10,
		textAlign: 'center'
	},
	text: {
		fontFamily: 'custom',
		fontSize: 18,
		color: '#fff'
	}
});

export default Button;

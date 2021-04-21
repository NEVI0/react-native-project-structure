import React from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

interface Alert {
	visible: boolean;
	danger: boolean;
	message: string;
	button: string;
	onPress(): void;
	onClose(): void;
}

const Alert: React.FC<Alert> = ({ visible, danger, message, button, onPress, onClose }) => {
	return (
		<Modal 
			visible={ visible }
			transparent={ true }
			statusBarTranslucent={ true }
			animationType="fade"
			onRequestClose={ onClose }
		>
			<View style={ styles.container }>
				<View style={ styles.box }>

					<View style={[ styles.circle, { backgroundColor: danger ? '#d12323' : '#23d185' } ]}>
						<Feather name="alert-octagon" size={ 24 } color="#fff" />
					</View>
					
					<Text style={ styles.message }>
						{ message }
					</Text>

					<TouchableOpacity style={[ styles.button, { backgroundColor: danger ? '#d12323' : '#23d185' } ]}>
						<Text style={ styles.buttonText }>
							{ button }
						</Text>
					</TouchableOpacity>

				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.25)'
	},
	box: {
		borderRadius: 10,
		width: '70%',
		backgroundColor: '#fff'
	},
	circle: {
		padding: 20,
		borderRadius: 50,
		borderWidth: 3,
		borderColor: '#fff',
		marginTop: -30,
		alignSelf: 'center'
	},
	message: {
		paddingHorizontal: 20,
		paddingTop: 10,
		paddingBottom: 20,
		textAlign: 'justify',
		fontFamily: 'default-b',
		fontSize: 18,
		color: '#000'
	},
	button: {
		marginHorizontal: 20,
		marginBottom: 20,
		paddingVertical: 10,
		borderRadius: 10,
		alignItems: 'center'
	},
	buttonText: {
		fontFamily: 'custom',
		fontSize: 18,
		color: '#fff'
	}
});

export default Alert;

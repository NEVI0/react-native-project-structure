import React, { useContext } from 'react';
import { StyleSheet, Modal, View, ActivityIndicator } from 'react-native';

import AppContext, { AppContextType } from '../contexts/AppContext';

const Loading: React.FC<{ visible: boolean; }> = ({ visible }) => {

	const { globalColor } = useContext<AppContextType>(AppContext);

	return (
		<Modal 
			visible={ visible }
			transparent={ true }
			statusBarTranslucent={ true }
			animationType="fade"
		>
			<View style={ styles.container }>
				<View style={ styles.box }>
					<ActivityIndicator size="large" color={ globalColor.primary } />
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
		padding: 20,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	}
});

export default Loading;

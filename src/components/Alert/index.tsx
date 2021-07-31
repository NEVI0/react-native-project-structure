import React from 'react';
import { Modal } from 'react-native';

import * as S from './styles';

type AlertType = {
	visible: boolean;
	message: string;
	onClose(): void;
}

const Alert: React.FC<AlertType> = ({ visible, message, onClose }) => {
	return (
		<Modal 
			visible={ visible }
			transparent={ true }
			statusBarTranslucent={ true }
			animationType="fade"
			onRequestClose={ onClose }
		>
			<S.Container>
				<S.Box> 
					<S.Message>
						{ message }
					</S.Message>
				</S.Box>
			</S.Container>
		</Modal>
	);
}

export default Alert;

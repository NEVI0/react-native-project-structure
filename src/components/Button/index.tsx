import React from 'react';
import * as S from './styles';

type ButtonType = {
	text: string;
	onPress(): void;
}

const Button: React.FC<ButtonType> = ({ text, onPress }) => {
	return (
		<S.Container onPress={ onPress }>
			<S.Text>
				{ text }
			</S.Text>
		</S.Container>
	);
}

export default Button;

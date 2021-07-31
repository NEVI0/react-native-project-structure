import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
	flex: 1;
	align-items: center;
	justify-content: flex-end;
	padding: 24px;
	background-color: rgba(0, 0, 0, 0.25);
`;

export const Box = styled(TouchableOpacity)`
	width: 100%;
	background-color: #fff;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 12px;
	border-radius: 12px;
`;

export const Message = styled(Text)`
	text-align: center;
	font-family: ${props => props.theme.fonts.default.bold};
	font-size: 18px;
	color: #000;
`;

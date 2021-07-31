import { TouchableOpacity, Text as RNText } from 'react-native';
import styled from 'styled-components';

export const Container = styled(TouchableOpacity)`
	background-color: ${props => props.theme.colors.primary};
	padding: 10px 20px;
	border-radius: 10px;
	text-align: center;
`;

export const Text = styled(RNText)`
	font-family: ${props => props.theme.fonts.custom.normal};
	font-size: 18px;
	color: ${props => props.theme.colors.btnText}
`;

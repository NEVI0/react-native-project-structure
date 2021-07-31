import { View, Text } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.background};
`;

export const Link = styled(Text)`
	font-family: ${props => props.theme.fonts.default.bold};
	color: ${props => props.theme.colors.primary}
`;

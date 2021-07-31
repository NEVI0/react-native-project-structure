import { Text as RNText } from 'react-native';
import styled from 'styled-components';

export const Text = styled(RNText)`
	font-family: ${props => props.theme.fonts.default.normal};
	color: ${props => props.theme.colors.text}
`;

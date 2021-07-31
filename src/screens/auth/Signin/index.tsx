import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import Button from '../../../components/Button';
import Loading from '../../../components/Loading';

import useAppContext from '../../../contexts/AppContext';

import * as S from './styles';
import * as CS from '../../../styles/core';

const Home: React.FC<StackScreenProps<any>> = () => {

	const { signin, changeTheme } = useAppContext();

	const [ showAppLoading, setShowAppLoading ] = useState<boolean>(false);

	const handleSignin = () => {
		setShowAppLoading(true);
		setTimeout(() => signin(), 2000);
	}

	useEffect(() => {
		const init = async () => {
			setShowAppLoading(true);
			setTimeout(() => setShowAppLoading(false), 1000);
		}

		init();
	}, []);

	return (
		<S.Container>

			<CS.Text>
				Start editing Signin/index.tsx file!
			</CS.Text>

			<View style={{ paddingVertical: 25 }}>
				<Button 
					text="Sign In"
					onPress={ handleSignin }
				/>
			</View>

			<TouchableOpacity onPress={ changeTheme }>
				<S.Link>
					Change Theme
				</S.Link>
			</TouchableOpacity>

			<Loading visible={ showAppLoading } />

		</S.Container>
	);

}

export default Home;

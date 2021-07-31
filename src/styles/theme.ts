type ThemeType = {
	colors: {
		primary: string;
		secondary: string;
		background: string;
		text: string;
		btnText: string;
	},
	fonts: {
		default: {
			normal: string;
			bold?: string;
			italic?: string;
		},
		custom: {
			normal: string;
			bold?: string;
			italic?: string;
		}
	}
}

const createTheme = (isInDarkMode: boolean): ThemeType => {
	return {
		colors: {
			primary: isInDarkMode ? '#156aea' : '#156aea',
			secondary: isInDarkMode ? '#0f0fbc' : '#0f0fbc',
			background: isInDarkMode ? '#090b0f' : '#f2f2f2',
			text: isInDarkMode ? '#f2f2f2' : '#090b0f',
			btnText: '#ffffff'
		},
		fonts: {
			default: {
				normal: 'nunito-regular',
				bold: 'nunito-bold',
				italic: undefined
			},
			custom: {
				normal: 'audiowide-regular',
				bold: undefined,
				italic: undefined
			}
		}
	}
}

export default createTheme;

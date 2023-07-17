import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		common: {
			black: '#000000',
			white: '#FFFFFF',
		}
	},
	typography: {
		fontFamily: ['Open Sans', 'sans-serif'].join(','),

		'body/1': {
			fontWeight: 500,
			fontSize: '22px',
			lineHeight: '25px',
			[createTheme().breakpoints.down('sm')]: {
				fontWeight: 400,
				fontSize: 15,
				lineHeight: '17.5px',
			  },
		},

		'error': {
			color: '#FF0008',
			fontWeight: 500,
			fontSize: '15px',
			[createTheme().breakpoints.down('sm')]: {
				fontWeight: 400,
				fontSize: 10,
				lineHeight: '15px',
			  },
		},

		'info': {
			fontWeight: 400,
			fontSize: '15px',
			color: '#FF0008',
			[createTheme().breakpoints.down('sm')]: {
				fontWeight: 400,
				fontSize: 10,
				lineHeight: '15.5px',
			  },
		}
	}
});

export default theme;

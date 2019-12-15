import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const badals = {
    general: {
        gray: '#e3e3e3',
        darkGray: '#6C6C6C',
        main: '#4c84ff',
        white: '#ffffff',
        red: '#ff4352'
    },
    desktop: {},
    mobile: {},
    globalContainer: {
        maxWidth: 1140
    }
};

const typography = {
    fontFamily: 'Gilroy-SemiBold, sans-serif',
    color: {
        primary: '',
        secondary: ''
    }
};

const theme = createMuiTheme({
    direction: 'rtl',
    badals,
    typography,
    palette: {},
});

export default theme;

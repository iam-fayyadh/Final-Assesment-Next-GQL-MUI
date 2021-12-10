import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    listMenuContainer: {
        backgroundColor: '#f5f5f5',
        padding: '10px 10px 10px 0px',
        borderRadius: '6px',
    },
    listMenu: {
        padding: 5,
        listStyle: 'none',
    },
    listMenuItem: {
        padding: 10,
        fontSize: 12,
        '&:hover': { fontWeight: 'bold' },
    },
    listMenuItemActive: {
        paddingLeft: '7px',
        fontWeight: 'bold',
    },
    titleContent: {
        paddingLeft: '0',
    },
    bar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    arrow: {
        transform: 'scale(0.7)',
        margin: '10px',
        color: 'grey',
        '&:hover': { color: 'black' },
    },
}));

export default useStyles;

export const useStyles = () => {
    return {
    container: {
        height: 'auto',
        width: 'auto',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(231, 200, 115)',
        borderRadius: '16px',
        margin: 'auto',
        padding: '5%',
    },
    title: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        color: 'black',
        textAlign: 'center',
    },
    gridContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: '50px',
        height: '50px',
    },
    itemTitle: {
        fontWeight: 'bold',
        color: 'black',
    },
};
};
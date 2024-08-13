export const useStyles = () => {
    return {

    container: {
      display: 'flex',
      flexDirection: 'column',
      height: 'auto',
      backgroundColor: 'rgb(31, 75, 67)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '16px',
      margin: 'auto',
      marginTop: 5,
      padding: 5,
    },
    gridContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageBox: {
      position: 'relative',
    },
    mainImage: {
      width: '60%',
      height: '60%',
      objectFit: 'cover',
      borderRadius: '16px',
    },
    overlayImage: {
      position: 'absolute',
      top: '5%',
      left: '25%',
      width: '20%',
      height: '10%',
    },
    contentBox: {
      width: '60%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'left',
      alignItems: 'flex-start',
      paddingLeft: 5,
    },
    learnMoreButton: {
      width: '130px',
      height: '44px',
      backgroundColor: 'rgb(231, 200, 115)',
      color: 'black',
      borderRadius: '8px',
      marginTop: 5,
    },
    countUpContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: { xs: 'column', sm: 'row' },
      paddingTop: 5,
    },
    countUpBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    countUpText: {
      color: 'rgb(231, 200, 115)',
      fontWeight: 'bold',
      fontSize: 40,
    },
  };
};
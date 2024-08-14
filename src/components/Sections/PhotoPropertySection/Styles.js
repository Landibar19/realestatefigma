export const useStyles = () => {
    return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5,
      padding: 5,
    },
    title: {
      fontWeight: 'bold',
      color: 'black',
    },
    description: {
      color: 'black',
    },
    flexBox: {
      display: 'flex',
      gap: 4,
    },
    slideImage: {
      display: 'flex',
      flexDirection: {xs:'column',sm:'column',md:'row'},
      gap: 4,
      width: '70%',
    },
    infoBox: {
      position: 'relative',
      width: '100%',
      backgroundColor: 'black',
      borderRadius: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoText: {
      fontSize: 12,
      textAlign: 'center',
    },
    iconButton: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      backgroundColor: 'white',
      color: 'black',
      borderRadius: 2,
    },
    imageContainer: {
      width: '100%',
      height: '100%',
    },
    mainImage: {
      width: '100%',
      height: '100%',
      maxHeight: '400px',
      borderRadius: 2,
    },
  };
};
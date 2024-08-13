const useStyles = () => {
    return {
      container: {
        height: 'auto',
      },
      title: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        paddingTop: '40px', 
      },
      subtitle: {
        color: 'black',
        fontSize: 17,
      },
      cardContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
      card: {
        height: '300px',
        position: 'relative',
        borderRadius: '16px',
        margin: '16px', 
      },
      cardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '16px',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        padding: '16px', 
      },
      cardContent: {
        position: 'absolute',
        top: '8px', 
        left: '8px', 
        zIndex: 2,
      },
      propertyNumber: {
        fontSize: 17,
        fontWeight: 'regular',
      },
      city: {
        fontSize: 24,
        fontWeight: 'bold',
      },
    };
  };
  
  export default useStyles;

const useStyles = () => {
    return {
      sectionContainer: {
        fontWeight: 'bold',
        marginBottom: '16px', 
      },
      subtitle: {
        marginBottom: '16px', 
      },
      cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '16px', 
        marginBottom: '8px', 
      },
      cardTitle: {
        color: 'black',
        fontWeight: 'bold',
        marginBottom: '8px', 
      },
      readMore: {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px', 
        marginTop: '8px', 
        color: 'blue',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'center',
        gap: '16px', 
        marginBottom: '8px', 
        color: 'black',
      },
      cardDescription: {
        color: 'black',
      },
      cardTitleText: {
        color: 'black',
        fontWeight: 'bold',
        marginBottom: '8px', 
      },
    };
  };
  
  export default useStyles;
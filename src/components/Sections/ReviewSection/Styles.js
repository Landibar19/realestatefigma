export const useStyles = () => {
    return {    
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
    },
    innerContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    headerBox: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 5,
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'left',
    },
    description: {
      paddingTop: 5,
      color: 'black',
      textAlign: 'justify',
    },
    statsBox: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 2,
      gap: '25%',
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    statText: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    testimonialBox: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'left',
      margin:'auto',
    },
    navigationBox: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      
      gap: 2,
    },
    navButton: {
      width: '50px',
      height: '30px',
      backgroundColor: 'transparent',
      color: 'black',
      border: '1px solid grey',
      borderRadius: '16px',
    },
    navIcon: {
      fontSize: 10,
    },
    divider: {
      width: '100%',
      height: '1px',
      backgroundColor: 'grey',
      marginTop: 3,
    },
    companiesBox: {
      paddingTop: 10,
    },
    companyIcon: {
      width: '84px',
      height: '26px',
      objectFit: 'contain',
    },
  };
};
export const useStyles = () => { 
    return {
    container: {
      width: '100%',
      paddingTop: '16px',
    },
    tabs: {
      borderBottom: '1px solid',
      borderColor: 'divider',
    },
    tab: {
      textTransform: 'capitalize',
      color: 'black',
      fontWeight: 'bold',
    },
    tabPanel: {
      padding: '24px', 
    },
    gridContainer: {
      spacing: 2,
    },
    callToAction: {
      width: '100%',
      height: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(231, 200, 115, 0.2)',
      borderRadius: '8px',
    },
    callToActionContent: {
      width: '85%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    callToActionContentMobile: {
      flexDirection: 'column',
    },
    callToActionText: {
      textAlign: 'left',
    },
    callToActionTitle: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
    },
    callToActionSubtitle: {
      color: 'black',
    },
    callToActionButton: {
      width: '170px',
      height: { xs: '35px', sm: '54px' },
      color: 'black',
      backgroundColor: 'rgba(231, 200, 115, 1)',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-evenly',
    },
  };
}
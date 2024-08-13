import bgImage from '../../../assets/Section1/bgImage.png';

const useStyles = (isMobileView) => ({
  sectionContainer: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh', 
    gap: 3,
  },
  titleBox: {
    border: '1px solid white', 
    borderRadius: '24px',
  },
  mainText: {
    width: isMobileView ? '90%' : '30%',
    fontSize: '36px',
  },
  navBox: {
    display: 'flex', 
    flexDirection: 'row', 
    gap: 5,
  },
  searchBox: {
    width: isMobileView ? '90%' : '30%',
  },
});

export default useStyles;
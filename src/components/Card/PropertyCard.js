import React, { useEffect, useState } from 'react';
import icon1 from '../../assets/Section2/Icon (1).png';
import icon2 from '../../assets/Section2/Icon (2).png';
import icon3 from '../../assets/Section2/Icon (3).png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProperties } from '../../redux/thunks/propertyThunks';
import { Grid, Box, Typography, Button, CardContent } from '@mui/material';
import MuiCard from '@mui/material/Card';

const PropertyDetail = ({ icon, detail }) => (
  <Box sx={{ display: 'flex', flexDirection: 'row', pr: 2 }}>
    <img src={icon} alt="" style={{ width: '20px', height: '20px' }} />
    <Typography color="black">{detail}</Typography>
  </Box>
);

export const PropertyCard = () => {
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.properties.properties);
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
 
    dispatch(fetchProperties());
  }, [dispatch]);



  const handleToggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };


  if (!Array.isArray(properties) || properties.length === 0) {
    return <Typography>No properties available</Typography>;
  }

  return (
    <Grid container style={{ width: '100%' }}>
      {properties.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          key={index}
          sx={{
            width: { sm: '600px' },
            borderRadius: '24px',
          }}
        >
          <Box>
            <MuiCard sx={{ position: 'relative', margin: 1 }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexGrow: 1 }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '90%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    padding: '10px',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '5%',
                    left: '5%',
                    color: 'white',
                    p: '5px',
                    backgroundColor: 'rgb(31, 75, 67)',
                    borderRadius: '16px',
                  }}
                >
                  <Typography variant="body2">{item.status}</Typography>
                </Box>
              </Box>
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', m: 2 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography sx={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{item.title}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', color: 'black' }}>
                      <Typography variant="body2" color="black">
                        {item.address}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ color: 'red', fontWeight: 'bold' }}>{item.price}</Typography>
                </Box>
                <Grid item xs={4} sm={12} sx={{ pl: 2 }}>
                  <PropertyDetail icon={icon1} detail={item.beds} />
                  <PropertyDetail icon={icon2} detail={item.baths} />
                  <PropertyDetail icon={icon3} detail={item.sqft} />
                </Grid>
              </CardContent>
              <Box>
                <Typography variant="body2" color="black" padding={3}>
                  {expandedCards[index] ? item.description : `${item.description.substring(0, 100)}...`}
                </Typography>
                <Button onClick={() => handleToggleExpand(index)}>
                  {expandedCards[index] ? 'Show Less' : 'Show More'}
                </Button>
              </Box>
            </MuiCard>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertyCard;
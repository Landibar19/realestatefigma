import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { WhyUsSectionContent } from '../../../api/SectionsContent/WhyUsSectionContent';
import { useStyles } from './Styles';

export const WhyUsSection = () => {
    const styles = useStyles();
    const data = WhyUsSectionContent;
    return (
        <div style={styles.container}>
            <Box padding="5%">
                <Typography sx={styles.title}>
                    Why Choose Us
                </Typography>
                <Typography variant="h5" sx={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
            </Box>
            <Grid container sx={styles.gridContainer}>
                {data.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} lg={3}>
                        <img src={item.icon} alt="icon" style={styles.icon} />
                        <Typography sx={styles.itemTitle}>{item.title}</Typography>
                        <Typography color='black'>{item.description}</Typography>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
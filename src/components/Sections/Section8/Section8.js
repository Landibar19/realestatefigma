import React, { useState } from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Section8Content } from '../../SectionsContent/Section8Content';

export const Section8 = () => {
    const [expandedStates, setExpandedStates] = useState({});
    const toggleShowMore = index => setExpandedStates(prev => ({ ...prev, [index]: !prev[index] }));

    return (
        <Box>
            <Typography variant="h4" color="black" sx={{ fontWeight: 'bold', mb: 2 }}>
                Recent articles and news
            </Typography>
            <Typography variant="subtitle1" color="black" sx={{ mb: 2 }}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
            <Grid container spacing={2}>
                {Section8Content.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card>
                            <CardMedia component="img" height="217" image={item.image} alt={item.title} />
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: "center", gap: 2, mb: 1 }}>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {item.propertyType} <FiberManualRecordIcon fontSize="small" />
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </Typography>
                                </Box>
                                <Typography sx={{ color: 'black', fontWeight: "bold", mb: 1 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {expandedStates[index] ? item.description : `${item.description.substring(0, 100)}...`}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    onClick={() => toggleShowMore(index)} 
                                    sx={{ 
                                        cursor: 'pointer', 
                                        display: 'flex', 
                                        justifyContent: 'center', 
                                        alignItems: "center", 
                                        gap: 1, 
                                        mt: 1,
                                        color: 'blue',}}
                                >
                                    {expandedStates[index] ? 'Read Less' : 'Read More'}
                                    <ArrowRightAltIcon />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
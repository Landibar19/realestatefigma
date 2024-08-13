import React, { useState } from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ArticleContent } from '../../../api/SectionsContent/ArticleContent';
import useStyles from './Styles';

export const ArticlesSection = () => {
    const classes = useStyles();
    const [expandedStates, setExpandedStates] = useState({});
    const toggleShowMore = index => setExpandedStates(prev => ({ ...prev, [index]: !prev[index] }));

    return (
        <Box paddingBottom={5}>
            <Typography variant="h4" color="black" className={`${classes.sectionTitle}`}>
                Recent articles and news
            </Typography>
            <Typography variant="subtitle1" color="black" className={`${classes.subtitle}`}>
                lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>
            <Grid container spacing={2}>
                {ArticleContent.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card>
                            <CardMedia component="img" height="217" image={item.image} alt={item.title} />
                            <CardContent>
                                <Box className={classes.cardContent}>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {item.propertyType} <FiberManualRecordIcon fontSize="small" />
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </Typography>
                                </Box>
                                <Typography  sx={{color:'black', fontWeight:'bold'}}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {expandedStates[index] ? item.description : `${item.description.substring(0, 100)}...`}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    sx={{color:'blue', cursor: 'pointer'}}
                                    onClick={() => toggleShowMore(index)} 
                                className={`${classes.readMore}`}
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
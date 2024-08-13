import React from 'react';
import { SearchSection } from '../../components/Sections/SearchSection/SearchSection';
import { PropertySection } from '../../components/Sections/PropertySection/PropertySection';
import { WhyUsSection } from '../../components/Sections/WhyUsSection/WhyUsSection';
import { PhotoPropertySection } from '../../components/Sections/PhotoPropertySection/PhotoPropertySection';
import { LocalExpertiseSection } from '../../components/Sections/LocalExpertiseSection/LocalExpertiseSection';
import { ReviewSection } from '../../components/Sections/ReviewSection/ReviewSection';
import { ArticlesSection } from '../../components/Sections/ArticlesSection/ArticlesSection';
import { ListCitiesSection } from '../../components/Sections/ListCitiesSection/ListCitiesSection';
import { Container } from '@mui/material';
import { CitiesSection } from '../../components/Sections/CitiesSection/CitiesSection';




export const HomePage = () => {
  return (
    <Container maxWidth='xxl'>
      <SearchSection/>
      <PropertySection/>
      <CitiesSection/>
      <PhotoPropertySection />
      <LocalExpertiseSection/>
      <WhyUsSection/>
      <ReviewSection/>
      <ListCitiesSection/>
      <ArticlesSection/>
    </Container>
  );
};
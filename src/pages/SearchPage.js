import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import Header from 'components/Header';

const SearchPage = () => (
  <MainTemplate>
    <Header
      heading="What you looking for?"
      description="You have total (0) tasks"
    />
  </MainTemplate>
);

export default SearchPage;

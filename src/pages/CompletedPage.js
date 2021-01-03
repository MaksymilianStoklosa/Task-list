import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import Header from 'components/Header';

const CompletedPage = () => (
  <MainTemplate>
    <Header
      heading="Completed tasks list"
      description="You completed (0) tasks"
    />
  </MainTemplate>
);

export default CompletedPage;

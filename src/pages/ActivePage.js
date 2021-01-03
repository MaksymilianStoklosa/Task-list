import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import Header from 'components/Header';

const ActivePage = () => (
  <MainTemplate>
    <Header
      heading="What will you do today?"
      description="You have (0) active tasks"
    />
  </MainTemplate>
);

export default ActivePage;

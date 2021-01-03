import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from 'routing/Routing';
import AppProvider from 'context/AppContext';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routing />
      </Router>
    </AppProvider>
  );
}

export default App;

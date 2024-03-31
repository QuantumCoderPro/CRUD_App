import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Header from './Components/Header';
import Main from './Components/Main';


const App = () => {
  return (
    <Router> {/* Wrap your components with Router */}
     
        <Header />
        <Main />
       
     
    </Router>
  );
};

export default App;

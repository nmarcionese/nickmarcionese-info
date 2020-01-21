import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Portfolio from './containers/Portfolio';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Portfolio></Portfolio>
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;

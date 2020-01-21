import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';

import Intro from './../components/MainContent/Intro/Intro';
import About from './../components/MainContent/About/About';
import Experience from './../components/MainContent/Experience/Experience';
import PortfolioSection from './../components/MainContent/PortfolioSection/PortfolioSection';

export class Portfolio extends Component {
  render() {
    return (
      <Auxiliary>
        <Route path="/" exact component={Intro} />
        <Route path="/about" exact component={About} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/portfolio" exact component={PortfolioSection} />
        {/* <Intro />
        <About />
        <Experience />
        <PortfolioSection /> */}
      </Auxiliary>
    );
  }
}

export default Portfolio;

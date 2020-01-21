import React, { Component } from 'react';
import Section from '../../UI/Section/Section';
import classes from './PortfolioSection.module.css';
import ProjectHolder from './../../UI/ProjectHolder/ProjectHolder';

import ClickyGameImage from './../../../assets/reactClicky.png';
import PersonalSiteImage from './../../../assets/personalSite.png';
import MERN_Google_Image from './../../../assets/mern-google-book-search.png';

import axios from './../../../axiosInstance';

class PortfolioSection extends Component {
  state = {
    portfolioItems: null,
    projectsLoaded: false
  };

  componentDidMount() {
    axios.get('/Portfolio.json').then(res => {
      const portfolioItems = Object.keys(res.data).map(item => {
        let techList = Object.keys(res.data[item].technology).map(item => {
          return item;
        });

        if (item.toLowerCase().indexOf('personal') >= 0) {
          res.data[item].image = PersonalSiteImage;
        }

        if (item.toLowerCase().indexOf('clicky') >= 0) {
          res.data[item].image = ClickyGameImage;
        }

        if (item.toLowerCase().indexOf('mern') >= 0) {
          res.data[item].image = MERN_Google_Image;
        }

        res.data[item].technology = techList;

        return res.data[item];
      });
      console.log(portfolioItems);
      this.setState({ portfolioItems: portfolioItems, projectsLoaded: true });
    });
  }

  projectsClickHandler = (event, url) => {
    window.open(event.currentTarget.dataset.url, 'target=_blank');
  };

  render() {
    let projects = null;

    if (this.state.projectsLoaded) {
      projects = this.state.portfolioItems.map(project => {
        console.log(project);
        return (
          <ProjectHolder
            clicked={event => this.projectsClickHandler(event)}
            externalURL={project.externalURL}
            githubURL={project.githubURL}
            imageURL={project.image}
            techList={project.technology}
            name={project.name}
            key={project.name}
          />
        );
      });
    }

    return (
      <Section className={classes.Portfolio}>
        <h3 className={classes.portSec__headerThree}>#Things I've Built</h3>
        <div className={classes.Port_Project_Container}>{projects}</div>
      </Section>
    );
  }
}

export default PortfolioSection;

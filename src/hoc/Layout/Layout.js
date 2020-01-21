import React, { Component } from 'react';
import Auxiliary from './../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDraw from '../../components/Navigation/SideDraw/SideDraw';
import Footer from './../../components/Navigation/Footer/Footer';

import Resume from './../../assets/NickMarcionese_Resume.pdf';

class Layout extends Component {
  state = {
    showMobileNav: false,
    resumeURL: Resume,
    githubURL: 'https://github.com/nmarcionese',
    linkedinURL: 'https://www.linkedin.com/in/nick-marcionese-39504189/'
  };

  componentDidMount() {
    this.setState({
      resumeURL: Resume
    });
  }

  showMobileNavHandler = () => {
    this.setState({ showMobileNav: true });
  };

  closeSideDrawHandler = () => {
    this.setState({ showMobileNav: !this.state.showMobileNav });
  };

  layoutClickHandler = event => {
    window.open(event.currentTarget.dataset.url, 'target=_blank');
  };

  render() {
    return (
      <Auxiliary>
        <Toolbar
          resumeClicked={event => this.layoutClickHandler(event)}
          resumeURL={this.state.resumeURL}
          clicked={this.showMobileNavHandler}
        />
        <SideDraw
          resumeClicked={event => this.layoutClickHandler(event)}
          resumeURL={this.state.linkedinURL}
          className={this.state.showMobileNavHandler ? 'Open' : 'Close'}
          show={this.state.showMobileNav}
          clicked={this.closeSideDrawHandler}
        />
        <main className={classes.MainSection}>{this.props.children}</main>
        <Footer
          clicked={event => this.layoutClickHandler(event)}
          githubURL={this.state.githubURL}
          linkedinURL={this.state.linkedinURL}
        />
      </Auxiliary>
    );
  }
}

export default Layout;

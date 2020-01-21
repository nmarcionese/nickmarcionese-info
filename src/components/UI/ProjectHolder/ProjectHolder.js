import React from 'react';
import classes from './ProjectHolder.module.css';

import ExternalImage from './../../../assets/external-link-symbol.png';
import GithubLogo from './../../../components/Navigation/GithubLogo/GithubLogo';

const ProjectHolder = props => {
  let technologyList = null;
  if (props.techList) {
    technologyList = (
      <ul className={classes.TechList}>
        {props.techList.map(item => {
          return (
            <li key={item} className={classes.TechListItem}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  }

  let clickIcons = null;

  if (props.githubURL || props.externalURL) {
      console.log(props.clicked)
    clickIcons = (
      <ul className={classes.clickIcons}>
        {props.githubURL ? (
          <li data-url={props.githubURL} onClick={(event) => props.clicked(event)}><GithubLogo /></li>
        ) : null}
        {props.externalURL ? (
          <li data-url={props.externalURL} onClick={(event) => props.clicked(event)}>
            <div style={{backgroundImage: `url(${ExternalImage})`}}></div>
          </li>
        ) : null}
      </ul>
    );
  }

  return (
    <div className={classes.ProjectItem}>
      <div className={classes.ProjectImageHolder}>
        <img src={props.imageURL} alt={props.name} />
      </div>
      {technologyList}
      {clickIcons}
    </div>
  );
};

export default ProjectHolder;

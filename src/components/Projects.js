import React from 'react';

import Card from './Card.js';
import SectionTitle from './SectionTitle';

import img_inTune from '../images/cardImage_inTune.png';
import img_prepd from '../images/cardImage_prepd.png';
import img_yahoo from '../images/cardImage_yahoo.png';
import img_parking from '../images/cardImage_parking.png';

const projects_web = [
  {
    title: 'intune visualizer',
    descr: 'A web app for Spotify and Last.fm users to visualize the music history and genres of themselves and their friends',
    image: img_inTune,
    tags: ['HTML', 'CSS', 'bootstrap', 'javascript', 'jquery', 'firebase', 'node.js', 'last.fm api'],
    color: '#709CE3',
    link: undefined
  },
  {
    title: 'prepd',
    descr: 'A web app to aid meal prepping by supplying the user with quick access to recipes and easy organization',
    image: img_prepd,
    tags: ['HTML', 'CSS', 'bootstrap', 'javascript', 'jquery', 'node.js'],
    color: '#FFAC46',
    link: undefined
  },
  {
    title: 'PROJECT TITLE3',
    descr: 'Lorem ipsum yada yadda something something cool here sweet and simple',
    image: undefined
  },
  {
    title: 'PROJECT TITLE4',
    descr: 'Lorem ipsum yada yadda something something cool here sweet and simple',
    image: undefined
  },
];

const projects_figma = [
  {
    title: 'yahoo mobile redesign',
    descr: 'Check out the creative process behind redesigning mobile to improve user experience & satisfaction',
    image: img_yahoo,
    tags: ['Figma', 'user testing', 'wireframing', 'prototyping'],
    color: '#B187F3',
    link: undefined
  },
  {
    title: 'proj. parking fine',
    descr: 'A potential solution to remedy the parking frustrations of various users on UCSD\'s campus',
    image: img_parking,
    tags: ['Figma', 'storyboarding', 'diagramming', 'wireframing', 'prototyping', 'user testing'],
    color: '#536D90',
    link: undefined
  },
];


const Others = (props) => {
  return (
    <div className={props.screenWidth > 768 ? 'cardsDesktop' : 'cardsMobile'}>
      {props.projects.map((card) => 
        <Card key={card.title.toString()} 
              title={card.title}
              desc={card.descr}
              image={card.image} 
              tags={card.tags}
              color={card.color}
              link={card.link}
              />
      )}
      
      {(props.screenWidth <= 768) && <div className='cardLast'> </div>}
    </div>
  );
}


class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <div id='anchor_projects' className='anchor'></div>
        <SectionTitle title='projects'/> 

        <h4> RECENT </h4>
        <h4> WEB DEVELOPMENT </h4>
        <Others projects={projects_web} screenWidth={this.props.screenWidth} />
        <h4> FIGMA PROTOTYPES & DESIGNS </h4>
        <Others projects={projects_figma} screenWidth={this.props.screenWidth} />
      </div> 
    );
  }
}

export default Projects
import React from 'react';

import Card from './Card.js';
import SectionTitle from './SectionTitle';

import img_inTune from '../images/cardImage_inTune.png';
import img_prepd from '../images/cardImage_prepd.png';
import img_yahoo from '../images/cardImage_yahoo.png';
import img_parking from '../images/cardImage_parking.jpg';
import img_csa from '../images/cardImage_csa.png';


const projects_recent = [
  {
    title: 'hour memo',
    descr: 'A web app for Spotify and Last.fm users to visualize the music history and genres of themselves and their friends',
    image: undefined,
    tags: ['HTML', 'CSS', 'bootstrap', 'javascript', 'jquery', 'firebase', 'node.js', 'last.fm api'],
    color: '#87B573',
    github: 'https://github.com/aktov/inTuneVisualizer',
    link: undefined,
  },
  {
    title: 'csa website design',
    descr: 'A website prototype for Cambodian Student Association @UCSD, built for desktop and mobile',
    image: img_csa,
    tags: ['Figma', 'wireframing', 'prototyping', 'user testing'],
    color: '#DA8484',
    figma: 'https://github.com/aktov/Prepd',
    link: undefined
  },
];
const projects_web = [
  {
    title: 'intune visualizer',
    descr: 'A web app for Spotify and Last.fm users to visualize the music history and genres of themselves and their friends',
    image: img_inTune,
    tags: ['HTML', 'CSS', 'bootstrap', 'javascript', 'jquery', 'firebase', 'node.js', 'last.fm api'],
    color: '#709CE3',
    github: 'https://github.com/aktov/inTuneVisualizer',
    link: undefined,
  },
  {
    title: 'prepd',
    descr: 'A web app to aid meal prepping by supplying the user with quick access to recipes and easy organization',
    image: img_prepd,
    tags: ['HTML', 'CSS', 'bootstrap', 'javascript', 'jquery', 'node.js'],
    color: '#FFAC46',
    github: 'https://github.com/aktov/Prepd',
    link: undefined
  },
];

const projects_figma = [
  {
    title: 'portfolio design',
    descr: 'The design of this current portfolio, first prototyped on figma',
    image: undefined,
    tags: ['Figma', 'prototyping'],
    color: '#D34F67',
    figma: 'true',
    link: undefined
  },
  {
    title: 'yahoo mobile redesign',
    descr: 'Here\'s the creative process behind redesigning mobile to improve user experience & satisfaction',
    image: img_yahoo,
    tags: ['Figma', 'user testing', 'wireframing', 'prototyping'],
    color: '#B187F3',
    figma: 'https://www.figma.com/proto/pUOIhb7GiEGQeFotepQkQY/COGS-187A-Final-(Copy)?node-id=21%3A175&scaling=scale-down',
    link: undefined
  },
  {
    title: 'proj. parking fine',
    descr: 'A potential solution to remedy the parking frustrations of various users on UCSD\'s campus',
    image: img_parking,
    tags: ['Figma', 'storyboarding', 'diagramming', 'wireframing', 'prototyping', 'user testing'],
    color: '#536D90',
    figma: 'https://www.figma.com/proto/FJIhLsq3WEDOox5VfArU3fuF/Parking-Fine-Kiosk?node-id=5%3A2&scaling=contain',
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
              github={card.github}
              figma={card.figma}
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
      <div className='projects' style={this.props.screenWidth > 768 ? {width: '90%'} : null}>
        <div id='anchor_projects' className='anchor'></div>
        <SectionTitle title='projects'/> 

        <h4> RECENT </h4>
        <Others projects={projects_recent} screenWidth={this.props.screenWidth} />
        <h4> WEB DEVELOPMENT </h4>
        <Others projects={projects_web} screenWidth={this.props.screenWidth} />
        <h4> FIGMA PROTOTYPES & DESIGNS </h4>
        <Others projects={projects_figma} screenWidth={this.props.screenWidth} />
      </div> 
    );
  }
}

export default Projects
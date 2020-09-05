import React from 'react';

import Card from './ProjectCard.js';
import SectionTitle from './SectionTitle';

import img_parking from '../images/cardImage_parking.png';
import img_inTune from '../images/cardImage_inTune.png';

const projectCards = [
  {
    title: 'yahoo mobile redesign',
    descr: 'Initial user testing on students found that the Yahoo mobile site had several key usability issues. My team and I prototyped redesigns of Yahoo’s site for mobile, which aimed to increase efficiency and decrease user errors.',
    image: undefined,
    tags: ['Figma', 'user testing', 'wireframing', 'prototyping'],
    color: '#B187F3',
    link: undefined
  },
  {
    title: 'PROJ PARKING FINE',
    descr: 'A potential solution to remedy the parking frustrations of various users on campus',
    image: img_parking,
    tags: ['Figma', 'storyboarding', 'diagramming', 'wireframing', 'prototyping', 'user testing'],
    color: '#536D90',
    link: undefined
  },
  {
    title: 'INTUNE VISUALIZER',
    descr: 'A web app for Spotify and Last.fm users to visualize the music history and genres of themselves and their friends',
    image: img_inTune,
    tags: ['HTML', 'CSS', 'bootstrap', 'javascript', 'jquery', 'firebase', 'node.js', 'last.fm api'],
    color: '#709CE3',
    link: undefined
  },
  {
    title: 'PREPD',
    descr: 'A web app to aid meal prepping by supplying the user with quick access to recipes and easy organization',
    image: undefined,
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


const Others = (props) => {
  return (
    <div className={props.screenWidth > 768 ? 'cardsDesktop' : 'cardsMobile'}>
      {projectCards.map((card) => 
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
        <SectionTitle title='projects'/> 

        <h4> RECENT </h4>
        <h4> OTHER PROJECTS </h4>
        <Others screenWidth={this.props.screenWidth} />

      </div> 
    );
  }
}

export default Projects
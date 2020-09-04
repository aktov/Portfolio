import React from 'react';
import '../App.scss';

import Card from './ProjectCard.js';
import SectionTitle from './SectionTitle';

import img_parking from '../images/cardImage_parking.png';
import img_inTune from '../images/cardImage_inTune.png';

const projectCards = [
  {
    title: 'PROJECT TITLE',
    descr: 'Lorem ipsum yada yadda something something cool here sweet and simple',
    image: undefined
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
    descr: 'Lorem ipsum yada yadda something something cool here sweet and simple',
    image: img_inTune
  },
  {
    title: 'PROJECT TITLE2',
    descr: 'Lorem ipsum yada yadda something something cool here sweet and simple',
    image: undefined
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
      
      {!(props.screenWidth > 768) && <div className='cardLast'> </div>}
    </div>
  );
}


class Projects extends React.Component {
  render() {
    return (
      <div className='projects'>
        <SectionTitle title='projects'/> 

        <h3> RECENT </h3>
        <h3> OTHER PROJECTS </h3>
        <Others screenWidth={this.props.screenWidth} />

      </div> 
    );
  }
}

export default Projects
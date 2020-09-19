import React from 'react';

import Card from './Card.js';
import SectionTitle from './SectionTitle';

import img_inTune from '../images/cardImage_inTune.png';
import img_prepd from '../images/cardImage_prepd.png';
import img_yahoo from '../images/cardImage_yahoo.png';
import img_parking from '../images/cardImage_parking.png';
import img_csa from '../images/cardImage_csa.png';
import img_portfolio from '../images/cardImage_portfolio.png';
import img_chrispy from '../images/cardImage_chrispy.png';
import img_memo from '../images/cardImage_memo.png';


const projects_figma = [
  {
    title: 'this portfolio',
    descr: 'Check out the mobile & desktop prototypes of the first iteration of this current portfolio',
    image: img_portfolio,
    tags: ['Figma', 'prototyping'],
    color: '#93B0E9',
    figma: 'https://www.figma.com/proto/7zBJtA5xKYSNlq1RKzRwJa/Portfolio?node-id=1%3A2&scaling=scale-down-width&hide-ui=1',
    link: undefined
  },
  {
    title: 'memos',
    descr: 'A partial prototype of a quick and simple to-do list app to keep track of your personal tasks',
    image: img_memo,
    tags: ['Figma', 'prototyping'],
    color: '#ABD7BD',
    figma: 'https://www.figma.com/proto/pYpfd7iu01oqtaIC9lmUkQ/Memo-App?node-id=3%3A545&viewport=553%2C217%2C0.19214384257793427&scaling=scale-down',
  },
  {
    title: 'chrispyroll',
    descr: 'A mockup mimicry of the desktop version of twist.moe, with two different versions A & B',
    image: img_chrispy,
    tags: ['Figma', 'mockup'],
    color: '#E1B4D5',
    figma: 'https://www.figma.com/proto/KMOZJky4Yot11PJTmKXvOH/chrispyroll?node-id=3%3A1202&scaling=scale-down-width&hide-ui=1',
  },
];
const projects_design = [
  {
    title: 'csa website design',
    descr: 'A website prototype for Cambodian Student Association @UCSD, built for desktop & mobile',
    image: img_csa,
    tags: ['Figma', 'wireframing', 'prototyping', 'user testing'],
    color: '#DA8484',
    figma: 'https://github.com/aktov/Prepd',
    link: ' '
  },
  {
    title: 'yahoo mobile redesign',
    descr: 'The creative process behind redesigning mobile to improve user experience & satisfaction',
    image: img_yahoo,
    tags: ['Figma', 'user testing', 'wireframing', 'prototyping'],
    color: '#B187F3',
    figma: 'https://www.figma.com/proto/pUOIhb7GiEGQeFotepQkQY/COGS-187A-Final-(Copy)?node-id=21%3A175&scaling=scale-down',
    link: ' '
  },
  {
    title: 'parking fine',
    descr: 'A potential remedy to the parking frustrations of various users on UCSD\'s campus',
    image: img_parking,
    tags: ['Figma', 'storyboarding', 'diagramming', 'wireframing', 'prototyping', 'user testing'],
    color: '#536D90',
    figma: 'https://www.figma.com/proto/FJIhLsq3WEDOox5VfArU3fuF/Parking-Fine-Kiosk?node-id=5%3A2&scaling=contain',
    link: ' '
  },
];
const projects_web = [
  // {
  //   title: 'hour memo',
  //   descr: 'A web app for Spotify and Last.fm users to visualize the music history and genres of themselves and their friends',
  //   image: undefined,
  //   tags: ['HTML', 'CSS', 'bootstrap', 'javascript', 'jquery', 'firebase', 'node.js', 'last.fm api'],
  //   color: '#87B573',
  //   github: undefined,
  //   link: undefined,
  // },
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
              screenWidth={props.screenWidth}
              />
      )}
      
      {(props.screenWidth <= 768) && <div className='cardLast'> </div>}
    </div>
  );
}


class Projects extends React.Component {
  render() {
    return (
      <div className='projects' style={this.props.screenWidth > 768 ? {width: '95%'} : null}>
        <div id='anchor_projects' className='anchor'></div>
        <SectionTitle title='projects'/> 

        <h4> FIGMA PROTOTYPES & MOCKUPS </h4>
        <Others projects={projects_figma} screenWidth={this.props.screenWidth} />
        <h4> USER-CENTERED DESIGN PROCESSES </h4>
        <Others projects={projects_design} screenWidth={this.props.screenWidth} />
        {/* <h4> WEB DEVELOPMENT </h4>
        <Others projects={projects_web} screenWidth={this.props.screenWidth} /> */}
      </div> 
    );
  }
}

export default Projects
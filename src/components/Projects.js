import React from 'react';
import LazyLoad from 'react-lazyload';

import Card from './Card.js';
import SectionTitle from './SectionTitle';

import imgM_inTune from '../images/cardImageM_inTune.png';
import imgM_prepd from '../images/cardImageM_prepd.png';
import imgM_yahoo from '../images/cardImageM_yahoo.png';
import imgM_parking from '../images/cardImageM_parking.png';
import imgM_csa from '../images/cardImageM_csa.png';
import imgM_portfolio from '../images/cardImageM_portfolio.png';
import imgM_chrispy from '../images/cardImageM_chrispy.png';
import imgM_memo from '../images/cardImageM_memo.png';

import img_portfolio from '../images/cardImage_portfolio.png';
import img_memo from '../images/cardImage_memo.png';
import img_chrispy from '../images/cardImage_chrispy.png';
import img_csa from '../images/cardImage_csa.png';
import img_yahoo from '../images/cardImage_yahoo.png';
import img_parking from '../images/cardImage_parking.png';

const projects_figma = [
  {
    title: 'this portfolio',
    descr: 'Check out the mobile & desktop prototypes of the first iteration of this current portfolio',
    image: img_portfolio,
    imageM: imgM_portfolio,
    tags: ['Figma', 'prototyping'],
    color: '#93B0E9',
    figmaD: 'https://www.figma.com/proto/7zBJtA5xKYSNlq1RKzRwJa/Portfolio?node-id=1%3A2&scaling=scale-down-width&hide-ui=1',
    figmaM: 'https://www.figma.com/proto/7zBJtA5xKYSNlq1RKzRwJa/Portfolio?node-id=82%3A0&viewport=243%2C287%2C0.09107169508934021&scaling=scale-down',
    link: undefined
  },
  {
    title: 'memos',
    descr: 'A partial prototype of a quick and simple to-do list app to keep track of your personal tasks',
    image: img_memo,
    imageM: imgM_memo,
    tags: ['Figma', 'prototyping'],
    color: '#ABD7BD',
    figma: 'https://www.figma.com/proto/pYpfd7iu01oqtaIC9lmUkQ/Memo-App?node-id=3%3A545&viewport=553%2C217%2C0.19214384257793427&scaling=scale-down',
  },
  {
    title: 'chrispyroll',
    descr: 'A mockup mimicry of the desktop version of twist.moe, with two different versions A & B',
    image: img_chrispy,
    imageM: imgM_chrispy,
    tags: ['Figma', 'mockup'],
    color: '#E1B4D5',
    figmaA: 'https://www.figma.com/proto/KMOZJky4Yot11PJTmKXvOH/chrispyroll?node-id=3%3A0&viewport=157%2C214%2C0.18325643241405487&scaling=scale-down-width&hide-ui=1',
    figmaB: 'https://www.figma.com/proto/KMOZJky4Yot11PJTmKXvOH/chrispyroll?node-id=3%3A1135&viewport=293%2C331%2C0.18345798552036285&scaling=scale-down-width&hide-ui=1',
  },
];
const projects_design = [
  {
    title: 'csa website design',
    descr: 'A website prototype for Cambodian Student Association @UCSD, built for desktop & mobile',
    image: img_csa,
    imageM: imgM_csa,
    tags: ['Figma', 'wireframing', 'prototyping', 'user testing'],
    color: '#DA8484',
    figmaD: 'https://www.figma.com/proto/RGXkafFb1qTKCbGmfZSUDq/COGS187B-Final-Prototype?node-id=236%3A2&scaling=scale-down-width',
    figmaM: 'https://www.figma.com/proto/HK3nRrbz73hPQqSlTNTDmu/COGS187B-Final-Prototype-Copy?node-id=241%3A0&scaling=contain',
    link: ' '
  },
  {
    title: 'yahoo mobile redesign',
    descr: 'The creative process behind redesigning mobile to improve user experience & satisfaction',
    image: img_yahoo,
    imageM: imgM_yahoo,
    tags: ['Figma', 'user testing', 'wireframing', 'prototyping'],
    color: '#C19FF7',
    figma: 'https://www.figma.com/proto/pUOIhb7GiEGQeFotepQkQY/COGS-187A-Final-(Copy)?node-id=21%3A175&scaling=scale-down',
    link: ' '
  },
  {
    title: 'parking fine',
    descr: 'A potential remedy to the parking frustrations of various users on UCSD\'s campus',
    image: img_parking,
    imageM: imgM_parking,
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
    imageM: imgM_inTune,
    tags: ['HTML', 'CSS', 'bootstrap', 'javascript', 'jquery', 'firebase', 'node.js', 'last.fm api'],
    color: '#709CE3',
    github: 'https://github.com/aktov/inTuneVisualizer',
    link: undefined,
  },
  {
    title: 'prepd',
    descr: 'A web app to aid meal prepping by supplying the user with quick access to recipes and easy organization',
    imageM: imgM_prepd,
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
        <LazyLoad height={200} offset={100} overflow={true}>
          <Card key={card.title.toString()} 
                title={card.title}
                desc={card.descr}
                image={card.image} 
                imageM={card.imageM}
                tags={card.tags}
                color={card.color}
                github={card.github}
                figmaD={card.figmaD}
                figmaM={card.figmaM}
                figmaA={card.figmaA}
                figmaB={card.figmaB}
                figma={card.figma}
                link={card.link}
                screenWidth={props.screenWidth}
          />
        </LazyLoad>  
      )}
      
      {(props.screenWidth <= 768) && <div className='cardLast'> </div>}
    </div>
  );
}


class Projects extends React.Component {
  render() {
    return (
      <div className='projects'> {/*style={this.props.screenWidth > 768 ? {width: '100%'} : null}>*/}
        <div id='anchor_projects' className='anchor'></div>
        <SectionTitle title='projects'/> 

        <h4 style={{marginBottom: '.625rem'}}> FIGMA PROTOTYPES & MOCKUPS </h4>
        <Others projects={projects_figma} screenWidth={this.props.screenWidth} />
        <h4 style={{marginBottom: '.625rem'}}> USER-CENTERED DESIGN PROCESSES </h4>
        <Others projects={projects_design} screenWidth={this.props.screenWidth} />
        {/* <h4 style={{marginBottom: '.625rem'}}> WEB DEVELOPMENT </h4>
        <Others projects={projects_web} screenWidth={this.props.screenWidth} /> */}
      </div> 
    );
  }
}

export default Projects
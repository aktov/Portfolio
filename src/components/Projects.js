import React from 'react';
import LazyLoad from 'react-lazyload';

import Card from './Card.js';
import SectionTitle from './SectionTitle';

// import imgM_inTune from '../images/cardImageM_inTune.png';
// import imgM_prepd from '../images/cardImageM_prepd.png';
// Mobile images
// import imgM_portfolio from '../images/cardImageM_portfolio.png';
import imgM_memo from '../images/cardImageM_memo.png';
import imgM_chrispy from '../images/cardImageM_chrispy.png';
import imgM_boba from '../images/cardImageM_boba.png';
import imgM_signup from '../images/cardImageM_signup.png';
import imgM_hon from '../images/cardImageM_hon.png';
import imgM_csa from '../images/cardImageM_csa.png';
import imgM_yahoo from '../images/cardImageM_yahoo.png';
import imgM_parking from '../images/cardImageM_parking.png';
// Desktop images
// import img_portfolio from '../images/cardImage_portfolio.png';
import img_memo from '../images/cardImage_memo.png';
import img_chrispy from '../images/cardImage_chrispy.png';
import img_boba from '../images/cardImage_boba.png';
import img_signup from '../images/cardImage_signup.png';
import img_hon from '../images/cardImage_hon.png';
import img_csa from '../images/cardImage_csa.png';
import img_yahoo from '../images/cardImage_yahoo.png';
import img_parking from '../images/cardImage_parking.png';

const projects_figma = [
  {
    title: 'memos',
    descr: 'A partial prototype of a quick and simple to-do list app to keep track of your personal tasks',
    image: img_memo,
    imageM: imgM_memo,
    tags: ['prototyping'],
    color: '#ABD7BD',
    figma: 'https://www.figma.com/proto/pYpfd7iu01oqtaIC9lmUkQ/Memo-App?node-id=3%3A545&viewport=553%2C217%2C0.19214384257793427&scaling=scale-down',
    default: 'https://www.figma.com/proto/pYpfd7iu01oqtaIC9lmUkQ/Memo-App?node-id=3%3A545&viewport=553%2C217%2C0.19214384257793427&scaling=scale-down'
  },
  {
    title: 'chrispyroll',
    descr: 'A mockup mimicry of the desktop version of twist.moe, with two different versions A & B',
    image: img_chrispy,
    imageM: imgM_chrispy,
    tags: ['mockup'],
    color: '#E1B4D5',
    figmaA: 'https://www.figma.com/proto/KMOZJky4Yot11PJTmKXvOH/chrispyroll?node-id=3%3A0&viewport=157%2C214%2C0.18325643241405487&scaling=scale-down-width&hide-ui=1',
    figmaB: 'https://www.figma.com/proto/KMOZJky4Yot11PJTmKXvOH/chrispyroll?node-id=3%3A1135&viewport=293%2C331%2C0.18345798552036285&scaling=scale-down-width&hide-ui=1',
    default: 'https://www.figma.com/proto/KMOZJky4Yot11PJTmKXvOH/chrispyroll?node-id=3%3A0&viewport=157%2C214%2C0.18325643241405487&scaling=scale-down-width&hide-ui=1',
  },
  // {
  //   title: 'portfolio prototype',
  //   descr: 'Check out the mobile & desktop prototypes of the first iteration of this current portfolio',
  //   image: img_portfolio,
  //   imageM: imgM_portfolio,
  //   tags: ['Figma', 'prototyping'],
  //   color: '#93B0E9',
  //   figmaD: 'https://www.figma.com/proto/7zBJtA5xKYSNlq1RKzRwJa/Portfolio?node-id=1%3A2&scaling=scale-down-width&hide-ui=1',
  //   figmaM: 'https://www.figma.com/proto/7zBJtA5xKYSNlq1RKzRwJa/Portfolio?node-id=82%3A0&viewport=243%2C287%2C0.09107169508934021&scaling=scale-down',
  //   link: undefined
  // },
];
const projects_design = [
  {
    title: 'boba tracker (coming soon)',
    descr: 'An app design for boba tea enthusiasts to record and track their purchases and spending!',
    image: img_boba,
    imageM: imgM_boba,
    tags: ['user testing', 'prototyping'],
    color: '#E0F1F3',
    figma: 'https://www.figma.com/proto/A4YCf5Qx8THEGF7iDGfwJa/Boba-Buddy?node-id=6%3A755&viewport=589%2C191%2C0.09667579084634781&scaling=scale-down',
    default: 'https://www.figma.com/proto/A4YCf5Qx8THEGF7iDGfwJa/Boba-Buddy?node-id=6%3A755&viewport=589%2C191%2C0.09667579084634781&scaling=scale-down'
  },
  {
    title: 'edushare (coming soon)',
    descr: 'A sign up flow for an app where teachers can socialize and share ideas in one community!',
    image: img_signup,
    imageM: imgM_signup,
    tags: ['wireframing', 'mockups'],
    color: '#BBE2F2',
    figma: 'https://www.figma.com/proto/zMITtMqtG9hcvJLDGtUC8G/Edushare?node-id=10%3A84&viewport=-523%2C272%2C0.2671932876110077&scaling=scale-down',
    default: 'https://www.figma.com/proto/zMITtMqtG9hcvJLDGtUC8G/Edushare?node-id=10%3A84&viewport=-523%2C272%2C0.2671932876110077&scaling=scale-down'
  },
  {
    title: 'hon-media blogsite design',
    descr: 'A desktop design for Hon-Media\'s upcoming blog website.',
    image: img_hon,
    imageM: imgM_hon,
    tags: ['prototyping'],
    color: '#9F9FDF',
    figma: 'https://www.figma.com/proto/4IWvFVdQfykksXa7kEZE95/blog.hon-media?node-id=266%3A5650&viewport=8238%2C659%2C0.7337678074836731&scaling=scale-down-width',
    link: '/hon'
  },
  {
    title: 'csa website design',
    descr: 'A website prototype for Cambodian Student Association @UCSD, built for desktop & mobile!',
    image: img_csa,
    imageM: imgM_csa,
    tags: ['wireframing', 'prototyping', 'user testing'],
    color: '#DA8484',
    figmaD: 'https://www.figma.com/proto/HK3nRrbz73hPQqSlTNTDmu/CSA-Website-Design?node-id=236%3A2&viewport=147%2C303%2C0.03458884358406067&scaling=scale-down-width',
    figmaM: 'https://www.figma.com/proto/HK3nRrbz73hPQqSlTNTDmu/CSA-Website-Design?node-id=241%3A0&viewport=176%2C217%2C0.07083262503147125&scaling=scale-down',
    link: '/csa'
  },
  {
    title: 'yahoo mobile redesign',
    descr: 'The creative process behind redesigning mobile to improve user experience & satisfaction.',
    image: img_yahoo,
    imageM: imgM_yahoo,
    tags: ['user testing', 'wireframing', 'prototyping'],
    color: '#C19FF7',
    figma1: 'https://www.figma.com/proto/pUOIhb7GiEGQeFotepQkQY/Yahoo-Mobile-Redesign?node-id=2%3A3&viewport=177%2C180%2C0.07531154155731201&scaling=scale-down',
    figma2:'https://www.figma.com/proto/pUOIhb7GiEGQeFotepQkQY/Yahoo-Mobile-Redesign?node-id=21%3A175&viewport=368%2C198%2C0.09464660286903381&scaling=scale-down',
    link: '/yahoo'
  },
  {
    title: 'parking fine',
    descr: 'A potential remedy to the parking frustrations of various users on UCSD\'s campus.',
    image: img_parking,
    imageM: imgM_parking,
    tags: ['storyboarding', 'diagramming', 'wireframing', 'prototyping', 'user testing'],
    color: '#536D90',
    figma: 'https://www.figma.com/proto/FJIhLsq3WEDOox5VfArU3fuF/Parking-Fine-Kiosk?node-id=5%3A2&scaling=contain',
    link: '/parking'
  },
];
// const projects_web = [
//   {
//     title: 'hour memo',
//     descr: 'A web app for Spotify and Last.fm users to visualize the music history and genres of themselves and their friends',
//     image: undefined,
//     tags: ['HTML', 'CSS', 'bootstrap', 'javascript', 'jquery', 'firebase', 'node.js', 'last.fm api'],
//     color: '#87B573',
//     github: undefined,
//     link: undefined,
//   },
//   {
//     title: 'intune visualizer',
//     descr: 'A web app for Spotify and Last.fm users to visualize the music history and genres of themselves and their friends',
//     imageM: imgM_inTune,
//     tags: ['HTML', 'CSS', 'bootstrap', 'javascript', 'jquery', 'firebase', 'node.js', 'last.fm api'],
//     color: '#709CE3',
//     github: 'https://github.com/aktov/inTuneVisualizer',
//     link: undefined,
//   },
//   {
//     title: 'prepd',
//     descr: 'A web app to aid meal prepping by supplying the user with quick access to recipes and easy organization',
//     imageM: imgM_prepd,
//     tags: ['HTML', 'CSS', 'bootstrap', 'javascript', 'jquery', 'node.js'],
//     color: '#FFAC46',
//     github: 'https://github.com/aktov/Prepd',
//     link: undefined
//   },
// ];



const Others = (props) => {
  return (
    <div className={props.screenWidth > 768 ? 'cardsDesktop' : 'cardsMobile'}>
      {props.projects.map((card) => 
        <LazyLoad 
          height={200} 
          offset={100} 
          overflow={true}
          key={card.title.toString()}
        >
          <Card
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
            figma1={card.figma1}
            figma2={card.figma2}
            figma={card.figma}
            default={card.default}
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
      <div 
        className='projects'
        data-aos='fade' 
        data-aos-offset='50' 
        data-aos-easing='ease-out-sine'
        data-aos-duration='400'
        data-aos-once={true}
      > {/*style={this.props.screenWidth > 768 ? {width: '100%'} : null}>*/}
        <div id='anchor_projects' className='anchor'></div>
        <SectionTitle title='projects'/> 

        <h4 style={{marginBottom: '.625rem'}}> {'user-centered design processes'.toUpperCase()} </h4>
        <Others projects={projects_design} screenWidth={this.props.screenWidth} />
        <h4 style={{ marginBottom: '.625rem' }}> {'mockups & prototypes'.toUpperCase()} </h4>
        <Others projects={projects_figma} screenWidth={this.props.screenWidth} />
        {/* <h4 style={{marginBottom: '.625rem'}}> WEB DEVELOPMENT </h4>
        <Others projects={projects_web} screenWidth={this.props.screenWidth} /> */}
      </div> 
    );
  }
}

export default Projects
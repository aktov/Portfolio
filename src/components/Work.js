import React from 'react';
// import LazyLoad from 'react-lazyload';

import Card from './Card.js';
import Title from './Title';

// Mobile images
import imgM_okizeme from '../images/Thumbnails/Mobile/cardImageM_okizeme.png';
import imgM_flowers from '../images/Thumbnails/Mobile/cardImageM_flowers.png';
import imgM_memo from '../images/Thumbnails/Mobile/cardImageM_memo.png';
import imgM_alike from '../images/Thumbnails/Mobile/cardImageM_alike.png';
import imgM_boba from '../images/Thumbnails/Mobile/cardImageM_boba.png';
import imgM_edushare from '../images/Thumbnails/Mobile/cardImageM_edushare.png';
import imgM_hon from '../images/Thumbnails/Mobile/cardImageM_hon.png';
import imgM_csa from '../images/Thumbnails/Mobile/cardImageM_csa.png';

// Desktop images
import img_okizeme from '../images/Thumbnails/Desktop/cardImage_okizeme.png';
import img_flowers from '../images/Thumbnails/Desktop/cardImage_flowers.png';
import img_memo from '../images/Thumbnails/Desktop/cardImage_memo.png';
import img_alike from '../images/Thumbnails/Desktop/cardImage_alike.png';
import img_boba from '../images/Thumbnails/Desktop/cardImage_boba.png';
import img_edushare from '../images/Thumbnails/Desktop/cardImage_edushare.png';
import img_hon from '../images/Thumbnails/Desktop/cardImage_hon.png';
import img_csa from '../images/Thumbnails/Desktop/cardImage_csa.png';

const projects_mocks = [
  {
    title: 'boba tracker',
    descr: 'An app design for boba tea enthusiasts to record and track their purchases and spending.',
    image: img_boba,
    imageM: imgM_boba,
    tags: ['wireframing', 'mockups', 'user testing'],
    color: '#E0F1F3',
    color2: '#BEE3E8',
    figma: 'https://www.figma.com/proto/A4YCf5Qx8THEGF7iDGfwJa/Boba-Buddy?node-id=6%3A755&viewport=589%2C191%2C0.09667579084634781&scaling=scale-down',
    // default: 'https://www.figma.com/proto/A4YCf5Qx8THEGF7iDGfwJa/Boba-Buddy?node-id=6%3A755&viewport=589%2C191%2C0.09667579084634781&scaling=scale-down'
    link: '/boba'
  },
  {
    title: 'flowers',
    descr: 'A simple check-out flow for a website where you can buy, gift, and send flowers to other people of your choice.',
    image: img_flowers,
    imageM: imgM_flowers,
    tags: ['mockups', 'prototyping'],
    color: '#92C999',
    figma: 'https://www.figma.com/proto/zMITtMqtG9hcvJLDGtUC8G/Edushare?node-id=10%3A84&viewport=-523%2C272%2C0.2671932876110077&scaling=scale-down',
    link: '/flowers'
  },
  {
    title: 'edushare',
    descr: 'An onboarding flow for an app where teachers can socialize and share ideas in one community.',
    image: img_edushare,
    imageM: imgM_edushare,
    tags: ['wireframing', 'mockups', 'prototyping'],
    color: '#BBE2F2',
    figma: 'https://www.figma.com/proto/zMITtMqtG9hcvJLDGtUC8G/Edushare?node-id=10%3A84&viewport=-523%2C272%2C0.2671932876110077&scaling=scale-down',
    link: '/edushare'
  },
  // {
  //   title: 'memos',
  //   descr: 'A partial prototype of a quick and simple to-do list app to keep track of your personal tasks.',
  //   image: img_memo,
  //   imageM: imgM_memo,
  //   tags: ['prototyping'],
  //   color: '#BFDFCC',
  //   figma: 'https://www.figma.com/proto/pYpfd7iu01oqtaIC9lmUkQ/Memo-App?node-id=3%3A545&viewport=553%2C217%2C0.19214384257793427&scaling=scale-down',
  //   default: 'https://www.figma.com/proto/pYpfd7iu01oqtaIC9lmUkQ/Memo-App?node-id=3%3A545&viewport=553%2C217%2C0.19214384257793427&scaling=scale-down'
  // },
  // {
  //   title: 'chrispyroll',
  //   descr: 'A mockup mimicry of the desktop version of twist.moe, with two different versions A & B',
  //   image: img_chrispy,
  //   imageM: imgM_chrispy,
  //   tags: ['mockup'],
  //   color: '#E1B4D5',
  //   figmaA: 'https://www.figma.com/proto/KMOZJky4Yot11PJTmKXvOH/chrispyroll?node-id=3%3A0&viewport=157%2C214%2C0.18325643241405487&scaling=scale-down-width&hide-ui=1',
  //   figmaB: 'https://www.figma.com/proto/KMOZJky4Yot11PJTmKXvOH/chrispyroll?node-id=3%3A1135&viewport=293%2C331%2C0.18345798552036285&scaling=scale-down-width&hide-ui=1',
  //   default: 'https://www.figma.com/proto/KMOZJky4Yot11PJTmKXvOH/chrispyroll?node-id=3%3A0&viewport=157%2C214%2C0.18325643241405487&scaling=scale-down-width&hide-ui=1',
  // },
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
const projects_casestudies = [
  {
    title: 'alike',
    descr: 'A showcase of the work I\'ve done for my current internship at Alike!',
    image: img_alike,
    imageM: imgM_alike,
    tags: ['wireframing', 'prototyping', 'user testing'],
    color: '#688CD0',
    // default: 'https://www.alike.dating/',
    link: '/alike'
  },
  {
    title: 'okizeme',
    descr: 'A modern redesign that better incorporates my client\'s company branding.',
    image: img_okizeme,
    imageM: imgM_okizeme,
    tags: ['prototyping'],
    color: '#F5C0B9',
    figmaM: 'https://www.figma.com/proto/MgWQKucfltlZVzvE0cxUhQ/Okizeme-Design?page-id=106%3A81&node-id=106%3A82&viewport=366%2C-150%2C0.25410154461860657&scaling=scale-down',
    figmaD: 'https://www.figma.com/proto/MgWQKucfltlZVzvE0cxUhQ/Okizeme-Design?page-id=0%3A1&node-id=1%3A2&viewport=411%2C660%2C0.10949171334505081&scaling=scale-down-width',
    // default: 'https://okizeme.com/'
    link: '/okizeme'
  },
  {
    title: 'hon-media blogsite design',
    descr: 'A desktop design for Hon-Media\'s upcoming blog website.',
    image: img_hon,
    imageM: imgM_hon,
    tags: ['mockups', 'prototyping'],
    color: '#9F9FDF',
    figma: 'https://www.figma.com/proto/4IWvFVdQfykksXa7kEZE95/blog.hon-media?node-id=266%3A5650&viewport=8238%2C659%2C0.7337678074836731&scaling=scale-down-width',
    link: '/hon'
  },
  {
    title: 'csa website design',
    descr: 'A website prototype for Cambodian Student Association @UCSD, built for desktop & mobile.',
    image: img_csa,
    imageM: imgM_csa,
    tags: ['wireframing', 'prototyping', 'user testing'],
    color: '#DA8484',
    figmaD: 'https://www.figma.com/proto/HK3nRrbz73hPQqSlTNTDmu/CSA-Website-Design?node-id=236%3A2&viewport=147%2C303%2C0.03458884358406067&scaling=scale-down-width',
    figmaM: 'https://www.figma.com/proto/HK3nRrbz73hPQqSlTNTDmu/CSA-Website-Design?node-id=241%3A0&viewport=176%2C217%2C0.07083262503147125&scaling=scale-down',
    link: '/csa'
  },
  // {
  //   title: 'yahoo mobile redesign',
  //   descr: 'The creative process behind redesigning mobile to improve user experience & satisfaction.',
  //   image: img_yahoo,
  //   imageM: imgM_yahoo,
  //   tags: ['user testing', 'wireframing', 'prototyping'],
  //   color: '#C19FF7',
  //   figma1: 'https://www.figma.com/proto/pUOIhb7GiEGQeFotepQkQY/Yahoo-Mobile-Redesign?node-id=2%3A3&viewport=177%2C180%2C0.07531154155731201&scaling=scale-down',
  //   figma2:'https://www.figma.com/proto/pUOIhb7GiEGQeFotepQkQY/Yahoo-Mobile-Redesign?node-id=21%3A175&viewport=368%2C198%2C0.09464660286903381&scaling=scale-down',
  //   link: '/yahoo'
  // },
  // {
  //   title: 'parking fine',
  //   descr: 'A potential remedy to the parking frustrations of various users on UCSD\'s campus.',
  //   image: img_parking,
  //   imageM: imgM_parking,
  //   tags: ['storyboarding', 'diagramming', 'wireframing', 'prototyping', 'user testing'],
  //   color: '#536D90',
  //   figma: 'https://www.figma.com/proto/FJIhLsq3WEDOox5VfArU3fuF/Parking-Fine-Kiosk?node-id=5%3A2&scaling=contain',
  //   link: '/parking'
  // },
];



const Others = (props) => {
  return (
    <div className={props.screenWidth > 768 ? 'cardsDesktop' : 'cardsMobile'}>
      {props.work.map((card) => 
        <Card
          title={card.title}
          key={card.title.toString()}
          desc={card.descr}
          image={card.image} 
          imageM={card.imageM}
          tags={card.tags}
          color={card.color}
          color2={card.color2}
          github={card.github}
          figmaD={card.figmaD}
          figmaM={card.figmaM}
          figmaA={card.figmaA}
          figmaB={card.figmaB}
          // figma1={card.figma1}
          // figma2={card.figma2}
          figma={card.figma}
          default={card.default}
          link={card.link}
          screenWidth={props.screenWidth}
        />
      )}
      
      {(props.screenWidth <= 768) && <div className='cardLast'> </div>}
    </div>
  );
}


class Work extends React.Component {
  render() {
    return (
      <div 
        className='work'
      > 
        <div id='work' className='anchor' style={this.props.screenWidth > 640 ? null : {marginTop: '-1rem'}}></div>
        <Title title='Work' screenWidth={this.props.screenWidth} /> 

        <h4 style={{marginBottom: '.625rem', fontWeight: '600', fontSize:'1.5rem'}}> {'case studies'.toUpperCase()} </h4>
        <Others work={projects_casestudies} screenWidth={this.props.screenWidth} />
        <h4 style={{marginBottom: '.625rem', fontWeight: '600', fontSize:'1.5rem' }}> {'UI mockup & prototype designs'.toUpperCase()} </h4>
        <Others work={projects_mocks} screenWidth={this.props.screenWidth} />
      </div> 
    );
  }
}

export default Work
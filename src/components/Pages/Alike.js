import React from 'react';
import LazyLoad from 'react-lazyload';

import Header from '../Header.js';
import Footer from '../Footer.js';
import NavMenu from '../NavMenu.js';
import Contact from '../Contact.js';
import Phrase from '../Phrase.js';
import SectionTitle from '../SectionTitle.js';
import TopButton from '../TopButton.js';

import banner from '../../images/banner_alike.png';
import imgM_alike from '../../images/cardImageM_alike.png';
import open from '../../images/open.svg';

import pic1 from '../../images/alike/1.png';
import pic2 from '../../images/alike/2.png';
import pic3 from '../../images/alike/3.png';
import pic4 from '../../images/alike/4.png';
import pic5 from '../../images/alike/5.png';
import pic6 from '../../images/alike/6.png';
import pic7 from '../../images/alike/7.png';
import pic8 from '../../images/alike/8.png';
import pic9 from '../../images/alike/9.png';
import pic10 from '../../images/alike/10.png';
import pic11 from '../../images/alike/11.png';

const Bullets = (props) => {
  return (
  <div className='phrases'>
    {props.info.map((phrase, index) => 
      <Phrase key={'yahoo/' + index} text={phrase}/>
    )}
  </div>
  );
};

const Image = (props) => {
  return (
    <div className='imageHolder' style={props.style || null}>
      <LazyLoad 
        height={200} 
        offset={100}
      >
        <img 
          src={props.src} 
          alt='' 
          draggable='false'           
          data-aos='fade' 
          data-aos-offset='50' 
          data-aos-easing='ease-out-sine'
          data-aos-duration='400'
          data-aos-once={true}
        /> 
      </LazyLoad>
    </div>
  );
};

const Tags = (props) => {
  return (
    <div className='tags'>
      {props.names.map((name) =>
        <h5 key={name} style={{color: props.color}}> {name.toUpperCase()} </h5>
      )}
    </div>
  );
}

const tags = ['wireframing', 'mockups', 'prototyping'];

const descr = [
  'Modified and updated existing app screens with UI designs more aligned with modern trends and styles (e.g. navigation bar, headers, icons, and many other specific screens)',
  'Designed prototypes of new app screens and new user flows on Figma for the dev team to create',
  'Used Figma Prototyping to turn our static prototype screens into a functional, interactable flow which better helped the developers visualize the app and its functionality',
  'Helped quadruple the conversion rate of app downloads to users'
];


const imageMarginNoTop = {marginTop: '0rem'};
const imageMarginLessBottom = {marginTop: '0rem', marginBottom: '2rem'};
const smallerImage = {marginTop: '0rem', width: '70%'}
const smallerImageLess = {marginTop: '0rem', marginBottom: '2rem', width: '70%'}
const color = '#688CD0'


class Alike extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  goToTop(e) {
    if (document.getElementById('anchor_page')) {
      document.getElementById('anchor_page').scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  toggleMenu() {
    this.setState((state, props) => ({menuOpen: !state.menuOpen}));
  }

  render() {
    return (
      <>
      <Header 
        useMobileNav={this.props.screenWidth > 768 ? false : true} 
        toggleMenu={this.props.screenWidth > 768 ? undefined : this.toggleMenu}
        doc={this.props.doc}
      />

      <div className='app'>
        {/* Show Navmenu if on mobile */}
        {!(this.props.screenWidth > 768) &&
          <NavMenu toggleMenu={this.toggleMenu} screenWidth={this.props.screenWidth} menuOpen={this.state.menuOpen}/> 
        }
        {/* Show Contact if on desktop */}
        {this.props.screenWidth > 768 &&
          <Contact screenWidth={this.props.screenWidth} /> 
        }

        <div className='content' style={{marginTop:'3rem'}}>
          <div id='anchor_page' className='anchor' style={{top: '-1000px'}}></div>
          <img 
            className='banner' 
            src={this.props.screenWidth > 640 ? banner : imgM_alike} 
            alt='Banner' 
            draggable='false'          
            data-aos='fade' 
            data-aos-offset='50' 
            data-aos-easing='ease-out-sine'
            data-aos-duration='400'
            data-aos-once={true}  
          />
          <div className='pages' style={this.props.screenWidth > 640 ? {marginTop:'3rem'} : {width: '75%', marginTop:'3rem'}}>
            <Tags names={tags} color={color}/>
            <h3 
              className='title'
              data-aos='fade' 
              data-aos-offset='50' 
              data-aos-easing='ease-out-sine'
              data-aos-duration='400'
              data-aos-delay='200'
              data-aos-once={true}
            > 
              {'Alike'.toUpperCase()} 
            </h3>

            <div className='intro'>
              <div 
                className='col' 
                style={this.props.screenWidth > 640 ? null : {width: '100%'}}
                data-aos='fade' 
                data-aos-offset='50' 
                data-aos-easing='ease-out-sine'
                data-aos-duration='400'
                data-aos-delay='400'
                data-aos-once={true}
              > 
                <h4 className='heading'> ROLE </h4>
                <h4> UI/UX Designer </h4>              
                <br/>
                <h4 className='heading'> LINKS </h4>
                <div className='buttons'>
                  <a 
                    href='https://www.alike.dating/'
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <img src={open} alt='link' draggable='false' /> 
                    <span className='toolTip'> Check out Alike! </span> 
                  </a> 
                </div>
                <br/>
              </div>
              <div 
                className='col' 
                style={this.props.screenWidth > 640 ? null : {width: '100%'}}
                data-aos='fade' 
                data-aos-offset='50' 
                data-aos-easing='ease-out-sine'
                data-aos-duration='400'
                data-aos-delay='400'
                data-aos-once={true}
              >
                <h4 className='heading'> SUMMARY </h4>
                <h4> 
                  During the duration of my internship at Alike, I've designed screens and user flows that have helped quadruple our user conversion rates and boosted our DAU rates.
                </h4> 
              </div>
            </div>

            <div className='section'>
              <SectionTitle title='background'/> 
              <h4 className='heading'> WHAT'S ALIKE? </h4>
              <p> 
                Alike is a <i>video</i> dating app that celebrates the asian experience! Emphasis on video. <br/>
                We're creating a platform where users can get a better sense of another's vibes and character through videos! <br/>
                Skipping the text prompts and jumping straight into video prompts to allow users to share their story and personality in the best way, through videos and pictures, 
                all in hopes that we can inspire more genuine connections and conversations for people.
                If pictures are worth a thousand words, then videos must be worth millions. 
              </p>
              <p>
                This is just a brief description, for more details, check out the link above!
              </p>
              <br/>

              <h4 className='heading'> MY IMPACT </h4>
              <p> 
                I joined Alike while the app was in it's beta stages, and worked in a team consisting of a lead UI/UX Designer and the CEO himself, Hanmin. <br/>
                So far in my internship, I've done the following:
              </p>
                
              <Bullets info={descr}/> 
              <br/>

              <h4 className='heading'> PERSONAE </h4>
              <p> Here are a couple of the personae our team had in mind while designing our screens: </p>
              <br/>
              <Image src={this.props.screenWidth > 640 ? pic1 : pic5} style={imageMarginLessBottom}/>
              <Image src={this.props.screenWidth > 640 ? pic2 : pic6} style={imageMarginNoTop}/>
            </div>           

            <div className='section'>
              <SectionTitle title='components'/> 
              <h4 className='heading'> NAV BARS & HEADERS </h4>
              <p>
                Prior to my onboarding, the nav bars and headers on our screens weren't components, which I thought was a major oversight. 
                Moreso, our headers were inconsistent throughout the app e.g. different heights, fonts, and element placements.
              </p>
              <p>  
                Figma unveiled their 'Variants' feature not too long ago, so I took the opportunity to use those to standardize the various different nav bars and headers we
                had across our app and turned them into component variants. This will save us valuable time in the future if we decide to update our nav bars or headers.
              </p>
              <br/>
              <Image src={pic4} style={this.props.screenWidth > 640 ? smallerImage : imageMarginNoTop}/>

              <h4 className='heading'> BUTTONS </h4>
              <p>
                Similarly, I turned our buttons throughout the app screens into components for easier changes down the line.
              </p>
              <br/>
              <Image src={pic7} style={this.props.screenWidth > 640 ? smallerImage : imageMarginNoTop}/>
            </div>

            <div className='section'>
              <SectionTitle title='updated screens'/> 
              <p>
                Here are just a few of the screens that I've updated so far:
              </p>

              {this.props.screenWidth > 640 ? 
              <>
                <h4 className='heading' style={{alignSelf: 'center'}}> OLD </h4>
                <Image src={pic8} style={smallerImageLess}/>
                <h4 className='heading' style={{alignSelf: 'center'}}> UPDATED </h4>
                <Image src={pic9} style={smallerImage}/>
              </>
              :
              <>
                <h4 className='heading' style={{alignSelf: 'center'}}> OLD vs. UPDATED </h4>
                <Image src={pic11} style={imageMarginLessBottom}/>
              </>
              }
            </div>
            
            <div className='section'>
              <SectionTitle title='highlights'/> 
              <p>
                I can't unveil too much yet since this feature is in the works but here's a sneak peak at some screens!
              </p>
              <Image src={this.props.screenWidth > 640 ? pic3 : pic10} style={this.props.screenWidth > 640 ? smallerImageLess : imageMarginLessBottom}/>
            </div>

            <div className='section'>
              <SectionTitle title='thoughts'/> 
              <p>
                So far it's been a great learning and growing experience at Alike. I've learned a lot from my lead UI/UX Designer teammate and also from Hanmin as well!
                It's amazing to have my ideas heard and so well implemented in the app and that feeling of seeing my designs come to life can't be beat. 
                As I continue accomplishing tasks and working here at Alike, I'll definitely add more to this page, check back soon!
              </p>
            </div>

          </div>
        </div>
      </div>

      <TopButton color={color} />
      <Footer screenWidth={this.props.screenWidth} />
      </>
    );
  }
}

export default Alike;
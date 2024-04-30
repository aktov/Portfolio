import React from 'react';
import LazyLoad from 'react-lazyload';

import Header from '../Header.js';
import Footer from '../Footer.js';
import FooterSeeAlso from '../FooterSeeAlso.js';
import NavMenu from '../NavMenu.js';
import Phrase from '../Phrase.js';
import SectionTitle from '../SectionTitle.js';
import TopButton from '../TopButton.js';

import {getEntryProperty} from '../WorkEntries.js'; // This is a table imported from this file, make edits to case studies and designs there

import figmaD from '../../images/figmaD.svg';
import figmaM from '../../images/figmaM.svg';
import open from '../../images/open.svg';

import picLogosD from '../../images/Pages/okizeme/Logos_Desktop.svg';
import picLogosM from '../../images/Pages/okizeme/Logos_Mobile.svg';
import picPaletteD from '../../images/Pages/okizeme/Palette_Desktop.svg';
import picPaletteM from '../../images/Pages/okizeme/Palette_Mobile.svg';
import picMoodD from '../../images/Pages/okizeme/Mood_Desktop.png';
import picMoodM from '../../images/Pages/okizeme/Mood_Mobile.png';
import picApex from '../../images/Pages/okizeme/apex.png';
import picMoto from '../../images/Pages/okizeme/moto.png';
import picIcon1 from '../../images/Pages/okizeme/icon1.png';
import picIcon2 from '../../images/Pages/okizeme/icon2.png';
import picGraphics from '../../images/Pages/okizeme/Graphics.png';
import picGraphicsM from '../../images/Pages/okizeme/Graphics_Mobile.png';

import picMobile1 from '../../images/Pages/okizeme/Mobile1.png';
import picMobile2 from '../../images/Pages/okizeme/Mobile2.png';
import picMobile3 from '../../images/Pages/okizeme/Mobile3.png';
import picMobile4 from '../../images/Pages/okizeme/Mobile4.png';
import picMobile5 from '../../images/Pages/okizeme/Mobile5.png';
import picDesktop1 from '../../images/Pages/okizeme/Desktop01.png';
import picDesktop2 from '../../images/Pages/okizeme/Desktop02.png';
import picDesktop3 from '../../images/Pages/okizeme/Desktop03.png';
import picDesktop4 from '../../images/Pages/okizeme/Desktop04.png';

const key = getEntryProperty('casestudies', 'okizeme', 'key')
const tags = getEntryProperty('casestudies', 'okizeme', 'tags')
const color = getEntryProperty('casestudies', 'okizeme', 'color')
const title = getEntryProperty('casestudies', 'okizeme', 'title')
const banner = getEntryProperty('casestudies', 'okizeme', 'banner')
const banner_mob = getEntryProperty('casestudies', 'okizeme', 'bannerM')
const linkM = getEntryProperty('casestudies', 'okizeme', 'figmaM')
const linkD = getEntryProperty('casestudies', 'okizeme', 'figmaD')

const Bullets = (props) => {
  return (
  <div className='phrases'>
    {props.info.map((phrase, index) => 
      <Phrase key={'okizeme/' + index} text={phrase}/>
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

const descr = [
  'Improve the visuals. Enhance the visuals by incorporating the branding and genre into the site better.',
  'Streamline the user experience. Improve the user\'s navigational experience. Simplify the process to find an article and to continue reading new ones after.'
];

const imageMarginNoTop = {marginTop: '0rem'};
const imageMarginLessBottom = {marginTop: '0rem', marginBottom: '2rem'};
const imageMarginNone = {marginTop: '0rem', marginBottom: '0rem'};

// Returns style based on breakpoints, of which there are 3
const decideMarginWidth = function(value) {
  if (value > 1280) {
    return {marginTop:'3rem'}
  } else if (value > 768) {
    return {width: '70%', marginTop:'3rem'}
  }
  return {width: '75%', marginTop:'3rem'}
} 



class Okizeme extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }
  
  componentDidMount() {
    window.scrollTo(0, 0)
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

        <div className='content'>
          <div id='anchor_page' className='anchor' style={{top: '-1000px'}}></div>
          <img 
            className='banner' 
            src={this.props.screenWidth > 768 ? banner : banner_mob} 
            alt='Banner' 
            draggable='false'          
            data-aos='fade' 
            data-aos-offset='50' 
            data-aos-easing='ease-out-sine'
            data-aos-duration='400'
            data-aos-once={true}  
          />
          <div className='pages' style={decideMarginWidth(this.props.screenWidth)}>
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
              {title} 
            </h3>

            <div className='intro'>
              <div 
                className='col' 
                style={this.props.screenWidth > 768 ? null : {width: '100%'}}
                data-aos='fade' 
                data-aos-offset='50' 
                data-aos-easing='ease-out-sine'
                data-aos-duration='400'
                data-aos-delay='400'
                data-aos-once={true}
              > 
                <h4 className='heading'> Role </h4>
                <h4> UX Designer </h4>              
                <br/>
                <h4 className='heading'> Links </h4>
                <div className='buttons'>
                  <a 
                    href='https://okizeme.com/'
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <img src={open} alt='open' draggable='false' /> 
                    <span className='toolTip'> Live website </span> 
                  </a> 
                  <a 
                    href={linkD}
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <img src={figmaD} alt='figmaD' draggable='false' /> 
                    <span className='toolTip'> Desktop prototype </span> 
                  </a> 
                  <a 
                    href={linkM}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={figmaM} alt='figmaM' draggable='false' /> 
                    <span className='toolTip'> Mobile prototype </span> 
                  </a> 
                </div>
                <br/>
              </div>
              <div 
                className='col' 
                style={this.props.screenWidth > 768 ? null : {width: '100%'}}
                data-aos='fade' 
                data-aos-offset='50' 
                data-aos-easing='ease-out-sine'
                data-aos-duration='400'
                data-aos-delay='400'
                data-aos-once={true}
              >
                <h4 className='heading'> Summary </h4>
                <p> 
                  I produced a redesign for my client's website that improved the visuals and user experience. The ideation phase and final design are shown further below.
                </p> 
              </div>
            </div>

            <div className='section'>
              <SectionTitle title='Intro' color={color}/> 
              <p> 
                Okizeme Gaming recently revised their branding and mission, and reached out to me for a website redesign that would reflect the new changes.
              </p>
              <p>
                The company strives to help further develop the talents and skills of their users — whether it be "streaming, training, and professional gaming" — 
                through a mentor-like relationship.
              </p>
            </div>     

            <div className='section'>
              <SectionTitle title='Goals' color={color}/> 
              <Bullets info={descr}/> 

              {/* <h4 className='heading'> 1. IMPROVE THE VISUALS </h4>
              <p> 
                Enhance the visuals by incorporating the branding and genre into the site better.
              </p>
              <br/>
              <h4 className='heading'> 2. STREAMLINE THE USER EXPERIENCE </h4>
              <p> 
                Improve the user's navigational experience. Simplify the process to find an article and to continue reading new ones after.
              </p> */}
            </div>          

            <div className='section'>
              <SectionTitle title='Inspiration' color={color}/> 
              <p> 
                The websites and graphics below depict various themes and visuals that we wanted to encapsulate within the site.
                <br/>
                I took heavy inspiration from the bold font faces and it's layout within the overall structure of the site.
              </p>
              <br/>

              <h4 className='heading'> Websites </h4>
              <div className={this.props.screenWidth > 768 ? 'wide' : 'narrow'}>
                <a 
                  className='okizemeLink'
                  href='https://www.behance.net/gallery/100767627/APEX-LEGENDS-New-website-2020?tracking_source=search_projects_recommended%7Cwebsite'
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  <Image src={picApex} style={imageMarginNone} />
                  APEX LEGENDS - Redesign
                </a> 
                <a 
                  className='okizemeLink'
                  href='https://www.behance.net/gallery/100006865/MXGP-Website-2020?tracking_source=search_projects_recommended%7Cwebsite'
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  <Image src={picMoto} style={imageMarginNone} />
                  MXGP - Website 2020
                </a> 
                <a 
                  className='okizemeLink'
                  href='https://iconagency.gg/'
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  <Image src={picIcon1} style={imageMarginNone} />
                  ICON
                </a> 
                <a 
                  className='okizemeLink'
                  href='https://iconagency.gg/'
                  target='_blank' 
                  rel='noopener noreferrer'
                >
                  <Image src={picIcon2} style={imageMarginNone} />
                  ICON Loading Screen
                </a> 
              </div>

              <h4 className='heading'> Graphics </h4>
              <a 
                className='okizemeLink'
                href='https://creativemarket.com/irenedemetri/2465467-Japanese-Patterns-Vector-Handdrawn#fullscreen'
                target='_blank' 
                rel='noopener noreferrer'
              >
                <Image 
                  src={this.props.screenWidth > 768 ? picGraphics : picGraphicsM} 
                  style={imageMarginNone} 
                />
                Japanese Patterns - Youandigraphics
              </a> 

              <h4 className='heading'> Mood Board </h4>
              <Image src={this.props.screenWidth > 768 ? picMoodD : picMoodM} style={imageMarginNoTop}/>
            </div>  

            <div className='section'>
              <SectionTitle title='Initial Ideation' color={color}/> 
              <h4 className='heading'> Logo Designs </h4>
              <Image src={this.props.screenWidth > 768 ? picLogosD : picLogosM} style={imageMarginNoTop}/>
              
              <h4 className='heading'> Color Palette </h4>
              <Image src={this.props.screenWidth > 768 ? picPaletteD : picPaletteM} style={imageMarginNoTop}/>
            </div>  

            <div className='section'>
              <SectionTitle title='Prototypes' color={color}/> 
              <h4 className='heading'> Mobile </h4>
              {this.props.screenWidth > 768 ? 
                <>
                  <Image src={picMobile1} style={imageMarginLessBottom}/>
                  <Image src={picMobile2} style={imageMarginNoTop}/>
                </>
                :
                <>
                  <Image src={picMobile3} style={imageMarginLessBottom}/>
                  <Image src={picMobile4} style={imageMarginLessBottom}/>
                  <Image src={picMobile5} style={imageMarginNoTop}/>
                </>
              }

              <h4 className='heading'> Desktop </h4>
              <Image src={picDesktop4} style={imageMarginLessBottom}/>
              <Image src={picDesktop3} style={imageMarginLessBottom}/>
              <Image src={picDesktop2} style={imageMarginLessBottom}/>
              <Image src={picDesktop1} style={imageMarginNoTop}/>

              {/* <h4 className='heading'> COLORS </h4> */}
              {/* <Image src={this.props.screenWidth > 768 ? pic9 : pic12} style={imageMarginNoTop}/> */}
              {/* <h4 className='heading'> TYPOGRAPHY </h4> */}
              {/* <Image src={this.props.screenWidth > 768 ? pic10 : pic13} style={imageMarginNoTop}/> */}
            </div>

            <div className='section'>
              <SectionTitle title='Lessons Learned' color={color}/> 
              <p>
                From this collaboration with Okizeme, I developed better skills for the UI portion of UI/UX Design. 
                I've always been confident in claiming that UI Design is different from graphics/marketing design, and although it is canonically, I would be lying if I said
                that there was no overlap.
              </p>
              <p>
                While designing the layout of a webpage or app screen, it's important to focus on location and ease of access first, however the visual aesthetics of the design is equally as
                pivotal in user satisfaction and ultimately retention. 
              </p>
              <p>
                <b> The design of a website or app should exemplify the company's brand and purpose.  </b>
              </p>
              <p>
                In the same way that a Dyson or Apple advertisement screams their name, despite their minimalistic style, a company — or at least their brand — should be recognizeable from their sites or apps.
              </p>
            </div>

            {/* <div className='section'>
              <SectionTitle title='Check out my other work!' color={color}/> 
              <Cards group={'casestudies'} screenWidth={this.props.screenWidth} />  
            </div> */}

          </div>
        </div>
      </div>

      <TopButton color={color} />
      <FooterSeeAlso page={key} width={decideMarginWidth(this.props.screenWidth)} />
      <Footer screenWidth={this.props.screenWidth} />
      </>
    );
  }
}

export default Okizeme;
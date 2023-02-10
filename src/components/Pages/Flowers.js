import React from 'react';
import LazyLoad from 'react-lazyload';

import Header from '../Header.js';
import Footer from '../Footer.js';
import NavMenu from '../NavMenu.js';
import Contact from '../Contact.js';
import Phrase from '../Phrase.js';
import SectionTitle from '../SectionTitle.js';
import TopButton from '../TopButton.js';

import banner from '../../images/Banners/banner_flowers.png';
import banner_mob from '../../images/Thumbnails/Mobile/cardImageM_flowers.png';
import figma from '../../images/figmaLogo.svg';

import picOrigM from '../../images/Pages/flowers/OriginalMock.png';
import picMockV1 from '../../images/Pages/flowers/Mockup1.png';
import picV1a from '../../images/Pages/flowers/V1-1.png';
import picV1b from '../../images/Pages/flowers/V1-2.png';
import picV1c from '../../images/Pages/flowers/V1-3.png';

import picV2a from '../../images/Pages/flowers/V2-1.png';
import picV2b from '../../images/Pages/flowers/V2-2.png';
import picV2c from '../../images/Pages/flowers/V2-3.png';
import picV2d from '../../images/Pages/flowers/V2-4.png';

import picV2Cola from '../../images/Pages/flowers/V2-ColumnsA.png';
import picV2Colb from '../../images/Pages/flowers/V2-ColumnsB.png';
import picCompDesk from '../../images/Pages/flowers/ComponentsDesk.png';
import picCompMob from '../../images/Pages/flowers/ComponentsMob.png';
import picCompGifDesk from '../../images/Pages/flowers/ComponentsDesk.gif';
import picCompGifMob from '../../images/Pages/flowers/ComponentsMob.gif';

import picColor from '../../images/Pages/flowers/ColorStyles.png';
import picColorDesk from '../../images/Pages/flowers/ColorStylesDesk.png';
import picText from '../../images/Pages/flowers/TextStyles.png';
import picTextDesk from '../../images/Pages/flowers/TextStylesDesk.png';



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

const tags = ['mockups', 'prototyping'];

const introPoints = [
  'Shipping',
  'Recipient Note',
];

const secondIterPoints = [
  'Removed the background info that was on the right to replace it with cart info instead.',
  'Changed the theme color from red into green. I wanted to reserve red for its symbolic meaning of error.',
  'Designed a cart column, a payment step, and the summary page.'
]

const futureQuestions = [
  'What does the whole flow look like from the cart to the order summary?',
  'What if the user wants to add multiple notes, per each flower bouquet in their cart?',
  'What if the user wants to send bouquets to multiple addresses in one check-out flow?'
]

const imageMarginNoTop = {marginTop: '0rem'};
const imageMarginLessBottom = {marginTop: '0rem', marginBottom: '2rem'};
const imageMarginNone = {marginTop: '0rem', marginBottom: '0rem'};
const smallerImage = {marginTop: '0rem', width: '70%'}
const smallerImageLess = {marginTop: '0rem', marginBottom: '2rem', width: '70%'}
const borderShadow = {
  marginTop: '2rem', 
  marginBottom: '2rem', 
  borderRadius: '16px', 
  boxShadow: '0px 0px 32px 0px rgba(0, 0, 0, .15)',
  overflow: 'hidden'
};
const color = '#92C999'

// Returns style based on breakpoints, of which there are 2
const decideMarginWidth = function(value) {
  if (value > 1280) {
    return {marginTop:'3rem'}
  } else if (value > 768) {
    return {width: '70%', marginTop:'3rem'}
  }
  return {width: '75%', marginTop:'3rem'}
} 



class Flowers extends React.Component {
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
        {/* Show Contact if on desktop */}
        {this.props.screenWidth > 768 &&
          <Contact screenWidth={this.props.screenWidth} /> 
        }

        <div className='content' style={{marginTop:'3rem'}}>
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
              {'Flowers'.toUpperCase()} 
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
                {/* <h4 className='heading'> ROLE </h4>
                <h4> UI/UX Designer </h4>              
                <br/> */}
                <h4 className='heading'> LINKS </h4>
                <div className='buttons'>
                  <a 
                    href='https://www.figma.com/proto/5gbXEMOUCFgvECx3gFsD4Q/Pretty-Nice-Flowers?page-id=205%3A1662&node-id=205%3A1663&viewport=342%2C655%2C0.24&scaling=min-zoom&starting-point-node-id=205%3A1663&hide-ui=1'
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <img src={figma} alt='figma' draggable='false' /> 
                    <span className='toolTip'> Desktop prototype </span> 
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
                <h4 className='heading'> SUMMARY </h4>
                <p> 
                  This design challenge I partook involved redesigning a check-out flow to improve the overall user experience and visuals.
                </p> 
              </div>
            </div>

            <div className='section'>
              <SectionTitle title='intro'/> 
              <p> 
                Here's a perfect replica mockup I created of the original image presented to me. <br/>
                It's definitely outdated in terms of style, however I'll admit that it is still very much functional.
              </p>
              <Image src={picOrigM} style={this.props.screenWidth > 768 ? smallerImage : imageMarginLessBottom}/>
            </div>     

            <div className='section'>
              <SectionTitle title='First Interation'/> 
              <h4 className='heading'> Design Choices </h4>
              <p> 
                Here's my first iteration of mockups to improve the design of the UI.
              </p>

              <Image src={picMockV1} style={imageMarginLessBottom}/> 

              <p> 
                To expand upon what the webpage would look like to the user, I added visuals and text captions on the right side to display more about the website and company.
              </p>
              <p> 
                More importantly, I wanted to separate the elements of the original mock <b> from one page into multiple steps. </b>
                Here I've separated it into two steps:
              </p>

              <Bullets info={introPoints}/> 
              
              <p> 
                Check out the screenshots below to see what these steps look like more in depth. <br/>
                I also decided to finish out the check out flow by adding a 'Payment' step, which I didn't design in this iteration.
              </p>
              
              <br/>
              <br/>

              <h4 className='heading'> Pages </h4>
              <p> 
                A closer look at the 'Shipping' and 'Recipient Note' pages.
              </p>
              <Image src={picV1a} style={this.props.screenWidth > 768 ? smallerImageLess : imageMarginLessBottom}/>
              <Image src={picV1b} style={this.props.screenWidth > 768 ? smallerImageLess : imageMarginLessBottom}/>
              <Image src={picV1c} style={this.props.screenWidth > 768 ? smallerImage : imageMarginNoTop}/>
            </div>          

            <div className='section'>
              <SectionTitle title='Second Interation'/> 
              <h4 className='heading'> Notable Changes </h4>
              <p> 
                Taking a look back at this months later, here are the notable changes I made:
              </p>

              <Bullets info={secondIterPoints}/> 
              <Image src={picV2a} style={imageMarginLessBottom}/>

              <h4 className='heading'> Why did I remove the right side? </h4>
              <p>
                Most check out flows on shopping sites present a way for the user to remind themself of what they're buying as well as its price. <br/>
                Hence having the cart info on the right provides a lot more usability for the user.
              </p>
              <p>
                I also realized that company and website information is useless on this page, as this is the check out page, typically the last step on a user's journey through the website.
              </p>

              <br/>
              <br/>

              <h4 className='heading'> Screens of the Other Pages </h4>
              <Image src={picV2b} style={imageMarginLessBottom}/>
              <Image src={picV2c} style={imageMarginLessBottom}/>
              <Image src={picV2d} style={imageMarginNoTop}/>

              <h4 className='heading'> Layout Grid of Columns </h4>
              <p>
                My grid layout for this page is a bit untraditional. It consists of three same-width columns, with differing gutter widths, spaced evenly between margins on the outer edges. <br/>
              </p>
              <p>
                The outer edges in the green are variable, and would widen with wider displays, or narrow with smaller displays. On mobile these would vanish.
              </p>
              <Image src={picV2Cola} style={imageMarginNoTop}/>

              <h4 className='subheading'> A More Standard Layout </h4>
              <p>
                A more standard grid layout would alter the widths of the elements, notably making most fields 259px on this display. <br/>
                Not the biggest deal, but I do prefer my dimensions to be in multiples of either 4 or 8.
              </p>
              <Image src={picV2Colb} style={imageMarginNoTop}/>
            </div>

            <div className='section'>
              <SectionTitle title='Components & Styling'/> 
              <h4 className='heading'> Figma Components </h4>
              <p>
                I decided to use component variants for this iteration, to vastly speed up mockup design time. The conditional variants were a blessing as well; the amount of flexiblity and efficiency it allows for amazed me.
              </p>
              <Image src={this.props.screenWidth > 768 ? picCompGifDesk : picCompGifMob} style={borderShadow}/>
              <Image src={this.props.screenWidth > 768 ? picCompDesk : picCompMob} style={imageMarginNoTop}/>

              <h4 className='heading'> Stylings </h4>
              <Image src={this.props.screenWidth > 768 ? picColorDesk : picColor} style={imageMarginLessBottom}/>
              <>
                {this.props.screenWidth > 768 ? 
                  <Image src={picTextDesk} style={smallerImageLess}/>
                  :
                  <Image src={picText} style={imageMarginLessBottom}/>
                }
              </>
            </div>  

            <div className='section'>
              <SectionTitle title='Prototype'/> 
              <p>
                Even though this was more of a simple redesign as opposed to a UX research project, it was still a great learning experience into Figma's components, variants, and layout grids.
              </p>
              {/* <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)', width:'100%', height:'50rem'}} src={'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5gbXEMOUCFgvECx3gFsD4Q%2FPretty-Nice-Flowers%3Fpage-id%3D205%253A1662%26node-id%3D205%253A1663%26viewport%3D588%252C633%252C0.33%26scaling%3Dscale-down%26starting-point-node-id%3D205%253A1663'} allowfullscreen></iframe> */}
            </div>

            <div className='section'>
              <SectionTitle title='Looking towards the future'/> 
              <p>
                Even though this was more of a simple redesign as opposed to a UX research project, it was still a great learning experience into Figma's components, variants, and layout grids.
              </p>
              <br/>
              <br/>

              <h4 className='subheading'> Third Iteration </h4>
              <p>
                For my next iteration, I'd like to tackle more user flows, and take a look at this from a wider angle and tackle these questions below: <br/>
              </p>
              <Bullets info={futureQuestions}/> 
              <br/>
              <br/>
              
              <h4 className='subheading'> Mobile </h4>
              <p>
                I skipped the mobile screens for this design to save on time, but the next time I come back for this project, I'll definitely create them alongside newer desktop ones.
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

export default Flowers;
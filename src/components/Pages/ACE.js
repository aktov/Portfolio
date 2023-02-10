import React from 'react';
import LazyLoad from 'react-lazyload';

import Header from '../Header.js';
import Footer from '../Footer.js';
import NavMenu from '../NavMenu.js';
import Contact from '../Contact.js';
import Phrase from '../Phrase.js';
import SectionTitle from '../SectionTitle.js';
import TopButton from '../TopButton.js';

import banner from '../../images/Banners/banner_ace.png';
import banner_mob from '../../images/Thumbnails/Mobile/cardImageM_ace.png';
import open from '../../images/open.svg';

import pic1 from '../../images/Pages/ace/01.png';
import pic2 from '../../images/Pages/ace/02.png';
import pic3 from '../../images/Pages/ace/03.png';
import pic4 from '../../images/Pages/ace/04.png';
import pic5 from '../../images/Pages/ace/05.png';
import pic6 from '../../images/Pages/ace/06.png';
import pic7 from '../../images/Pages/ace/07.png';
import pic8 from '../../images/Pages/ace/08.png';
import pic9 from '../../images/Pages/ace/09.png';
import pic10 from '../../images/Pages/ace/10.png';
import pic11 from '../../images/Pages/ace/11.png';
import pic12 from '../../images/Pages/ace/12.png';
import pic13 from '../../images/Pages/ace/13.png';
import pic14 from '../../images/Pages/ace/14.png';
import pic15 from '../../images/Pages/ace/15.png';
import pic16 from '../../images/Pages/ace/16.png';
import pic17 from '../../images/Pages/ace/17.png';
import pic18 from '../../images/Pages/ace/18.png';
import pic19 from '../../images/Pages/ace/19.png';
import pic20 from '../../images/Pages/ace/20.png';
import pic21 from '../../images/Pages/ace/21.png';
import pic22 from '../../images/Pages/ace/22.png';
import pic23 from '../../images/Pages/ace/23.png';
import pic24 from '../../images/Pages/ace/24.png';
import pic25 from '../../images/Pages/ace/25.png';
import pic26 from '../../images/Pages/ace/26.png';
import pic27 from '../../images/Pages/ace/27.png';
import pic28 from '../../images/Pages/ace/28.png';


const Bullets = (props) => {
  return (
  <div className='phrases'>
    {props.info.map((phrase, index) => 
      <Phrase key={'alike/' + index} text={phrase}/>
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
        <h5 key={name} style={{color: props.color2}}> {name.toUpperCase()} </h5>
      )}
    </div>
  );
}

const tags = ['ux research', 'wireframing', 'mockups', 'prototyping', 'user testing']

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
const color = '#FBE7E7'
const color2 = '#EAA4C1'

// Returns style based on breakpoints, of which there are 2
const decideMarginWidth = function(value) {
  if (value > 1280) {
    return {marginTop:'3rem'}
  } else if (value > 768) {
    return {width: '70%', marginTop:'3rem'}
  }
  return {width: '75%', marginTop:'3rem'}
} 




class ACE extends React.Component {
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
            <Tags names={tags} color={color} color2={color2}/>
            <h3 
              className='title'
              data-aos='fade' 
              data-aos-offset='50' 
              data-aos-easing='ease-out-sine'
              data-aos-duration='400'
              data-aos-delay='200'
              data-aos-once={true}
            > 
              {'Artist Crowdfund Exchange (ACE)'.toUpperCase()} 
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
                <p> UI/UX Designer </p>              
                <br/>
                <h4 className='heading'> Links </h4>
                <div className='buttons'>
                  <a 
                    href='https://www.ace.fan/'
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <img src={open} alt='link' draggable='false' /> 
                    <span className='toolTip'> Check out ACE! </span> 
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
                  Here's a brief showcase of the designs I created during the year I spent working at ACE! <br/>
                  The features shown below are currently live on the app.
                </p> 
                <br/>
                <h4 className='heading'> Team </h4>
                <p> We were a small startup, so I worked closely with our founders and engineers. Of the team, here are those I worked most with: </p>
                <div className='teamColumns'>
                  <p> <b> Founders </b> <br/> Omi Iyamu [CTO] <br/> Darren [CEO] <br/> DJ [COO] </p>
                  <p> <b> Product </b> <br/> Erick Wahome [Product Manager] <br/> Jade French [Marketing Lead] <br/> Deepa Patil [UX Researcher] </p>
                </div>
                <p> <b> Front End Engineers </b> <br/> Jose Ambrosio <br/> Erik German <br/> Deep Bhavsar <br/> Jignesh Maheshwari <br/> Bharat Sindhav </p>
                <br/>
              </div>
            </div>

            <div className='section'>
              <SectionTitle title='A Work in Progress'/> 
              <p>
                I'm still working it out with Omi on which features of the app I can showcase and talk about. For now, I've added screenshots of designs I created down below. 
              </p>
              <br/>
              <br/>

              <h4 className='heading'> Modals & Pop Ups </h4>
              <div className='imageGallery'>
                <Image src={pic1} style={imageMarginLessBottom}/>
                <Image src={pic2} style={imageMarginLessBottom}/>
                <Image src={pic3} style={imageMarginLessBottom}/>
                <Image src={pic4} style={imageMarginLessBottom}/>
                <Image src={pic5} style={imageMarginLessBottom}/>
                <Image src={pic6} style={imageMarginLessBottom}/>
                <Image src={pic7} style={imageMarginLessBottom}/>
                <Image src={pic8} style={imageMarginLessBottom}/>
                <Image src={pic9} style={imageMarginLessBottom}/>
                <Image src={pic10} style={imageMarginLessBottom}/>
                <Image src={pic11} style={imageMarginLessBottom}/>
                <Image src={pic12} style={imageMarginLessBottom}/>
                <Image src={pic13} style={imageMarginLessBottom}/>
                <Image src={pic14} style={imageMarginLessBottom}/>
                <Image src={pic15} style={imageMarginLessBottom}/>
                <Image src={pic16} style={imageMarginLessBottom}/>
                <Image src={pic17} style={imageMarginLessBottom}/>
                <Image src={pic18} style={imageMarginLessBottom}/>
                <Image src={pic19} style={imageMarginLessBottom}/>
                <Image src={pic20} style={imageMarginLessBottom}/>
                <Image src={pic21} style={imageMarginLessBottom}/>
                <Image src={pic22} style={imageMarginLessBottom}/>
                <Image src={pic23} style={imageMarginNoTop}/>
              </div>

              <h4 className='heading'> Modals & Pop Ups </h4>
              <div className='imageGallery'>
                <Image src={pic24} style={imageMarginLessBottom}/>
                <Image src={pic25} style={imageMarginLessBottom}/>
                <Image src={pic26} style={imageMarginLessBottom}/>
                <Image src={pic27} style={imageMarginLessBottom}/>
                <Image src={pic28} style={imageMarginNoTop}/>
              </div>

            </div>           


          </div>
        </div>
      </div>

      <TopButton color={color2} />
      <Footer screenWidth={this.props.screenWidth} />
      </>
    );
  }
}

export default ACE;
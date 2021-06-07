import React from 'react';
import LazyLoad from 'react-lazyload';

import Header from '../Header.js';
import Footer from '../Footer.js';
import NavMenu from '../NavMenu.js';
import Contact from '../Contact.js';
// import Phrase from '../Phrase.js';
import SectionTitle from '../SectionTitle.js';
import TopButton from '../TopButton.js';

import banner from '../../images/banner_edushare.png';
import imgM_signup from '../../images/cardImageM_signup.png';
import figma from '../../images/figmaLogo_black.svg';
import pic1 from '../../images/edushare/1.jpg';
import pic2 from '../../images/edushare/2.png';
import pic3 from '../../images/edushare/3.png';
import pic4 from '../../images/edushare/4.png';
import pic5 from '../../images/edushare/5.png';
import pic6 from '../../images/edushare/6.png';
import pic7 from '../../images/edushare/7.png';
import pic8 from '../../images/edushare/8.png';
import pic9 from '../../images/edushare/9.png';
import pic10 from '../../images/edushare/10.png';
import pic11 from '../../images/edushare/11.png';
import pic12 from '../../images/edushare/12.png';
import pic13 from '../../images/edushare/13.png';
import pic14 from '../../images/edushare/14.png';
import pic15 from '../../images/edushare/15.png';
import pic16 from '../../images/edushare/16.png';
import pic17 from '../../images/edushare/17.png';
import pic18 from '../../images/edushare/18.png';

// const Bullets = (props) => {
//   return (
//   <div className='phrases'>
//     {props.info.map((phrase, index) => 
//       <Phrase key={'yahoo/' + index} text={phrase}/>
//     )}
//   </div>
//   );
// };

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


const imageMarginNoTop = {marginTop: '0rem'};
const imageMarginLessBottom = {marginTop: '0rem', marginBottom: '2rem'};
const color = '#BBE2F2'




class Edushare extends React.Component {
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
            src={this.props.screenWidth > 640 ? banner : imgM_signup} 
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
              {'Edushare'.toUpperCase()} 
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
                <h4 className='heading'> FIGMA LINKS </h4>
                <div className='buttons'>
                  <a 
                    href='https://www.figma.com/proto/zMITtMqtG9hcvJLDGtUC8G/Edushare?node-id=10%3A84&viewport=-523%2C272%2C0.2671932876110077&scaling=scale-down'
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <img src={figma} alt='figma' draggable='false' /> 
                    <span className='toolTip'> Figma prototype </span> 
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
                  I designed a potential sign up flow for an app where teachers can share ideas and socialize. These would be the screens users would encounter upon signing up for their first time.
                </h4> 
              </div>
            </div>

            <div className='section'>
              <SectionTitle title='intro'/> 
              <h4 className='heading'> MOTIVATION </h4>
              <p> 
                The designs you see below are the result of me finishing a short design challenge where I was tasked with creating screens for a sign up flow for teachers.
                I took the liberty in fleshing out the purpose of the app, the user objectives, and design details.
              </p>
            </div>          
                      
            <div className='section'>
              <SectionTitle title='sketches'/> 
              <p> 
                My initial rough sketch about the screens I had in mind, based off your typical sign up elements and flow.
              </p>
              <Image src={pic1} style={this.props.screenWidth > 640 ? {width: '40%'} : {width: '90%'}}/>
            </div>      

            <div className='section'>
              <SectionTitle title='wireframing'/> 
              <Image src={pic2} style={imageMarginNoTop}/>
              <h4 className='heading'> INITIAL TYPOGRAPHY & COLORS </h4>
              <Image src={pic3} style={imageMarginNoTop} />
            </div>  

            <div className='section'>
              <SectionTitle title='mockups'/> 
              <h4 className='heading'> MOBILE </h4>
              <Image src={pic4} style={imageMarginLessBottom}/>
              <Image src={pic5} style={imageMarginNoTop}/>

              <h4 className='heading'> DESKTOP </h4>
              <p>
                Here are some of the desktop screens as well, they're pretty similar to mobile.
              </p>
              <Image src={pic6} style={imageMarginLessBottom}/>
              <Image src={pic7} style={imageMarginLessBottom}/>

              {this.props.screenWidth > 640 ? 
                <>
                  <Image src={pic8} style={imageMarginNoTop}/>
                </>
                :
                <>
                  <Image src={pic15} style={imageMarginLessBottom}/>
                  <Image src={pic16} style={imageMarginLessBottom}/>
                  <Image src={pic17} style={imageMarginLessBottom}/>
                  <Image src={pic18} style={imageMarginLessBottom}/>
                </>
              }

              <h4 className='heading'> COLORS </h4>
              <Image src={this.props.screenWidth > 640 ? pic9 : pic12} style={imageMarginNoTop}/>
              <h4 className='heading'> TYPOGRAPHY </h4>
              <Image src={this.props.screenWidth > 640 ? pic10 : pic13} style={imageMarginNoTop}/>
              <h4 className='heading'> ICONOGRAPHY </h4>
              <Image src={this.props.screenWidth > 640 ? pic11 : pic14} style={imageMarginNoTop}/>
            </div>

            <div className='section'>
              <SectionTitle title='lessons learned'/> 
              <p>
                My main takeaway from this design challenge was practice with task prioritization. <br/>
                It was due to the time limit I imposed on myself that forced me to rethink the way I usually start off my design projects or tasks.
                Which things are most important? I need to dedicate most of my time to that. Which things are least important? 
                Ok for these things I will really need to keep track of the time as I work on them. <br/>
                Out of this challenge, I realized how vital it is for me as a designer to prioritize the steps in my design process.
              </p>
              <p>
                My mentor told me this quote, "You can achieve anything but you can't achieve everything."
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

export default Edushare;
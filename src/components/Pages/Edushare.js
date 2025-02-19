import React from 'react';

import Header from '../Header.js';
import Footer from '../Footer.js';
import FooterSeeAlso from '../FooterSeeAlso.js';
import NavMenu from '../NavMenu.js';
import SectionTitle from '../SectionTitle.js';
import TopButton from '../TopButton.js';
import Tags from '../Tags.js';
import Image from '../PageImage.js';
import ContentsTable from '../ContentsTable.js';

import {getEntryProperty} from '../WorkEntries.js'; // This is a table imported from this file, make edits to case studies and designs there

import figma from '../../images/figmaLogo.svg';
import pic1 from '../../images/Pages/edushare/1.jpg';
import pic2 from '../../images/Pages/edushare/2.png';
import pic3 from '../../images/Pages/edushare/3.png';
import pic4 from '../../images/Pages/edushare/4.png';
import pic5 from '../../images/Pages/edushare/5.png';
import pic6 from '../../images/Pages/edushare/6.png';
import pic7 from '../../images/Pages/edushare/7.png';
import pic8 from '../../images/Pages/edushare/8.png';
import pic9 from '../../images/Pages/edushare/9.png';
import pic10 from '../../images/Pages/edushare/10.png';
import pic11 from '../../images/Pages/edushare/11.png';
import pic12 from '../../images/Pages/edushare/12.png';
import pic13 from '../../images/Pages/edushare/13.png';
import pic14 from '../../images/Pages/edushare/14.png';
import pic15 from '../../images/Pages/edushare/15.png';
import pic16 from '../../images/Pages/edushare/16.png';
import pic17 from '../../images/Pages/edushare/17.png';
import pic18 from '../../images/Pages/edushare/18.png';

const key = getEntryProperty('designs', 'edushare', 'key')
const tags = getEntryProperty('designs', 'edushare', 'tags')
const color = getEntryProperty('designs', 'edushare', 'color')
const title = getEntryProperty('designs', 'edushare', 'title')
const banner = getEntryProperty('designs', 'edushare', 'banner')
const banner_mob = getEntryProperty('designs', 'edushare', 'bannerM')
const link = getEntryProperty('designs', 'edushare', 'figma')

// const Bullets = (props) => {
//   return (
//   <div className='phrases'>
//     {props.info.map((phrase, index) => 
//       <Phrase key={'yahoo/' + index} text={phrase}/>
//     )}
//   </div>
//   );
// };

const imageMarginNoTop = {marginTop: '0rem'};
const imageMarginLessBottom = {marginTop: '0rem', marginBottom: '2rem'};




class Edushare extends React.Component {
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
          <div className='pages'>
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
                {/* <h4 className='heading'> ROLE </h4>
                <p> UI/UX Designer </p>              
                <br/> */}
                <h4 className='heading'> Figma </h4>
                <div className='buttons'>
                  <a 
                    href={link}
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
                  I designed a potential sign up flow for an app where teachers can share ideas and socialize. These would be the screens users would encounter upon signing up for their first time.
                </p> 
              </div>
            </div>

            {this.props.screenWidth > 1280 ? <ContentsTable color={color}/> : null} 

            <div className='section'>
              <SectionTitle title='Intro' color={color}/> 
              <h4 className='heading'> Motivation </h4>
              <p> 
                The designs you see below are the result of me finishing a short design challenge where I was tasked with creating screens for a sign up flow for teachers.
                I took the liberty in fleshing out the purpose of the app, the user objectives, and design details.
              </p>
            </div>          
                      
            <div className='section'>
              <SectionTitle title='Sketches' color={color}/> 
              <p> 
                My initial rough sketch about the screens I had in mind, based off your typical sign up elements and flow.
              </p>
              <Image src={pic1} style={this.props.screenWidth > 768 ? {width: '40%'} : {width: '90%'}}/>
            </div>      

            <div className='section'>
              <SectionTitle title='Wireframing' color={color}/> 
              <Image src={pic2} style={imageMarginNoTop}/>
              <h4 className='heading'> Initial Typography & Colors </h4>
              <Image src={pic3} style={imageMarginNoTop} />
            </div>  

            <div className='section'>
              <SectionTitle title='Mockups' color={color}/> 
              <h4 className='heading'> Mobile </h4>
              <Image src={pic4} style={imageMarginLessBottom}/>
              <Image src={pic5} style={imageMarginNoTop}/>

              <h4 className='heading'> Desktop </h4>
              <p>
                Here are some of the desktop screens as well, they're pretty similar to mobile.
              </p>
              <Image src={pic6} style={imageMarginLessBottom}/>
              <Image src={pic7} style={imageMarginLessBottom}/>

              {this.props.screenWidth > 768 ? 
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

              <h4 className='heading'> Colors </h4>
              <Image src={this.props.screenWidth > 768 ? pic9 : pic12} style={imageMarginNoTop}/>
              <h4 className='heading'> Typography </h4>
              <Image src={this.props.screenWidth > 768 ? pic10 : pic13} style={imageMarginNoTop}/>
              <h4 className='heading'> Iconography </h4>
              <Image src={this.props.screenWidth > 768 ? pic11 : pic14} style={imageMarginNoTop}/>
            </div>

            <div className='section'>
              <SectionTitle title='Final Thoughts' color={color}/> 
              <p>
                My main takeaway from this design challenge was practice with task prioritization. <br/>
                It was due to the time limit I imposed on myself that forced me to rethink the way I usually start off my design projects or tasks.
              </p>
              <p>
                Which things are most important? I need to dedicate most of my time to that. Which things are least important? 
              </p>
              <p>
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
      <FooterSeeAlso page={key}/>
      <Footer screenWidth={this.props.screenWidth} />
      </>
    );
  }
}

export default Edushare;
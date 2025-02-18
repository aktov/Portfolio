import React from 'react';
// import LazyLoad from 'react-lazyload';

import Header from '../Header.js';
import Footer from '../Footer.js';
import FooterSeeAlso from '../FooterSeeAlso.js';
import NavMenu from '../NavMenu.js';
// import Phrase from '../Phrase.js';
import SectionTitle from '../SectionTitle.js';
import TopButton from '../TopButton.js';
import Tags from '../Tags.js';
import Image from '../PageImage.js';
// import ContentsTable from '../ContentsTable.js';

import pic1 from '../../images/Pages/veu/components1.PNG';
import pic2 from '../../images/Pages/veu/components2.PNG';
import pic3 from '../../images/Pages/veu/locations.png';
import pic4 from '../../images/Pages/veu/eventpreview.png';
import pic5 from '../../images/Pages/veu/eventedit.png';
import pic6 from '../../images/Pages/veu/creatorhub.png';
import pic7 from '../../images/Pages/veu/home.png';
import pic8 from '../../images/Pages/veu/profilepublic.png';
import pic9 from '../../images/Pages/veu/settings.png';
import pic10 from '../../images/Pages/veu/mob1.png';
import pic11 from '../../images/Pages/veu/mob2.png';
import pic12 from '../../images/Pages/veu/mob3.png';
import pic13 from '../../images/Pages/veu/mob4.png';
import pic14 from '../../images/Pages/veu/mob5.png';
import pic15 from '../../images/Pages/veu/mob6.png';
import gif1 from '../../images/Pages/veu/props.gif';
import gif2 from '../../images/Pages/veu/variables.gif';


import {getEntryProperty} from '../WorkEntries.js'; // This is a table imported from this file, make edits to case studies and designs there

const key = getEntryProperty('casestudies', 'veu', 'key')
const tags = getEntryProperty('casestudies', 'veu', 'tags')
// const color = getEntryProperty('casestudies', 'veu', 'color')
const color2 = getEntryProperty('casestudies', 'veu', 'color2')
const title = getEntryProperty('casestudies', 'veu', 'title')
const banner = getEntryProperty('casestudies', 'veu', 'banner')
const banner_mob = getEntryProperty('casestudies', 'veu', 'bannerM')
const link = getEntryProperty('casestudies', 'veu', 'website')
const link2 = 'https://enterlink.app/'

const imageMarginNoTop = {marginTop: '0rem', marginLeft: '0rem'};
const imageMarginLessBottom = {marginTop: '0rem', marginBottom: '2rem', marginLeft: '0rem'};
const imageCaptioned = {marginTop: '0.5rem', marginBottom: '1rem', marginRight: 'auto', marginLeft: '0rem'};

class VEU extends React.Component {
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
            <Tags names={tags} color={color2}/>
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
                <p> UX Designer </p>              
                <br/>
                {/* <h4 className='heading'> Links </h4>
                <div className='buttons'>
                  <a 
                    href={link}
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <img src={open} alt='link' draggable='false' /> 
                    <span className='toolTip'> Check out ACE! </span> 
                  </a> 
                </div>
                <br/> */}
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
                {/* <h4> Improving the discoverability of creator-empowered features. </h4> */}
                <h4 className='heading'> A case study is coming soon </h4>
                <p>
                  Still working on how I'd like to tell this story. It's been a great experience overall and I'd love to share about it in the best way possible.
                </p>
                <br/>

                {/* <h4 className='heading'> Disclaimer </h4>
                <p className='bold'>
                  Please understand that I'm unable to provide detailed information about our data nor detailed designs.
                </p>
                <p>
                  I'm limited in the designs I can showcase, but I'll do my best to incorporate them where necessary.
                </p>
                <br/> */}
              </div>
            </div>

            {/* {this.props.screenWidth > 1280 ? <ContentsTable color={color2}/> : null}  */}

            <div className='section'>
              <SectionTitle title='In the meantime...' color={color2}/> 
              <h4 className='heading'> Check out these links  </h4>
              <p>
                Discover <a href={link2} target='_blank'> our product, Enterlink</a>, a platform that makes it easy to find, host, and engage in virtual events and communities—all in one place.
              </p>
              <p>
                View <a href={link} target='_blank'> our company site</a>, to get an idea of our vision and goals.
              </p>
              <br/> <br/> <br/>

              <h4 className='heading'> View snapshots of my designs </h4>
              <p>
                Here are some snapshots of our prototypes in Figma.
              </p>
              <Image src={pic7} style={imageMarginLessBottom}/>
              <Image src={pic8} style={imageMarginLessBottom}/>
              <Image src={pic9} style={imageMarginNoTop}/>
              <div className='imageGallery'>
                <Image src={pic14} style={imageMarginLessBottom}/>
                <Image src={pic13} style={imageMarginLessBottom}/>
                <Image src={pic15} style={imageMarginLessBottom}/>
              </div>
              <br/> <br/> <br/>

              <h4 className='subheading'> Creator Hub </h4>
              <p>
                For our creators and event organizers, the creator hub serves as a portal for building community circles, events, and location.
              </p>
              <Image src={pic3} style={imageMarginLessBottom}/>
              <Image src={pic4} style={imageMarginLessBottom}/>
              <Image src={pic5} style={imageMarginLessBottom}/>
              <Image src={pic6} style={imageMarginNoTop}/>        
              <div className='imageGallery'>
                <Image src={pic12} style={imageMarginLessBottom}/>
                <Image src={pic11} style={imageMarginLessBottom}/>
                <Image src={pic10} style={imageMarginLessBottom}/>
              </div>      
              <br/> <br/> <br/>

              <h4 className='subheading'> Component Library </h4>
              <p>
                Here are a couple of organization sections from our components used throughout Enterlink.
              </p>
              <Image src={pic1} style={imageMarginLessBottom}/>
              <Image src={pic2} style={imageMarginNoTop}/>
              <p>
                Component properties and variants are so crucial when it comes to speeding up my design time.
              </p>
              <Image src={gif1} style={imageMarginNoTop}/>

              <h4 className='subheading'> System Variables </h4>
              <p>
                We use TailwindCSS, so I figured it'd be more efficient if I utilized Tailwind values within our design files too.
              </p>
              <Image src={gif2} style={imageMarginNoTop}/>
              {/* <p className='caption'>
                This gif is a bit laggy, I'd recommend trying out the game for yourself to get a better experience!
              </p> */}

              <br/> <br/> <br/>
              <h4 className='heading'> Can't wait? </h4>
              <p>
                If you'd like to hear more about this, but can't wait, please reach out to me through email or LinkedIn and I'd love to chat more about Enterlink and my designs!
              </p>
            </div>

          </div>
        </div>
      </div>

      <TopButton color={color2} />
      <FooterSeeAlso page={key}/>
      <Footer screenWidth={this.props.screenWidth} />
      </>
    );
  }
}

export default VEU;
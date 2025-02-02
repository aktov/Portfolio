import React from 'react';
// import LazyLoad from 'react-lazyload';

import Header from '../Header.js';
import Footer from '../Footer.js';
import FooterSeeAlso from '../FooterSeeAlso.js';
import NavMenu from '../NavMenu.js';
// import Phrase from '../Phrase.js';
// import SectionTitle from '../SectionTitle.js';
import TopButton from '../TopButton.js';
import Tags from '../Tags.js';
// import ContentsTable from '../ContentsTable.js';

import {getEntryProperty} from '../WorkEntries.js'; // This is a table imported from this file, make edits to case studies and designs there

const key = getEntryProperty('casestudies', 'veu', 'key')
const tags = getEntryProperty('casestudies', 'veu', 'tags')
// const color = getEntryProperty('casestudies', 'veu', 'color')
const color2 = getEntryProperty('casestudies', 'veu', 'color2')
const title = getEntryProperty('casestudies', 'veu', 'title')
const banner = getEntryProperty('casestudies', 'veu', 'banner')
const banner_mob = getEntryProperty('casestudies', 'veu', 'bannerM')
// const link = getEntryProperty('casestudies', 'veu', 'website')



// const Bullets = (props) => {
//   return (
//   <div className='phrases'>
//     {props.info.map((phrase, index) => 
//       <Phrase key={'alike/' + index} text={phrase}/>
//     )}
//   </div>
//   );
// };

// const Image = (props) => {
//   return (
//     <div className='imageHolder' style={props.style || null}>
//       <LazyLoad 
//         height={200} 
//         offset={100}
//       >
//         <img 
//           src={props.src} 
//           alt='' 
//           draggable='false'           
//           data-aos='fade-up' 
//           data-aos-offset='50' 
//           data-aos-easing='ease-out-sine'
//           data-aos-duration='400'
//           data-aos-once={true}
//         /> 
//       </LazyLoad>
//     </div>
//   );
// };

// const Tags = (props) => {
//   return (
//     <div className='tags'>
//       {props.names.map((name) =>
//         <h5 key={name} style={{color: props.color2}}> {name.toUpperCase()} </h5>
//       )}
//     </div>
//   );
// }



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
                <h4 className='heading'> Case study coming soon </h4>
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
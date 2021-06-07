import React from 'react';

import Header from '../Header.js';
import Footer from '../Footer.js';
import NavMenu from '../NavMenu.js';
import Contact from '../Contact.js';
import ResumeActual from '../Resume.js';

import background from '../../images/backgroundIII.svg';


const backgroundStyle = {
  width:'100%',
  height: 'auto',
  zIndex: '2'
}


class Resume extends React.Component {
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

      <div className='app' style={{backgroundColor: '#F0E6E7'}}>
        {/* Show Navmenu if on mobile */}
        {!(this.props.screenWidth > 768) &&
          <NavMenu toggleMenu={this.toggleMenu} screenWidth={this.props.screenWidth} menuOpen={this.state.menuOpen}/> 
        }
        {/* Show Contact if on desktop */}
        {this.props.screenWidth > 768 &&
          <Contact screenWidth={this.props.screenWidth} /> 
        }

        <div className='content' style={{marginTop:'3rem', backgroundColor: '#F0E6E7'}}>
          <div id='anchor_page' className='anchor' style={{top: '-1000px'}}></div>
          {/* <img 
            className='banner' 
            src={this.props.screenWidth > 640 ? bannerD : bannerM} 
            alt='Banner' 
            draggable='false'          
            data-aos='fade' 
            data-aos-offset='50' 
            data-aos-easing='ease-out-sine'
            data-aos-duration='400'
            data-aos-once={true}  
          /> */}

          <div className='pages' style={this.props.screenWidth > 640 ? {marginTop:'7rem', marginBottom: '0rem'} : {width: '75%', marginTop:'5rem', marginBottom: '0rem'}}>

            <h3 
              className='title'
              data-aos='fade' 
              data-aos-offset='50' 
              data-aos-easing='ease-out-sine'
              data-aos-duration='400'
              data-aos-once={true}
              // style={{marginTop: '5rem'}}
            > 
              {'UI/UX Designer'.toUpperCase()} 
            </h3>

            <div className='intro'>
              {/* <div 
                className='col' 
                style={this.props.screenWidth > 640 ? null : {width: '100%'}}
                data-aos='fade' 
                data-aos-offset='50' 
                data-aos-easing='ease-out-sine'
                data-aos-duration='400'
                data-aos-delay='400'
                data-aos-once={true}
              > 
                <h4 className='heading'> TITLE </h4>
                <h4> UI/UX Designer </h4>              

                <br/>
              </div> */}
              <div 
                className='col' 
                style={this.props.screenWidth > 640 ? {width: '100%'} : {width: '100%'}}
                data-aos='fade' 
                data-aos-offset='50' 
                data-aos-easing='ease-out-sine'
                data-aos-duration='400'
                data-aos-delay='100'
                data-aos-once={true}
              >
                <h4 className='heading'> SUMMARY </h4>
                <h4> 
                  Detail-oriented UI/UX Designer with over 3 years of project and work experience and a passion for user-centered design. 
                  Currently seeking opportunities to design innovative solutions that will improve user satisfaction and experiences!
                </h4> 
              </div>
            </div>

            <ResumeActual screenWidth={this.props.screenWidth} />        
          </div>
        </div>

        <img 
          src={background}
          alt={'background'}
          style={backgroundStyle}
        /> 

        <Footer screenWidth={this.props.screenWidth} color='#405E7A' />
      </div>  
      </>
    );
  }
}

export default Resume;
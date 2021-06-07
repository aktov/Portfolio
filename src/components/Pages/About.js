import React from 'react';
import LazyLoad from 'react-lazyload';

import Header from '../Header.js';
import Footer from '../Footer.js';
import NavMenu from '../NavMenu.js';
import Contact from '../Contact.js';

import prof from '../../images/profilePic2.jpg';
import background from '../../images/backgroundIV.svg';

const backgroundStyle = {
  width:'100%',
  height: 'auto',
  zIndex: '2'
}


class About extends React.Component {
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

    const styleD = {
      zIndex: '2',
      marginTop:'7rem',
      backgroundColor: '#ffffff',
      borderRadius: '1rem',
      padding: '3rem',
    };

    const styleM = {
      zIndex: '2',
      width: '75%', 
      marginTop:'5rem'
    };

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

        <div className='content' style={{marginTop:'3rem', overflow: 'hidden', backgroundColor: '#F0E6E7'}}>
          
          {/* <img 
            className='banner' 
            src={this.props.screenWidth > 640 ? bannerD : bannerM} 
            style={{position: 'absolute', top: '0%', alignSelf: 'center', height: 'auto', width: '100%'}}
            alt='Banner' 
            draggable='false'          
            data-aos='fade' 
            data-aos-offset='50' 
            data-aos-easing='ease-out-sine'
            data-aos-duration='400'
            data-aos-once={true}  
          /> */}

          <div className='pages' style={this.props.screenWidth > 640 ? styleD : styleM}>
            <h3 
              className='title'
              data-aos='fade' 
              data-aos-offset='50' 
              data-aos-easing='ease-out-sine'
              data-aos-duration='400'
              data-aos-once={true}
            > 
              {'About Me'.toUpperCase()} 
            </h3>

            {/* <div className='intro'>
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
                <h4 className='heading'> TITLE </h4>
                <h4> UI/UX Designer </h4>              

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
                  Detail-oriented UI/UX Designer with over 3 years of project and work experience and a passion for user-centered design. 
                  Currently seeking opportunities to design innovative solutions that will improve user satisfaction and experiences!
                </h4> 
              </div>
            </div> */}

            <div className='about' style={this.props.screenWidth > 640 ? null : {flexFlow: 'column-reverse'}}>
              <div 
                className='text' 
                style={this.props.screenWidth > 640 ? null : {width: '100%'}}
              >
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='100'
                  data-aos-once={true}
                > I’m Alex, and I often find my head stuck in daydreams and clouds. Why? It's simply because I like to think of ideas that can be materialized through design. </p>
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='200'
                  data-aos-once={true}
                > Having graduated from <b>UC San Diego</b> with a B.S. in <b>Human Computer Interaction</b>, I’ve come to truly believe that good user-centric design has the potential to greatly benefit the world. Design isn’t just about “making things look good”; it’s much more than that. It’s about <b>providing an excellent overall user experience</b> that will ensure the user’s satisfaction. </p>
                <p
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-delay='300'
                  data-aos-once={true}
                > If you’re interested in getting to know me more or want to hear more about my projects, feel free to message me. I’d love to connect or collaborate! </p>
              </div>
              <div 
                className={this.props.screenWidth > 640 ? 'pic desktop' : 'pic mobile'}
                data-aos='fade' 
                data-aos-offset='50' 
                data-aos-easing='ease-out-sine'
                data-aos-duration='400'
                data-aos-delay='200'
                data-aos-once={true}
              > 
                <LazyLoad height={200} offset={100}>
                  <img src={prof} alt='ProfilePic' draggable='false'/> 
                </LazyLoad>
              </div>
            </div>
            

            {/* <div className='section'>
              <SectionTitle title='About me'/> 
              <h4 className='heading'> MOTIVATION </h4>
              <div style={actualStyle}>
                <div>
                  <p> I’m Alex, and I often find my head stuck in daydreams and clouds. Why? It's simply because I like to think of ideas that can be materialized through design. </p>
                  <p> Having graduated from <b>UC San Diego</b> with a B.S. in <b>Human Computer Interaction</b>, I’ve come to truly believe that good user-centric design has the potential to greatly benefit the world. Design isn’t just about “making things look good”; it’s much more than that. It’s about <b>providing an excellent overall user experience</b> that will ensure the user’s satisfaction. </p>
                  <p> If you’re interested in getting to know me more or want to hear more about my projects, feel free to message me. I’d love to connect or collaborate! </p>
                </div>
                <div 
                  className={this.props.screenWidth > 640 ? 'pic desktop' : 'pic mobile'}
                  data-aos='fade' 
                  data-aos-offset='50' 
                  data-aos-easing='ease-out-sine'
                  data-aos-duration='400'
                  data-aos-once={true}
                > 
                  <LazyLoad height={200} offset={100}>
                    <img src={prof} alt='ProfilePic' draggable='false' /> 
                  </LazyLoad>
                </div>
              </div>
            </div>           */}
                      
          </div>
        </div>

        <img 
          src={background}
          alt={'background'}
          style={backgroundStyle}
        /> 
      </div>

      <Footer screenWidth={this.props.screenWidth} />
      </>
    );
  }
}

export default About;
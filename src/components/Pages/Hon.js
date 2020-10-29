import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import Header from '../Header.js';
import Footer from '../Footer.js';
import NavMenu from '../NavMenu.js';
import Contact from '../Contact.js';
import Phrase from '../Phrase.js';
import SectionTitle from '../SectionTitle.js';

import banner from '../../images/banner_hon.png';
import pic1 from '../../images/hon/1.png';
import pic2 from '../../images/yahoo/2.png';
import pic3 from '../../images/yahoo/3.png';
import pic4 from '../../images/yahoo/4.png';
import pic5 from '../../images/yahoo/5.png';
import pic6 from '../../images/yahoo/6.png';
import pic7 from '../../images/yahoo/7.png';
import pic8 from '../../images/yahoo/8.png';
import pic9 from '../../images/yahoo/9.png';
import pic10 from '../../images/yahoo/10.png';
import pic11 from '../../images/yahoo/11.png';
import pic12 from '../../images/yahoo/12.png';
import pic13 from '../../images/yahoo/13.png';
import pic14 from '../../images/yahoo/14.png';
import pic15 from '../../images/yahoo/15.png';
import pic16 from '../../images/yahoo/16.png';

const style = {
  width: '90%',
  margin: 'auto',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const Bullets = (props) => {
  return (
  <div className='phrases'>
    {props.info.map((phrase, index) => 
      <Phrase key={'yahoo/' + index} text={phrase}/>
    )}
  </div>
  );
}

const Image = (props) => {
  return (
    <div className='imageHolder'>
      <LazyLoad 
        height={200} 
        offset={100}
      >
        <img src={props.src} alt='' draggable='false' /> 
      </LazyLoad>
    </div>
  );
}

const goals = [
  'Learn how to conduct user research and analysis',
  'Understand how to pinpoint usability errors and its source, as well as communicate the pros and cons of a UI design through our observations',
  'Learn how to create high fidelity prototypes using Figma',
  'Understand the importance of a user-centered design approach'
]

const needsClients = [
  'read posts easily',
  'find more related posts to read',
  'reach or contact Hon-Media',
  'view Hon-Media\'s socials',
  'navigate to Hon-Media\'s main site',
  'engage with the posts by liking or commenting',
  'easily share the posts on my own social media or email',
]

const needsDevs = [
  'easily create new posts on the site',
  'manage the posts that are currently online'
]

class Hon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
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
          <img className='banner' src={banner} alt='Yahoo' draggable='false'/>
          <div className='pages' style={this.props.screenWidth > 640 ? {marginTop:'3rem'} : {width: '75%', marginTop:'3rem'}}>

            <h3 className='title'> {'Hon-Media Blogsite Design'.toUpperCase()} </h3>

            <div className='intro'>
              <div className='col'> 
                <h4 className='heading'> ROLE </h4>
                <h4> UI/UX Designer </h4>
                <br/>
              </div>
              <div className='col'>
                <h4 className='heading'> SUMMARY </h4>
                <h4> 
                  I designed a blogsite for Hon-Media that has features two different views, one for regular users, 
                  and one for the company's developers.
                </h4>
              </div>
            </div>

            <div className='section'>
              <SectionTitle title='intro'/> 
              <h4 className='heading'> MOTIVATION </h4>
              <p> 
                Hon-Media ultimately wants to aid San Diego companies in need during this pandemic, and to 
                be able to do that effectively, they want to get their name and branding out there.
                The company already has a main website, however they want to post the stories and experiences 
                they've had with their clients onto their own blogsite to increase user traffic and recognition.
              </p>
              <p> 
                In short, they want to post articles, and they want users to be able to read and share them.
              </p>
            </div>          
                      
            <div className='section'>
              <SectionTitle title='NEED FINDING'/> 
              <h4 className='heading'> USER NEEDS </h4>
              <p> 
                Based on how Hon-Media described their blog, it's clear to me that there are two main user groups
                to design for.
              </p>
              <br/>
              <h4 className='subheading'> CLIENTS & VIEWERS </h4>
              <p> 
                This is the main user group that I want the site to target. Ultimately, Hon-Media wants this site
                to funnel users to their main site, where they can learn more about the company and eventually 
                contact them.
              </p>
              <p> As a user, I need to be able to: </p>
              <Bullets info={needsClients}/>  
              <br/>
              
              <h4 className='subheading'> HON-MEDIA TEAM MEMBERS </h4>
              <p>
                Since Hon-Media will be the ones posting, they want convenient and fluid ways to create and manage posts
                and other content on the site.
              </p>
              <p> As a Hon-Media team member, I need to be able to: </p>
              <Bullets info={needsDevs}/>  
            </div>      

            <div className='section'>
              <SectionTitle title='WIREFRAMING'/> 
              <h4 className='heading'> SITE ARCHITECTURE </h4>
              <p> 
                Based on the user needs described above, it seems like the site should have four main features,
                one of which is exclusive to Hon-Media team members. From the home page, users should be able to 
                read blog posts on a separate page, and be able to interact with the post and share it, as well
                as find related posts.
              </p>
              <p>
                The blogsite should also have links to Hon-Media\'s main site and their contact info'.
              </p>
              <p>
                Lastly, Hon-Media team members should have a way to create and manage content on the site.
              </p>
              <Image src={pic1} />

              <h4 className='heading'> WIREFRAMES </h4>
              
            </div>  

            <Link to='/'> <button className='sadButton'> return home </button> </Link>
          </div>
        </div>

        



      </div>

      <Footer screenWidth={this.props.screenWidth} />
      </>
    );
  }
}

export default Hon;
import React from 'react';
import LazyLoad from 'react-lazyload';

import Header from '../Header.js';
import Footer from '../Footer.js';
import NavMenu from '../NavMenu.js';
import Contact from '../Contact.js';
import Phrase from '../Phrase.js';
import SectionTitle from '../SectionTitle.js';
import TopButton from '../TopButton.js';

import banner from '../../images/banner_hon.png';
import figma from '../../images/figmaLogo_black.svg';
import pic1 from '../../images/hon/1.png';
import pic2 from '../../images/hon/2.png';
import pic3 from '../../images/hon/3.png';
import pic4 from '../../images/hon/4.png';
import pic6 from '../../images/hon/6.png';
import pic7 from '../../images/hon/7.png';
import pic8 from '../../images/hon/8.png';
import pic9 from '../../images/hon/9.png';
import pic10 from '../../images/hon/10.png';
import pic11 from '../../images/hon/11.png';
import pic12 from '../../images/hon/12.png';
import pic13 from '../../images/hon/13.png';
import pic14 from '../../images/hon/14.png';
import pic15 from '../../images/hon/15.png';
import pic16 from '../../images/hon/16.png';
import pic17 from '../../images/hon/17.png';
import pic18 from '../../images/hon/18.png';
import pic19 from '../../images/hon/19.png';
import pic20 from '../../images/hon/20.png';

const Bullets = (props) => {
  return (
  <div className='phrases'>
    {props.info.map((phrase, index) => 
      <Phrase key={'yahoo/' + index} text={phrase}/>
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

const tags = ['Figma', 'storyboarding', 'diagramming', 'wireframing', 'prototyping', 'user testing'];

const needsClients = [
  'read posts easily',
  'find more related posts to read',
  'reach or contact Hon-Media',
  'view Hon-Media\'s socials',
  'navigate to Hon-Media\'s main site',
  'engage with the posts by liking or commenting',
  'easily share the posts on my own social media or email',
];

const needsDevs = [
  'easily create new posts on the site',
  'manage the posts that are currently online'
];

const imageMarginNoTop = {marginTop: '0rem'};
const imageMarginLessBottom = {marginTop: '0rem', marginBottom: '2rem'};
const color = '#536D90'


class Parking extends React.Component {
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
            src={banner} 
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
              {'Parking Fine'.toUpperCase()} 
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
                <h4 className='heading'> TEAM </h4>
                <h4> Alex Tov, Carolina Li, Matthew Tiernan, Yumi Minami, Cruz Rico, Omer Usmani </h4> 
                <br/>
                <h4 className='heading'> FIGMA LINKS </h4>
                <div className='buttons'>
                  <a 
                    href='https://www.figma.com/proto/FJIhLsq3WEDOox5VfArU3fuF/Parking-Fine-Kiosk?node-id=5%3A2&scaling=contain'
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <img src={figma} alt='figma' draggable='false' /> 
                    <span className='toolTip'> figma </span> 
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
              <SectionTitle title='need finding'/> 
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
              <SectionTitle title='wireframing'/> 
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

              <h4 className='heading'> HOME PAGE </h4>
              <p> The home page starts off with a featured blogs section, with recent posts below. </p>
              <Image src={pic2} style={imageMarginNoTop}/>
              <h4 className='heading'> BLOG POST PAGE </h4>
              <p> 
                Each post will have it's own blog page, which looks like what you expect. Viewers can interact 
                with the post by liking or commenting, and they can also share the post on their social media.
              </p>
              <p> 
                Posts will also have specific tags that give insight onto the topics covered. These can possibly 
                serve as a way to find related articles.
              </p>
              <Image src={pic3} style={imageMarginNoTop}/>
              <h4 className='heading'> CREATE & MANAGE POSTS </h4>
              <p> 
                These pages will be exclusive to Hon-Media team members and will probably be accessed with a login.
                They'll let the team members easily create new posts as well as edit/delete old ones.
              </p>
              <Image src={pic4} style={imageMarginNoTop}/>
            </div>  

            <div className='section'>
              <SectionTitle title='prototyping'/> 
            </div>

            <div className='section'>
              <SectionTitle title='final thoughts'/> 
              <p>
                I've got to say, I was a bit intimidated by this project at the start. It was my first time
                having the freedom to design as I pleased. In all the past projects I've done, I have had at least
                one other teammate to bounce ideas off of, but for this project, all I had was feedback from Hon-Media
                and their ideas for what they envisioned.
              </p>
              <p>
                It was definitely a good learning experience, especially since I learned some more tips and tricks with
                Figma smart animations and components. I'm excited to see what the web dev team does with this design,
                and hopefully it'll be implemented as a real site soon.
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

export default Parking;
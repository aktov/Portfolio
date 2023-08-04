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

function importImages(r) {
  return r.keys().map(r);
}
const iconsOutlined = importImages(require.context('../../images/Pages/ace/iconsOutlined', false, /\.(png|jpe?g|svg)$/));
const iconsFilled = importImages(require.context('../../images/Pages/ace/iconsFilled', false, /\.(png|jpe?g|svg)$/));
const iconsUnused = importImages(require.context('../../images/Pages/ace/iconsUnused', false, /\.(png|jpe?g|svg)$/));

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

const tags = ['ux design', 'web3', 'blockchain', 'crowdfunding', 'social networking']

const problemGoals = [
  'Better clarity and instructions for our creators',
  'Increased discoverability for their fans',
];

const kpis = [
  'Total Registered Users',
  'Amount of activated creators',
  'Daily Active Users (DAU)',
  'Access Token transactions'
];

const imageMarginNoTop = {marginTop: '0rem'};
const imageMarginLessBottom = {marginTop: '0rem', marginBottom: '2rem'};
const color = '#FBE7E7'
const color2 = '#EAA4C1'

const iconGallery = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  rowGap: '24px',
  columnGap: '24px',

  marginTop: '16px',
  marginBottom: '64px'
}

const imageIcon = {width: '32px', margin: 0}
const imageIconMobile = {width: '32px', margin: 0}


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
              {'Artist Crowdfund Exchange'} 
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
                  This case study will address the most pressing issue we faced, our product's growth, and will include our KPIs, research processes, and solutions for it.
                </p>
                <p>
                  Although I can't share the specifics for the data we gathered, the info below should be enough to give the general idea.
                </p>
                <br/>
                {/* <h4 className='heading'> Team </h4>
                <p> We were a small startup, so I worked closely with our founders and engineers. Of the team, here are those I worked most with: </p>
                <div className='teamColumns'>
                  <p> <b> Founders </b> <br/> Omi Iyamu [CTO] <br/> Darren [CEO] <br/> DJ [COO] </p>
                  <p> <b> Product </b> <br/> Erick Wahome [Product Manager] <br/> Jade French [Marketing Lead] <br/> Deepa Patil [UX Researcher] </p>
                </div>
                <p> <b> Front End Engineers </b> <br/> Jose Ambrosio <br/> Erik German <br/> Deep Bhavsar <br/> Jignesh Maheshwari <br/> Bharat Sindhav </p>
                <br/> */}
              </div>
            </div>

            <div className='section'>
              <SectionTitle title='Intro'/> 
              <h4 className='heading'> What's Artist Crowdfund Exchange? </h4>
              {/* <p>
                I'm still working it out with Omi on which features of the app I can showcase and talk about, so I can't specifically talk about the features I worked on in detail just yet.
              </p>
              <p>
                In the meantime, this page will be a showcase of various screens and icons that I've designed. <br/>
                Connect with or message me if you'd like to hear more about my time at ACE!
              </p>
              <p>
                <b> Disclaimer: There's a lot of images on this page, so please be patient and give them some time to load! </b>
              </p> */}
              <p>
                Artist Crowdfund Exchange (ACE) is a Web3 crowdfunding platform which allows creators to directly raise income from their followers to grow independently without the hassle of ad sponsorships or contracts.
              </p>
              <br/>

              <h4 className='subheading'> How do creators make money? </h4>
              <p>
                Creators that join ACE are able to create and sell their own "Access Tokens", which unlock exclusive perks or benefits for their token holders. <br/>
                The amount of tokens put up for sale and its selling price is entirely decided by the creator to induce whatever demand and worth they're seeking.
              </p>
              <p>
                Think of it like Patreon, where monthly donations from subscribers unlock exclusives for them, such as behind-the-scenes or unreleased videos or merch.
              </p>
              <p>
                The difference at ACE however, allows Access Tokens to be resold, which potentially increases the worth of the creator's tokens. <br/>
              </p>
              <br/> <br/> <br/>

              <h4 className='heading'> The Team </h4>
              <p>
                ACE was an early-stage startup, so I had the opportunity to work closely with our entire team. <br/> Here are those I worked most with:
              </p>
              <br/>
              <div className='grid'>
                <div className='gridCell'>
                  <h4 className='subheading'> Founders </h4>
                  <p> Omi Iyamu, CTO <br/> Darren, CEO <br/> DJ, COO </p>
                </div>
                <div className='gridCell'>
                  <h4 className='subheading'> Product </h4>
                  <p> Erick Wahome, PM <br/> Jade French, Marketing Lead <br/> Deepa Patil, UX Researcher </p>
                  <br/>
                </div>
                <div className='gridCell'>
                  <h4 className='subheading'> Front-End Developers </h4>
                  <p> Jose Ambrosio <br/> Erik German <br/> Deep Bhavsar <br/> Jignesh Maheshwari <br/> Bharat Sindhav </p>
                </div>
              </div>

            </div>

            <div className='section'>
              <SectionTitle title='Users'/> 
              <h4 className='heading'>
                Our two audiences we were designing for:
              </h4>
              <br/>
              <div className='grid'>
                <div className='gridCell'>
                  <h4 className='subheading'> Creators </h4>
                  <p>
                    Users that would set up their Access Tokens and their token benefits.
                  </p>
                  <p>
                    Typically came from other platforms and already have decent fame or following.
                  </p>
                  <p>
                    We encouraged these users to tell their followers about ACE to bring them along.
                  </p>
                </div>
                <div className='gridCell'>
                  <h4 className='subheading'> Fans </h4>
                  <p>
                    Users who would buy creator tokens and gain access to exclusive content, typically from creators they're interested in.
                  </p>
                  <p>
                    Most of these users would be brought into ACE by their creator.
                  </p>
                </div>
              </div>
              <br/> <br/> <br/>

              <h4 className='heading'> User acquisition strategy </h4>
              <p>
                Marketing launched email campaigns to target creators with at least 1,000 followers total across their various different social platforms.
              </p>
              <br/>
              
              <div className='grid'>
                <div className='gridCell'>
                  <h4 className='subheading'> 10,000 users by the end of Q4 2022 </h4>
                  <p>
                    Bring on 100 creators, who in turn would bring on at least 10% of their followers.
                  </p>    
                  <p>  
                    100 (1 creator ✕ 100 followers each) = 10,000 total users
                  </p>
                </div>
                <div className='gridCell'>
                  <h4 className='subheading'> Focus on acquiring creators </h4>
                  <p>
                    We assumed that the creators would take on the task of bringing on their followers, so our main focus was on acquiring creators.
                  </p>
                </div>
              </div>
              <br/>

              
              
            </div>

            <div className='section'>
              <SectionTitle title='Problem'/> 
              <h4 className='heading'> Our total users metric grew significantly slower than trajected. </h4>
              <p>
                We had successfully onboarded 100 creators, but the amount of total users fell short of our anticipated numbers.
              </p>
              <br/>

              <h4 className='subheading'> Creators didn't know about Access Tokens. </h4>
              <p> 
                Creators were eager to join the platform but either were confused about Access Tokens or haven't heard about it at all. 
              </p>
              <br/> <br/> <br/>

              <h4 className='heading'> Identifying the breakdowns </h4>
              <br/>
              <div className='grid'>
                <div className='gridCell'>
                  <h4 className='subheading'> Surveys </h4>
                  <p>
                    Email surveys sent out to our users asked if they joined ACE as a creator, or as a follower of a creator.
                  </p>
                  <p>
                    Majority of the responses stated they were creators.
                  </p>
                  <p>
                    Of these creators, majority also did not know how to activate their Access Tokens.
                  </p>
                </div>
                <div className='gridCell'>
                  <h4 className='subheading'> Analytics </h4>
                  <p>
                    Most creators haven't discovered the Access Tokens page, and of those that did, failed to complete the activation flow.
                  </p>
                  <p>
                    For creators that have activated their tokens, sales transactions were rare.
                  </p> 
                </div>
                <div className='gridCell'>
                  <h4 className='subheading'> Activity Feed </h4>
                  <p>
                    Users often posted questions or asked how to make money on the platform, tagging our official ACE profile.
                  </p>
                  <br/>
                </div>
              </div>
              <br/> <br/> <br/>

              <h4 className='heading'> Our Findings </h4>
              <p>
                Most of our users did not know what Access Tokens were. <br/>
                Creators did however, understand they could make profit on the platform.
              </p>
            </div>

            <div className='section'>
              <SectionTitle title='Goal'/>
              <h4 className='heading'> Improve our Access Tokens feature </h4>
              <p>
                Our Access Tokens feature needed:
              </p>
              <Bullets info={problemGoals}/> 
              <br/>
              {/* <p>
                Add more information about the feature. Include step-by-step guides walking our creators through activation. Incorporate examples of use cases.
              </p> */}

              <h4 className='subheading'> We expected a direct causation between Access Tokens and growth. </h4>
              <p>
                Access Tokens were the supposed to be the main motivator in bringing on a creator's followers.
              </p>
              <br/> <br/> <br/>

              <h4 className='heading'> Our KPIs </h4> 
              <br/>
              <Bullets info={kpis}/> 
              <p>
                Access Token transactions was also a good indicator of user engagement, and would directly drive profit.
              </p>

            </div>

            {/* <div className='section'>
              <SectionTitle title='Screens'/> 
              <h4 className='heading'> Feature Showcase </h4>
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
            </div> */}

            {/* <div className='section'>
              <SectionTitle title='Icons'/> 
              <p>
                I designed over 90% of the icons that are used in the app. Here's a quick overview showing them all.
              </p>
              <p>
                Within our design system, they're categorized into two groups, "outlined" and "filled".
              </p>
              <br/>

              <h4 className='heading'> Outlined </h4>
              <div style={iconGallery}>
                {iconsOutlined.map((img) => 
                  <Image src={img} key={img} style={this.props.screenWidth > 768 ? imageIcon : imageIconMobile}/>
                )}
              </div>
              
              <h4 className='heading'> Filled </h4>
              <div style={iconGallery}>
                {iconsFilled.map((img) => 
                  <Image src={img} key={img} style={this.props.screenWidth > 768 ? imageIcon : imageIconMobile}/>
                )}
              </div>
              
              <h4 className='heading'> Unused </h4>
              <p> Here are icons that didn't make the cut, but I'd like to show them off just because I'm pretty proud of how they look. </p>
              <div style={iconGallery}>
                {iconsUnused.map((img) => 
                  <Image src={img} key={img} style={this.props.screenWidth > 768 ? imageIcon : imageIconMobile}/>
                )}
              </div>
            </div>            */}


            <div className='section'>
              <SectionTitle title='Final Thoughts'/> 
              <p> 
                My thoughts go here.
              </p> 

              <br/> <br/> <br/>
              <h4 className='heading'> Still interested? </h4>
              <p> 
                ACE has been a highlight in my UX Design career, and although I'd love to share all about it, I can only feature so much in this case study.
              </p> 
              <p>
                Check out my resume entry for ACE or contact me to hear more about my other accomplishments and responsibilities at ACE!
              </p>              
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
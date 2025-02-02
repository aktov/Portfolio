import React from 'react';

import Header from '../Header.js';
import Footer from '../Footer.js';
import FooterSeeAlso from '../FooterSeeAlso.js';
import NavMenu from '../NavMenu.js';
import Phrase from '../Phrase.js';
import SectionTitle from '../SectionTitle.js';
import TopButton from '../TopButton.js';
import Tags from '../Tags.js';
import Image from '../PageImage.js';
import ContentsTable from '../ContentsTable.js';

import {getEntryProperty} from '../WorkEntries.js'; // This is a table imported from this file, make edits to case studies and designs there
// import open from '../../images/open.svg';

import pic1 from '../../images/Pages/alike/new/01.png';
import pic2 from '../../images/Pages/alike/new/02.png';
import pic3 from '../../images/Pages/alike/new/03.png';
import pic4 from '../../images/Pages/alike/new/04.png';
import pic5 from '../../images/Pages/alike/new/05.png';
import pic6 from '../../images/Pages/alike/new/06.png';
import pic7 from '../../images/Pages/alike/new/07.png';
import pic8 from '../../images/Pages/alike/new/08.png';
import pic9 from '../../images/Pages/alike/new/09.png';
import pic10 from '../../images/Pages/alike/new/10.png';
import pic11 from '../../images/Pages/alike/new/11.png';
import pic12 from '../../images/Pages/alike/new/12.png';
import pic13 from '../../images/Pages/alike/new/13.png';
import pic14 from '../../images/Pages/alike/new/14.png';
import pic15 from '../../images/Pages/alike/new/15.png';
import pic16 from '../../images/Pages/alike/new/16.png';
import pic17 from '../../images/Pages/alike/new/17.png';
import pic18 from '../../images/Pages/alike/new/18.png';
import pic19 from '../../images/Pages/alike/new/19.png';
import pic20 from '../../images/Pages/alike/new/20.png';
import pic21 from '../../images/Pages/alike/new/21.png';
import pic22 from '../../images/Pages/alike/new/22.png';
import pic23 from '../../images/Pages/alike/new/23.png';
import pic24 from '../../images/Pages/alike/new/24.png';
import pic25 from '../../images/Pages/alike/new/25.png';
// import picDesignProcess from '../../images/Pages/alike/new/designProcess.svg';

// import persona1 from '../../images/Pages/alike/5.png';
// import persona2 from '../../images/Pages/alike/6.png';
// import picPersona from '../../images/Pages/alike/Persona.png';

const key = getEntryProperty('casestudies', 'alike', 'key')
const tags = getEntryProperty('casestudies', 'alike', 'tags')
const color = getEntryProperty('casestudies', 'alike', 'color')
const title = getEntryProperty('casestudies', 'alike', 'title')
const banner = getEntryProperty('casestudies', 'alike', 'banner')
const banner_mob = getEntryProperty('casestudies', 'alike', 'bannerM')

const Bullets = (props) => {
  return (
  <div className='phrases'>
    {props.info.map((phrase, index) => 
      <Phrase key={'alike/' + index} text={phrase}/>
    )}
  </div>
  );
};

// const descr = [
//   'Modified and updated existing app screens with UI designs more aligned with modern trends and styles (e.g. navigation bar, headers, icons, and many other specific screens)',
//   'Designed prototypes of new app screens and new user flows on Figma for the dev team to create',
//   'Used Figma Prototyping to turn our static prototype screens into a functional, interactable flow which better helped the developers visualize the app and its functionality',
//   'Helped quadruple the conversion rate of app downloads to users'
// ];

const kpis = [
  'Downloads',
  'Total Registered Users',
];

const survey = [
  'Users that have the app downloaded but have not onboarded, via push notifications',
  'New users from Subtle Asian Traits, a facebook group'
];


// const imageMarginNoTop = {marginTop: '0rem'};
const imageMarginLessBottom = {marginTop: '0rem', marginBottom: '2rem'};
// const imageLarger = {marginTop: '4rem', marginBottom: '4rem', width: '120%'};
// const smallerImage = {marginTop: '0rem', width: '70%'}


class Alike extends React.Component {
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
                <h4 className='heading'> Role </h4>
                <p> UX Designer </p>              
                <br/>
                {/* <h4 className='heading'> LINKS </h4>
                <div className='buttons'>
                  <a 
                    href='https://www.alike.dating/'
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <img src={open} alt='link' draggable='false' /> 
                    <span className='toolTip'> Check out Alike! </span> 
                  </a> 
                </div> */}
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
                In addition to updating user flows and improving user experiences, my main objective was to tackle Alike's primary goal at the time, growth, 
                without sacrificing the company's mission of elevating video to the forefront of community interactions.
                </p> 
                {/* <h4 className='heading'> Team </h4>
                <p> I worked directly with the CEO. </p>
                <p> Hanmin Yang [CEO]  </p> */}
              </div>
            </div>

            {this.props.screenWidth > 1280 ? <ContentsTable color={color}/> : null} 

            <div className='section'>
              <SectionTitle title='Intro' color={color}/> 
              <h4 className='heading'> What's Alike? </h4>
              <p> 
                Alike is a video-first dating and social app centered on promoting Western Asian culture, where profiles are brought to life with video, showcasing personality, character, and vibes.
              </p>
              <p>
                Alike strives to foster a community where each individual can connect with others over topics about their culture, upbringing, or way of life. 
              </p>
              <p>
                We want to bring profiles to life by incorporating video, in addition to just photos and texts, because we believe that it emphasizes an individual's personality,
                all in hopes that it'll inspire more genuine connections and conversations for everyone.
              </p>
              {/* <br/>
              <div className='imageGallery'>
                <Image src={persona1} style={imageMarginLessBottom}/>
                <Image src={persona2} style={imageMarginLessBottom}/>
              </div> */}
            </div>    

            <div className='section'>
              <SectionTitle title='Problem' color={color}/> 
              <h4 className='heading'> Users were downloading our app, but were not signing up. </h4>
              <p> 
                Analytics revealed our app yielded a low signup conversion rate, despite a high downloads conversion rate. 
              </p>
              <p>
                The drop-off point of our onboarding flow was determined to be the video upload step. 
              </p>
              <p>
                This step requires users to respond to at least 1 prompt of their choice in the form of a video, but it seemed that users did not want to, and consequently abandoned their signup. 
              </p>
              <br/> <br/> <br/>


              <h4 className='heading'> Identifying the breakdowns </h4>
              <br/>
              <div className='grid'>
                <div className='gridCell'>
                 <h4 className='subheading'> Surveys </h4>
                  <p>
                    Conducted a usability survey with participants from two sources.
                  </p>
                  <Bullets info={survey}/>
                </div>
                <div className='gridCell'>
                  <h4 className='subheading'> Competitive analysis </h4>
                  <p>
                    Research on our competition revealed that the onboarding processes for their apps could be done from anywhere, anytime, and more importantly, effortlessly.
                  </p>
                </div>
              </div>
              <br/> <br/> <br/>

              <h4 className='heading'> Our findings </h4>
              <p>
              Users were not comfortable recording a video at the time, or had a lack of time to record. 
              </p>
              <p>
              Recording video required time, space, and composure to ensure it was profile-worthy. 
              </p>
              <p>
              Users wanted to look their best at the time of onboarding, which was rare.
              </p>
              <br/>

              <div className='imageGallery'>
                <Image src={pic1} style={imageMarginLessBottom}/>
                <Image src={pic2} style={imageMarginLessBottom}/>
                <Image src={pic3} style={imageMarginLessBottom}/>
              </div>
            </div>
            
            <div className='section'>
              <SectionTitle title='Goals' color={color}/>
              <h4 className='heading'> 
                Encourage new users to sign up without compromising the app's key philosophy, video
              </h4>
              <p>
                Our findings indicated that our users were reluctant to record their videos during onboarding. 
              </p>
              <p>
                How can we successfully onboard our users, but still require them to record videos?
              </p>
              <br/> <br/> <br/>
              <h4 className='heading'> Increase our signup conversion rate </h4>
              <p>
                Updates to our build would regularly be released weekly, and each week we'd compare our downloads rate to total registered users.
              </p>
              <h4 className='subheading'> Here are the KPIs we defined for this goal: </h4>
              <br/>
              <Bullets info={kpis}/> 
              {/* <p>
                I also wanted to point out that our download conversion rate was decent due to our marketing team, so we weren't too concerned with that conversion.
              </p> */}
            </div>

            <div className='section'>
              <SectionTitle title='Designing our solution' color={color}/>
              <h4 className='heading'> A user-centered design approach </h4>
              <p>
                To solve our problem of low signups, I emphasized that we needed to take on a user-centered design approach to inform our ideation and decisions. 
              </p>
              <p>
                At the end of the day, we wanted this to be a community for our users, so it was important for us to understand and empathize with our user's needs, goals, and pain points.
              </p>
              <br/> <br/> <br/>

              <h4 className='heading'> Our design process </h4>
              <p>
                I designed several potential routes that we took in finding an eventual solution.
              </p>
              <p>
                Here was our process for each route:
              </p>
              {/* <div className='imageGallery'>
                <Image src={picDesignProcess} style={imageLarger}/>
              </div> */}
              <ol>
                <li> Understand </li>
                <li> Ideate </li>
                <li> Prototype </li>
                <li> User Testing </li>
                <li> Presentation </li>
                <li> Implementation </li>
              </ol>
              <p>
                After the implementation of a route, we'd monitor our conversion rate for a 2-week period to decide if results matched our initial findings from testing. 
                If our results didn't line up, we'd iterate on our prototype and testing phases and push out an update.
              </p>
              <br/> <br/> <br/>

              <h3 className='number'> 01. </h3>
              <h4 className='heading'> A guest mode that lets users jump right into the app.  </h4>
              <p>
                On the sign up screen, new users are presented with the option to continue as a guest, instead of proceeding with the onboarding flow.
              </p>
              <br/>
              <div className='grid'>
                <div className='gridCell'>
                  <h4 className='subheading'> Ideation </h4>
                  <p>
                    Guests that wanted to perform actions or use features were prompted with a pop up to sign up.
                  </p>
                  <p>
                    Perhaps seeing who's on the platform would entice new users to go back and create their profiles.
                  </p>
                </div>
                <div className='gridCell'>
                  <h4 className='subheading'> Results </h4>
                  <p>
                    At the time, our small population of users meant that an individual could exhaust the list of potential matches/friends, and if they saw no one that interested them, they would quit.
                  </p>
                  <p className='bold'>
                    Decreased conversion rate.
                  </p>
                  <p>
                    Still did not solve the main user breakdown.
                  </p>
                </div>
              </div>
              <br/>
              <div className='imageGallery'>
                <Image src={pic4} style={imageMarginLessBottom}/>
                <Image src={pic5} style={imageMarginLessBottom}/>
                <Image src={pic6} style={imageMarginLessBottom}/>
              </div>
              <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
              
              <h3 className='number'> 02. </h3>
              <h4 className='heading'> Allow users to skip video recording during onboarding. </h4>
              <p>
                These users would have certain actions restricted and limited to specific features. An attempt to interact with those features will prompt them to record their video.
              </p>
              <br/>
              <div className='grid'>
                <div className='gridCell'>
                  <h4 className='subheading'> Ideation </h4>
                  <p>
                    Changed back to enforcing the majority of the onboarding flow, but allowed users to skip the video step.
                  </p>
                  <p>
                    Allowed users to finish signing up and jump into the app to check out the community, and also record their video at a more convenient time.
                  </p>
                </div>
                <div className='gridCell'>
                  <h4 className='subheading'> Result </h4>
                  <p>
                    Saw more users complete the onboarding, however most of them skipping the video step. This was acceptable.
                  </p>
                  <p className='bold'>
                    Increased our conversion rate by 25%
                  </p>
                </div>
              </div>
              <br/>
              <div className='imageGallery'>
                <Image src={pic7} style={imageMarginLessBottom}/>
                <Image src={pic8} style={imageMarginLessBottom}/>
                <Image src={pic9} style={imageMarginLessBottom}/>
              </div>
              <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
              
              <h3 className='number'> 03. </h3>
              <h4 className='heading'> Give users the option to upload their own pre-recorded video. </h4>
              <p>
                As opposed to requiring users to record their video responses on the spot, I designed an option for uploading a video from their album/gallery.
              </p>
              <br/>
              <div className='grid'>
                <div className='gridCell'>
                  <h4 className='subheading'> Ideation </h4>
                  <p>
                    Users can pre-record their responses when they are feeling ready or at their best, and upload whenever they continue the onboarding process.
                  </p>
                  <p>
                    We ran 3 moderated usability tests, and had participants walk us through their onboarding process, and all 3 of them chose the upload path. 
                  </p>
                </div>
                <div className='gridCell'>
                  <h4 className='subheading'> Result </h4>
                  <p>
                    Most users opted to upload a pre-recorded video.
                  </p>
                  <p className='bold'>
                    Increased our conversion rate by another 40%.
                  </p>
                </div>
              </div>
              <br/>
              <div className='imageGallery'>
                <Image src={pic10} style={imageMarginLessBottom}/>
                <Image src={pic11} style={imageMarginLessBottom}/>
              </div>
              <div className='imageGallery'>
                <Image src={pic12} style={imageMarginLessBottom}/>
                <Image src={pic13} style={imageMarginLessBottom}/>
              </div>
            </div>


            <div className='section'>
              <SectionTitle title='Overall Results' color={color}/>
              <h4 className='heading'> Our conversion rate increased from 20% to 65% following these solutions. </h4>
              <br/>
              <p>
                We kept implementation 2 and 3 in the live build, and considered this the solution to our initial problem of a low conversion rate. 
              </p>
              <p>
                A stable growth figure allowed us to move onto designing features that users highly requested, and more pressing issues such as monetization.
              </p>
            </div>

              {/* <Bullets info={descr}/> 
              <br/> */}

              {/* <h4 className='heading'> Personas </h4>
              <p> Here are a couple of the personae our team had in mind while designing our screens: </p>
              <br/>
              <>
                {this.props.screenWidth > 768 ? 
                  <Image src={picPersona} style={imageMarginLessBottom}/>
                  :
                  <>
                    <Image src={pic5} style={imageMarginLessBottom}/>
                    <Image src={pic6} style={imageMarginNoTop}/>    
                  </>
                }
              </> */}   

            {/* <div className='section'>
              <SectionTitle title='Components' color={color}/> 
              <h4 className='heading'> Nav Bar & Headers </h4>
              <p>
                Prior to my onboarding, the nav bars and headers on our screens weren't components, which I thought was a major oversight. 
                Moreso, our headers were inconsistent throughout the app e.g. different heights, fonts, and element placements.
              </p>
              <p>  
                Figma unveiled their 'Variants' feature not too long ago, so I took the opportunity to use those to standardize the various different nav bars and headers we
                had across our app and turned them into component variants. This will save us valuable time in the future if we decide to update our nav bars or headers.
              </p>
              <br/>
              <Image src={pic4} style={this.props.screenWidth > 768 ? smallerImage : imageMarginNoTop}/>

              <h4 className='heading'> Buttons </h4>
              <p>
                Similarly, I turned our buttons throughout the app screens into components for easier changes down the line.
              </p>
              <br/>
              <Image src={pic7} style={this.props.screenWidth > 768 ? smallerImage : imageMarginNoTop}/>
            </div>

            <div className='section'>
              <SectionTitle title='Updated Screens' color={color}/> 
              <p>
                Here are just a few of the screens that I've updated so far:
              </p>

              {this.props.screenWidth > 768 ? 
              <>
                <h4 className='heading' style={{alignSelf: 'center'}}> OLD </h4>
                <Image src={pic8} style={imageMarginLessBottom}/>
                <h4 className='heading' style={{alignSelf: 'center'}}> UPDATED </h4>
                <Image src={pic9} style={imageMarginNoTop}/>
              </>
              :
              <>
                <h4 className='heading' style={{alignSelf: 'center'}}> OLD vs. UPDATED </h4>
                <Image src={pic11} style={imageMarginLessBottom}/>
              </>
              }
            </div>
          
            */}

            <div className='section'>
              <SectionTitle title='Other designs I worked on' color={color}/> 
              <h4 className='heading'> Camera update </h4>
              <p>
                Users requested that we change the white in our camera page to black to be consistent with their other camera experiences.
              </p>
              <div className='imageGallery'>
                <Image src={pic14} style={imageMarginLessBottom}/>
                <Image src={pic15} style={imageMarginLessBottom}/>
                <Image src={pic16} style={imageMarginLessBottom}/>
              </div>
              <br/> <br/> <br/>

              <h4 className='heading'> Highlights </h4>
              <p>
                I'm not able to unveil details of this feature, but here's a sneak peak at its first iteration.
              </p>
              <div className='imageGallery'>
                <Image src={pic17} style={imageMarginLessBottom}/>
                <Image src={pic18} style={imageMarginLessBottom}/>
                <Image src={pic19} style={imageMarginLessBottom}/>
              </div>
              <br/> <br/> <br/>
              
              <h4 className='heading'> Monetization </h4>
              <p>
                Similarly, here are the first iteration of our monetization screens.
              </p>
              <div className='imageGallery'>
                <Image src={pic20} style={imageMarginLessBottom}/>
                <Image src={pic21} style={imageMarginLessBottom}/>
                <Image src={pic22} style={imageMarginLessBottom}/>
                <Image src={pic23} style={imageMarginLessBottom}/>
                <Image src={pic24} style={imageMarginLessBottom}/>
                <Image src={pic25} style={imageMarginLessBottom}/>
              </div>
              <br/> <br/> <br/>
            </div>

            <div className='section'>
              <SectionTitle title='Final Thoughts' color={color}/> 
              <p>
                I'm grateful to have had the opportunity to work together with Hanmin, the founder, so closely and understand his mindset behind the company and the product. 
                It's amazing to have my ideas heard and so well implemented in the app and that feeling of seeing my designs come to life can't be beat. 
              </p>
              <p>
                Successfully achieving our goal of increasing the growth of our app, through research, iterative processes, and design empowers my passion for UX Design and I can't wait to see what future projects hold.
              </p>
              <br/> <br/> <br/>

              <h4 className='heading'> Still interested? </h4>
              <p>
                Check out my resume entry for Alike or contact me to hear more about my other designs, accomplishments, and impact at Alike!
              </p>   
              {/* <p>
                Or check out my other work! I highly recommend 
              </p> */}
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

export default Alike;
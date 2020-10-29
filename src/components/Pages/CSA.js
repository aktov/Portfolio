import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import Header from '../Header.js';
import Footer from '../Footer.js';
import NavMenu from '../NavMenu.js';
import Contact from '../Contact.js';
import Phrase from '../Phrase.js';
import SectionTitle from '../SectionTitle.js';

import banner from '../../images/banner_csa.png';
import pic1 from '../../images/yahoo/1.png';
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

const issues = [
  'The site lacked a standard menu navigation that was clear and intuitive to process',
  'The site had inconsistent headers that varied through different pages of the site, which increased the time it took for users to navigate'
]

class CSA extends React.Component {
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

            <h3 className='title'> {'CSA Website Design'.toUpperCase()} </h3>

            <div className='intro'>
              <div className='col'> 
                <h4 className='heading'> ROLE </h4>
                <h4> UI/UX Designer </h4>
                <br/>
                <h4 className='heading'> TEAM </h4>
                <h4> Alex Tov, Hao Yang He, Elaine Nguyen, Elizabeth Turrubiartes-Campos </h4>
              </div>
              <div className='col'>
                <h4 className='heading'> SUMMARY </h4>
                <h4> My team and I redesigned the navigation of Yahoo's mobile site by making it more consistent and accessible. </h4>
              </div>
            </div>

            <div className='section'>
              <SectionTitle title='intro'/> 
              <h4 className='heading'> MOTIVATION </h4>
              <p> Our task for this project was to identify a mobile site that we found lacking, and create a new design for it that would solve those issues. </p>
              <p> Back in high school, I remember going on Yahoo.com and doing everything on it, from using its email, to reading its variety of news articles, to even using its search browser. But as time went on, I quickly abandoned it for Google and its suite. My teammates all felt the same and so we agreed on Yahoo.</p>
              <br/>
              <h4 className='heading'> GOALS </h4>
              <p> These were the goals I personally had in mind while undergoing this project: </p>
              <Bullets info={goals}/>  
            </div>          
                      
            <div className='section'>
              <SectionTitle title='users & research'/> 
              <h4 className='heading'> INITIAL USER TESTING </h4>
              <p> 
                To redesign something, we first need to get an idea of what users want, and so 
                this is where user testing is essential.  After we created interview questions and tasks for our users to 
                answer and perform, we met with four users and conducted the testing. Our goal was to observe how they 
                interacted with the site while attempted to complete a task. How well did they know the site? 
                Where were their struggles, if any? What could be made better to make this task easier and quicker to complete? 
                Answers to these questions would allow us to gauge potential usability issues with Yahoo’s site. 
              </p>
              <p>
                After testing, we found that the users we tested all shared the same experience with using Yahoo; 
                they had used it quite often before, but slowly moved away from it for other sites.
              </p>
              <br/>
              <h4 className='heading'> USABILITY ISSUES </h4>
              <p> 
                For each user we tested, we recorded their top three issues they had with completing their task. 
                After looking through all 12 issues, we came to conclude that the issues boiled down to these two main ones:
              </p>
              <Bullets info={issues}/>  
              <p>
                We further concluded that these issues were exacerbated by the site’s unintuitive organization and 
                layout of important information, such as links to other pages or section titles. In other words, their 
                information architecture was not well laid out.
              </p>
              <p>
                Currently it is unclear how to navigate through pages without using the search bar. 
                Navigational elements to pages for sports, weather, and finance are initially hidden and are all found 
                in an unexpected location. Additionally, once on those pages, the navigation and menu layout are all different 
                from each other as well as the home page’s, which only creates more issues.
              </p>
              <Image src={pic1} />
              <Image src={pic2} />
              <Image src={pic3} />
              <h4 className='heading'> COMPETITIVE ANALYSIS </h4>
              <p>
                To help with our redesign, we analyzed the mobile layouts of three other frequently-visited sites, MSN, 
                New York Times, and Bing. Without even spending an extensive amount of time on these sites, we realized 
                that the issues Yahoo’s mobile site suffered from were nonexistent on these. 
              </p>
              <p>
                Pages within the websites had consistent headers and recognizable icons. All three sites also had better 
                information architecture that was easy to follow.
              </p>
              <Image src={pic4} />
              <Image src={pic5} />
              <Image src={pic6} />
            </div>      

            <div className='section'>
              <SectionTitle title='redesign'/> 
              <h4 className='heading'> SKETCHES & WIREFRAMES </h4>
              <Image src={pic7} />
              <h4 className='heading'> PROTOTYPES </h4>
              <p> 
                After sketching, we chose the two sketches (the checked-marked ones above) that were the most
                feasible and proceeded onto high-fidelity prototypes of them.
              </p>
              <br/>
              <h4 className='subheading'> REDESIGN 1 </h4>
              <p> 
                This redesign focuses on the ease of accessibility straight from the landing page of the website.
              </p>
              <Image src={pic8} />
              <p>
                Side menus for primary site navigation and for user profile features can be accessed consistently 
                throughout the site.
              </p>
              <Image src={pic9} />
              <Image src={pic10} />
              <Image src={pic11} />
              <h4 className='subheading'> REDESIGN 2 </h4>
              <p> 
                This redesign focuses on better navigation transparency and improving the search bar.
              </p>
              <Image src={pic12} />
              <p>
                A fixed menu icon on all pages allows the user to easily navigate throughout the site, while a fixed profile
                icon allows easy access to email and notifications.
              </p>
              <Image src={pic13} />
              <Image src={pic14} />
              <Image src={pic15} />
            </div>     

            <div className='section'>
              <SectionTitle title='evaluation'/> 
              <h4 className='heading'> USER TESTING SECOND ROUND </h4>
              <p>
                For our second rounding of user testing, we decided to directly compare our two prototypes and have each of 
                the users not only interact with both of them, but also vote on the preferred one. They however, will not be 
                simply choosing one over the other; we created a list of five questions that directly compared features of 
                both, and had each user vote on a prototype per question. After testing all users, we totalled up the 
                votes for each prototype and the one with the most votes was the redesign we decided to go with.
              </p>
              <p>
                We conducted this round of user testing similarly to how we conducted the first round. For each user, we 
                randomized the order in which we presented the prototypes to minimize biases that could result. After the 
                testing, we showed them the original site and asked for their honest opinion on which they liked better, the 
                redesigns or the original.
              </p>
              <Image src={pic16} />

              <h4 className='heading'> RESULTS </h4>
              <p>
                Tallying up the points from the five questions for all four users, both designs actually had the same 
                amount of points. We decided to not proceed with a tiebreaker and focused on the bigger point:  
                All users said that they much preferred the redesigns over the original site.
              </p>
              <br/>
              <h4 className='heading'> ANALYSIS </h4>
              <p>
                As with every redesign, there are always trade offs with the old design. For instance, avid users of the 
                old site with a mental map of where everything on the site is, might question the lay out of the redesigns 
                since it is not like the older design. For the most part, we tried to keep everything pretty similar to how 
                the old site was like. Our redesigns were fashioned in their styling and fonts, and we added more features 
                than we removed. The biggest differences that our redesigns have with the old design are the separation of 
                the profile and menu icons, and fixing the same navigation menu to every page; these are the only differences 
                we expect to cause some disturbances to older, avid users of the site.
              </p>
            </div>

            <div className='section'>
              <SectionTitle title='lessons learned'/> 
              <p>
                Despite some unpredicted weaknesses that we encountered, we think that the overall benefits from our 
                redesigns outweigh the weaknesses we had and still would want to push forward our redesigns. We believe 
                our rationales for the redesign still hold, especially with the features that the users enjoyed. For features 
                that had some issues such as redesign 2’s filter system, we believe that through iteration, those can be 
                improved to meet the functioning standards that we initially wanted. 
              </p>
              <p>
                From this project,  we learned that coming up with a redesign is a doable task, but coming up with multiple 
                redesigns is a bit harder. It was also helpful and educational to critique, compare, and contrast our chosen 
                website with the site of competitors to see how each worked (or did not work) for its own design space and 
                intended audiences.
              </p>
              <p>
                User testing and feedback is crucial for any redesign, and that we should always focus on what the user wants, 
                not what we think the user wants.
              </p>
              <p>
                Thanks for taking your time to read this, and I hope it was enjoyable!
                If you want to hear more about this, feel free to contact me!
              </p>
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

export default CSA;
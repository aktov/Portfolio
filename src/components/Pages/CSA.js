import React from 'react';
import LazyLoad from 'react-lazyload';

import Header from '../Header.js';
import Footer from '../Footer.js';
import NavMenu from '../NavMenu.js';
import Contact from '../Contact.js';
import Phrase from '../Phrase.js';
import SectionTitle from '../SectionTitle.js';
import TopButton from '../TopButton.js';

import banner from '../../images/Banners/banner_csa.png';
import banner_mob from '../../images/Thumbnails/Mobile/cardImageM_csa.png';
import figmaD from '../../images/figmaD.svg';
import figmaM from '../../images/figmaM.svg';
import pic1 from '../../images/Pages/csa/1.png';
import pic2 from '../../images/Pages/csa/2.png';
import pic3 from '../../images/Pages/csa/3.png';
import pic4 from '../../images/Pages/csa/4.png';
import pic5 from '../../images/Pages/csa/5.png';
import pic6 from '../../images/Pages/csa/6.png';
// import pic7 from '../../images/Pages/csa/7.png';
import pic8 from '../../images/Pages/csa/8.png';
import pic9 from '../../images/Pages/csa/9.png';
// import pic10 from '../../images/Pages/csa/10.png';
// import pic11 from '../../images/Pages/csa/11.png';
// import pic12 from '../../images/Pages/csa/12.png';
// import pic13 from '../../images/Pages/csa/13.png';
// import pic14 from '../../images/Pages/csa/14.png';
// import pic15 from '../../images/Pages/csa/15.png';
import pic16 from '../../images/Pages/csa/16.png';
import pic17 from '../../images/Pages/csa/17.png';
import pic18 from '../../images/Pages/csa/18.png';
import pic19 from '../../images/Pages/csa/19.png';
import pic20 from '../../images/Pages/csa/20.png';
// import pic21 from '../../images/Pages/csa/21.png';
// import pic22 from '../../images/Pages/csa/22.png';
// import pic23 from '../../images/Pages/csa/23.png';
// import pic24 from '../../images/Pages/csa/24.png';
// import pic25 from '../../images/Pages/csa/25.png';
// import pic26 from '../../images/Pages/csa/26.png';
// import pic27 from '../../images/Pages/csa/27.png';
// import pic28 from '../../images/Pages/csa/28.png';
// import pic29 from '../../images/Pages/csa/29.png';
// import pic30 from '../../images/Pages/csa/30.png';
import pic31 from '../../images/Pages/csa/31.png';
import pic32 from '../../images/Pages/csa/32.png';
import pic33 from '../../images/Pages/csa/33.png';
import pic34 from '../../images/Pages/csa/34.png';
import pic35 from '../../images/Pages/csa/35.png';
import pic36 from '../../images/Pages/csa/36.png';
import pic37 from '../../images/Pages/csa/37.png';
import pic38 from '../../images/Pages/csa/38.png';
import pic39 from '../../images/Pages/csa/39.png';
import pic40 from '../../images/Pages/csa/40.png';
import pic41 from '../../images/Pages/csa/41.png';
// import pic42 from '../../images/Pages/csa/42.png';
// import pic43 from '../../images/Pages/csa/43.png';
import pic44 from '../../images/Pages/csa/44.png';
import pic45 from '../../images/Pages/csa/45.png';
import pic46 from '../../images/Pages/csa/46.png';
import pic47 from '../../images/Pages/csa/47.png';
// import pic48 from '../../images/Pages/csa/48.png';
// import pic49 from '../../images/Pages/csa/49.png';
// import pic50 from '../../images/Pages/csa/50.png';
// import pic51 from '../../images/Pages/csa/51.png';
// import pic52 from '../../images/Pages/csa/52.png';
// import pic53 from '../../images/Pages/csa/53.png';
// import pic54 from '../../images/Pages/csa/54.png';
// import pic55 from '../../images/Pages/csa/55.png';
import pic56 from '../../images/Pages/csa/56.png';
import pic57 from '../../images/Pages/csa/57.png';

const Bullets = (props) => {
  return (
  <div className='phrases'>
    {props.info.map((phrase, index) => 
      <Phrase key={'csa/' + index} text={phrase}/>
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

const tags = ['wireframing', 'prototyping', 'user testing'];

const goals = [
  'Learn how to build a strong, communicative relationship with our client, as well as how to be flexible during times where they are unresponsive',
  'Learn the importance of understanding the client’s background, needs, and motivation prior to designing, as well as understanding those of their intended users through user research',
  'Learn how to promote our client’s brand effectively',
  'Practice information design techniques such as micro copying',
  'Learn and attempt best practices for the info architecture and navigation of a website'
];

// const categories = [
//   'History & Background',
//   'Users',
//   'Content',
//   'Aesthetics',
//   'Competition'
// ];

const priorities = [
  'Professional and visually pleasing website',
  'Clean and unique presentation, emphasizing images',
  'Easy and intuitive navigation/information architecture',
  'Users visiting the site should hope to leave with new-found knowledge on Cambodia’s history and culture and info about Cambodian Americans here in America',
  'Presenting a friendly and inviting image as a student org',
  'Promote a brand that emphasizes inclusiveness and culture',
  'Have a website theme with similar colors to the Cambodian flag (Red, White, Blue)',
  'Website will help bring in more members',
];

const needs = [
  'Find out about key information from the home page',
  'Easily access Cambodian culture and history',
  'Find a direct way to contact current members',
  'Gather enough information from the page to ultimately join the club'
];

const elements = [
  'Branding',
  'Functionality',
  'Content',
  'Site Architecture',
  'Navigation',
  'Design'
];

const pages = [
  'A HOME page that at a glance displays what the org is all about',
  'An ABOUT page which provides users will background info or history about the org',
  'A MEMBERS page where users can see who’s involved in the org',
  'An EVENT page or calendar where users can see upcoming events and details',
  'Some form of CONTACT info, whether it be social media links or a dedicated page for typing inquiries'
];

const imageMarginNoTop = {marginTop: '0rem'};
const imageMarginLessBottom = {marginTop: '0rem', marginBottom: '2rem'};
const smallerImage = {marginTop: '0rem', width: '100%'}
const smallerImageLess = {marginTop: '0rem', marginBottom: '2rem', width: '100%'}
const color = '#DA8484';

// Returns style based on breakpoints, of which there are 2
const decideMarginWidth = function(value) {
  if (value > 1280) {
    return {marginTop:'3rem'}
  } else if (value > 768) {
    return {width: '70%', marginTop:'3rem'}
  }
  return {width: '75%', marginTop:'3rem'}
} 



class CSA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      showTopButton: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
  }
  
  componentDidMount() {
    window.scrollTo(0, 0)
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
            <Tags names={tags} color={color}/>
            <h3 className='title'> {'CSA Website Design'.toUpperCase()} </h3>

            <div className='intro'>
              <div className='col' style={this.props.screenWidth > 768 ? null : {width: '100%'} }> 
                <h4 className='heading'> Role </h4>
                <p> UI/UX Designer </p>
                <br/>
                <h4 className='heading'> Figma Links </h4>
                <div className='buttons'>
                  <a 
                    href='https://www.figma.com/proto/HK3nRrbz73hPQqSlTNTDmu/CSA-Website-Design?node-id=236%3A2&viewport=147%2C303%2C0.03458884358406067&scaling=scale-down-width'
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <img src={figmaD} alt='figmaD' draggable='false' /> 
                    <span className='toolTip'> Desktop prototype </span> 
                  </a> 
                  <a 
                    href='https://www.figma.com/proto/HK3nRrbz73hPQqSlTNTDmu/CSA-Website-Design?node-id=241%3A0&viewport=176%2C217%2C0.07083262503147125&scaling=scale-down'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={figmaM} alt='figmaM' draggable='false' /> 
                    <span className='toolTip'> Mobile prototype </span> 
                  </a> 
                </div>
                <br/>
              </div>
              <div className='col' style={this.props.screenWidth > 768 ? null : {width: '100%'} }>
                <h4 className='heading'> Summary </h4>
                <p> 
                  My team and I designed a brand new website for CSA, an organization at UCSD. We worked alongside them
                  and made sure that our design was right on track with what they envisioned.
                </p>
                <br/>
                <h4 className='heading'> Team </h4>
                <p> Alex Tov <br/> Hao Yang He <br/> Elaine Nguyen <br/> Elizabeth Turrubiartes-Campos </p>
                <br/>
              </div>
            </div>

            <div className='section'>
              <SectionTitle title='intro'/> 
              <h4 className='heading'> Motivation </h4>
              <p> 
                Our task was to find ourselves a client in need of a new website and design them a functional website prototype
                based on their users' needs and goals.
              </p>
              <br/>
              <h4 className='heading'> Goals </h4>
              <Bullets info={goals}/>  
            </div>          
                      
            <div className='section'>
              <SectionTitle title='client interviews'/> 
              <h4 className='heading'> Getting To Know Our Client </h4>
              <p> 
                Cambodian Student Association (CSA) was our client. 
              </p>
              <p>
                We met with Janica and Keith, two representatives of CSA, in order to get a better idea of 
                what the org is, who their users are, and what goals they wanted the site to meet.
              </p>
              {/* <Bullets info={categories}/>   */}
              <br/>
              {/* <h4 className='subheading'> HISTORY & BACKGROUND </h4>
              <p>
                Our client is a non-profit organization started in 2004 to provide a community for UCSD Cambodian students, 
                to build connections, and to educate others on Cambodia. Throughout the years, the Cambodian Student 
                Association has developed a culture that resembles a close knit family and strives to support one another. 
                CSA has also built ties with off-campus Khmer (Cambodian) communities in Southern California. 
              </p>
              <br/>
              <h4 className='subheading'> USERS </h4>
              <p>
                Our client has a very clear mission and audience in mind for their org. They want their site to serve as a 
                place for education and recruitment of potential members. Using the country as a common interest, they want 
                to reach out to the public and raise awareness of their presence in the country, as well as the world. 
                Keeping the culture and traditions of Cambodia as a centerpiece, they want to highlight their history, as 
                well as their involvement with other Cambodian organizations.
              </p>
              <br/>
              <h4 className='subheading'> CONTENT </h4>
              <p>
                As a student organization, CSA holds general body meetings which are often themed and feature icebreakers 
                and games, and also hosts socials and even language lessons occasionally. The org also has big events where 
                they receive sponsorships and make money by selling food through fundraising on campus and campus events. 
              </p>
              <p>
                When asked specifically what content they would like on the website, the client requested that about 25% 
                of the website should be on the history/background on Cambodia and the remaining 75% should be on content 
                regarding the org, such as: the mission statement, an introduction to CSA, a section for the weekly/biweekly 
                newsletter, announcements, upcoming events, and their google calendar. In particular, they wanted to highlight 
                the upcoming Annual Culture Show. For images, the client wanted the logo, group pictures, and pictures 
                of Cambodia featured on the website. 
              </p>
              <br/>
              <h4 className='subheading'> AESTHETICS </h4>
              <p>
                Our client, being a culture organization, wants to heavily emphasize Cambodian culture on their website. 
                However, they want to avoid anything too cluttered or text heavy; this is not supposed to be a Wikipedia 
                page on Cambodia. Rather, they want the site to be quite minimal, with more pictures than words. Of course, 
                words will be needed for the history and background portion of the site, but they would wish for the pictures
                to tell the story. As for the theme, they want a website that is minimal, creative, and colorful. 
                For branding, they want to promote themselves as fun and inclusive.
              </p>
              <br/>
              <h4 className='subheading'> COMPETITION </h4>
              <p>
                Our clients want to emphasize the fact that they are a Cambodian culture organization on campus, which to 
                our knowledge, is the only one on campus. They also want to highlight the underrepresentation of Cambodians 
                in the States, which can be simply observed when food is brought into the picture. “When was the last time 
                you saw a Cambodian restaurant?” is what Janica asked us. 
              </p>
              <br/> */}
              <h4 className='heading'> Priority List </h4>
              <p> 
                After breaking down the information Janica and Keith provided, we created a prioritized list of goals 
                to help us keep track of their expectations throughout this project timeline.
              </p>
              <Bullets info={priorities}/>  
            </div>

            <div className='section'>
              <SectionTitle title='users & need finding'/> 
              <h4 className='heading'> User Interviews </h4>
              <p>
                Our best approach at finding users to interview was to message Janica and Keith and ask them about potential 
                org members and affiliates. Does CSA have any sponsors? What about faculty advisors? Other affiliated 
                organizations? We also interviewed random students on campus, but because CSA was a particularly small org, 
                we weren’t surprised when a lot of them haven’t heard of CSA. 
              </p>
              <br/>

              <h4 className='heading'> Personas </h4>
              {/* <p>
                We were able to conduct and record data for at least nine interviews, which were a mix of students, alumnis 
                of the org, and faculty advisors for the org. From talking and interviewing them, we were able to gain a 
                sense of the different tasks and demands that each user wanted/performed. Conveniently, out of all the 
                interviews, we were able to extrapolate three main groups of users: students, university affiliates, and 
                alumni; these would become our personas.
              </p> */}
              <Image src={pic1} style={this.props.screenWidth > 768 ? smallerImage : imageMarginLessBottom}/>
              <Image src={pic2} style={this.props.screenWidth > 768 ? smallerImage : imageMarginLessBottom}/>
              <Image src={pic3} style={this.props.screenWidth > 768 ? smallerImage : imageMarginNoTop}/>

              <h4 className='heading'> Use Cases </h4>
              {/* <p>
                For each of the personas, we created a couple user scenarios for each, and various use cases for each of 
                those scenarios. We tried to cover as many possible user cases that came to mind. We asked ourselves, 
                “What would be my goal for coming onto this website?”. The scenarios and respective user cases that we 
                created are charted below.
              </p> */}
              <Image src={pic4} style={this.props.screenWidth > 768 ? smallerImageLess : imageMarginLessBottom}/>
              <Image src={pic5} style={this.props.screenWidth > 768 ? smallerImageLess : imageMarginLessBottom}/>
              <Image src={pic6} style={this.props.screenWidth > 768 ? smallerImage : imageMarginNoTop}/>

              {/* <h4 className='subheading'> USE CASES SUMMARY TABLE </h4>
              <p>
                To make things even easier, we took all the use cases across all scenarios and personas and then 
                placed them in a chart. This helped us better visualize the variety of needs that users want. It 
                was this chart that we constantly came back to, over and over, throughout the project, to make sure 
                that we were hitting all the needs - it definitely helped us stay on the right track.
              </p>
              <Image src={pic7} style={smallerImage} /> */}

              <h4 className='heading'> Features & Functionalities </h4>
              <p>
                {/* To further break down the information we gathered from our use cases, we materialized the use cases 
                into actual features, elements, and functions that can be added onto the website (the left-most 
                column). Then based on if the person/group of people had requested it, or would benefit from it, 
                we gave their respective box (along the same row) an X mark.
                This allowed us to detemine which user(s) a feature or function would most benefit from a quick glance. */}

                Here were the use cases broken down into a readable table.
              </p>
              <Image src={pic8} style={this.props.screenWidth > 768 ? smallerImage : imageMarginNoTop}/>

              <h4 className='heading'> Key User Needs </h4>
              <p>
                From the data we gathered and the tables we made, we were able to visualize and identify four main
                user needs across all three personas as follows:
              </p>
              <Bullets info={needs} />
            </div>

            <div className='section'>
              <SectionTitle title='competitive analysis'/> 
              <p>
                To further generate more ideas on our design for our client’s website, we decided to analyze the 
                websites of five competitor sites. Our competitors are the sites of other college organizations.
                These sites all had similar features and content, but how their methods of presentation 
                differed vastly from site to site. Our analyses allowed us to not only see what worked and what 
                didn’t work on their sites, but also gain new insight into how we can potentially go about our 
                designs. We critiqued each site on six elements:
              </p>
              <Bullets info={elements} />
              <br/>

              <h4 className='heading'> Competitor Sites </h4>
              <Image src={pic9} style={imageMarginNoTop} />

              {/* <h4 className='subheading'> BRANDING </h4>
              <p> What impression does the site give off? </p>
              <Image src={pic10} style={imageMarginLessBottom} />

              <h4 className='subheading'> FUNCTIONALITY </h4>
              <p> What does the website allow users to do? </p>
              <Image src={pic11} style={imageMarginLessBottom} />

              <h4 className='subheading'> CONTENT </h4>
              <p> What does the website show users? </p>
              <Image src={pic12} style={imageMarginLessBottom} />

              <h4 className='subheading'> SITE ARCHITECTURE </h4>
              <p> What does the website show users? </p>
              <Image src={pic13} style={imageMarginLessBottom} />

              <h4 className='subheading'> NAVIGATION </h4>
              <p> How will the user navigate the website? </p>
              <Image src={pic14} style={imageMarginLessBottom} />

              <h4 className='subheading'> DESIGN </h4>
              <p> What design elements do others do well? </p>
              <Image src={pic15} style={imageMarginNoTop} /> */}
            </div>

            <div className='section'>
              <SectionTitle title='mood boards'/> 
              {/* <p>
                This website will have a minimalist appearance that is at the same time attention-grabbing. Because 
                our client is a cultural organization that focuses on social aspects, we also want to portray a tone
                 that is friendly, inviting, and welcoming. This is especially important as one of our main target 
                 user groups includes new students interested in joining and we certainly do not want any part of the 
                 website to push them away. In portraying information, we want to stay simple yet informative which 
                 means we will avoid blocks of text. The color palette we will be working will be some combination 
                 of pastel colors against a white backdrop. Our typography choice will be a combination of Sans-serif 
                 fonts that is bold in appearance and easily readable.
              </p> */}
              <br/>
              <h4 className='heading'> Colors </h4>
              <Image src={pic16} style={imageMarginLessBottom} />
              <h4 className='heading'> Imagery </h4>
              <Image src={pic17} style={imageMarginLessBottom} />
              <h4 className='heading'> Website Layout </h4>
              <Image src={pic18} style={imageMarginNoTop} />
            </div>

            <div className='section'>
              <SectionTitle title='wireframing'/> 
              <h4 className='heading'> Site Architecture </h4>
              <p>
                From what we observed from our competitive analysis, we saw that other college org sites more or less 
                had these elements below. We thought it was for the best if we use a similar structure as well.
              </p>
              <Bullets info={pages} />
              <Image src={pic19} style={imageMarginNoTop} />

              <h4 className='heading'> Sketches </h4>
              <Image src={pic20} style={imageMarginNoTop} />

              <h4 className='heading'> Wireframes </h4>
              <p>
                Here are just a few screens of our wireframes!
              </p>
              <br/>
              <Image src={pic56}  style={imageMarginLessBottom} />
              <Image src={pic57}  style={imageMarginNoTop} />
              {/* <h4 className='subheading'> NAVIGATION </h4>
              <p>
                From our competitive analysis, we learned that good and consistent navigation is an absolute necessity. 
                This is because an effective navigation system is the anchor and skeleton of an entire website and for this 
                reason, we made its development our first priority.
              </p>
              <Image src={pic21}  style={imageMarginNoTop} />

              <h4 className='subheading'> HOME PAGE & FOOTER </h4>
              <p>
                The home page is the first page users will see and it will provide the user with an overall preview of
                CSA's mission and brand. To start off, users are greeted with a large banner of the organization showcasing 
                members and a mantra. Below this banner is a card which displays brief but important announcements or 
                updates from our client. Furthermore, users are then introduced to the organization via a short introduction 
                summary as well as sign up for a newsletter.
              </p>
              <Image src={pic22}  style={imageMarginNoTop} />

              <h4 className='subheading'> ABOUT </h4>
              <p>
                The about us page gives users more insight into the organization. Users can read a bit about 
                CSA's history and Cambodian culture here, but they are also given the option to head over to the
                dedicated history and culture page where they can read more. Logos and links of CSA's 
                affiliations are also shown here.
              </p>
              <Image src={pic23}  style={imageMarginNoTop} />

              <h4 className='subheading'> HISTORY & CULTURE </h4>
              <p>
                This page is all about information and background.Users can learn more about CSA's 
                mission statement, founding, and the history and culture of Cambodia.
              </p>
              <Image src={pic24}  style={imageMarginNoTop} />

              <h4 className='subheading'> MEMBERS </h4>
              <p>
                The members page is where users can find pictures, descriptions, and contact 
                information of board members and faculty advisors.
              </p>
              <Image src={pic25}  style={imageMarginNoTop} />

              <h4 className='subheading'> EVENTS </h4>
              <p>
                The events page allows the users to keep up with both upcoming and past events 
                hosted by CSA. It also has three sub pages, two of which are dedicated pages for
                upcoming and past events, and the third one being a page for photos.
              </p>
              <Image src={pic26}  style={imageMarginNoTop} />

              <h4 className='subheading'> UPCOMING EVENTS </h4>
              <p>
                This page allows users to check on upcoming events via a calendar and dedicated posts. 
                They can see the event details such as time and location.
              </p>
              <Image src={pic27}  style={imageMarginNoTop} />

              <h4 className='subheading'> PAST EVENTS </h4>
              <p>
                This page features an archive of previous events throughout the years. Users can scroll 
                to see past event details as well as pictures.
              </p>
              <Image src={pic28}  style={imageMarginNoTop} />

              <h4 className='subheading'> PHOTO GALLERY </h4>
              <p>
                Media and photos from events can be viewed here. Photos will be categorized by year and 
                event, and will feature modal pop ups.
              </p>
              <Image src={pic29}  style={imageMarginNoTop} />

              <h4 className='subheading'> CONTACT </h4>
              <p>
                This page allows users to directly contact CSA via a form that they can fill out. For users 
                interested in learning more about the organization, they can submit their email in a newsletter 
                sign up to get content delivered straight to their inbox.
              </p>
              <Image src={pic30}  style={imageMarginNoTop} /> */}

              {/* <h4 className='heading'> USER TESTING ROUND 1 </h4>
              <p>
                After we finished these wireframe screens, we gathered five users who were open to test
                the site. We gave each of them the same five tasks, all of which involved navigating the
                site to find various elements.
              </p>
              <p>
                Every user was able to efficiently and effectively finish their tasks, which meant that
                navigating the site was no problem, at least for students. We weren't able to say the same
                for the other two personas, since we weren't able to get users that fit into them. Regardless,
                it was still a great sign and we moved onto prototyping.
              </p> */}
            </div>

            <div className='section'>
              <SectionTitle title='prototyping'/>
              <h4 className='heading'> First Iteration </h4>
              <p>
                With content finally received from our client, we were able to add images, content, and color
                onto our first prototype.
              </p>
              <p>
                Check out the Figma files for&nbsp;
                <a 
                  href='https://www.figma.com/proto/VTvDvW5qe1iFnrzCF3W8X3/COGS-187B-Prototype-1?node-id=241%3A0&viewport=215%2C178%2C0.11381050199270248&scaling=scale-down'
                  target='_blank' 
                  rel='noopener noreferrer'
                >mobile</a>
                &nbsp;and&nbsp;
                <a 
                  href='https://www.figma.com/proto/VTvDvW5qe1iFnrzCF3W8X3/COGS-187B-Prototype-1?node-id=236%3A2&viewport=157%2C288%2C0.03742421790957451&scaling=scale-down-width'
                  target='_blank' 
                  rel='noopener noreferrer'
                >desktop</a>
                &nbsp;here.
              </p>
              <Image src={pic31}  style={imageMarginLessBottom} />
              <Image src={pic32}  style={imageMarginNoTop} />
              <Image src={pic33}  style={imageMarginLessBottom} />
              <Image src={pic34}  style={imageMarginLessBottom} />
              <Image src={pic35}  style={imageMarginLessBottom} />
              <Image src={pic36}  style={imageMarginLessBottom} />
              <Image src={pic37}  style={imageMarginNoTop} />

              <h4 className='heading'> Final Iteration </h4>
              <p>
                We weren't too satisfied with the first iteration, and CSA was able to provide us with more images,
                so for round two, we decided to go all out with the images. CSA is a student organization after all, 
                and they're trying to make themselves seem welcoming; let's have images speak for themselves. 
              </p>
              <br/>
              <h4 className='subheading'> Links </h4>
              <div className='buttons'>
                  <a 
                    href='https://www.figma.com/proto/HK3nRrbz73hPQqSlTNTDmu/CSA-Website-Design?node-id=236%3A2&viewport=147%2C303%2C0.03458884358406067&scaling=scale-down-width'
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <img src={figmaD} alt='figmaD' draggable='false' /> 
                    <span className='toolTip'> figma desktop </span> 
                  </a> 
                  <a 
                    href='https://www.figma.com/proto/HK3nRrbz73hPQqSlTNTDmu/CSA-Website-Design?node-id=241%3A0&viewport=176%2C217%2C0.07083262503147125&scaling=scale-down'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img src={figmaM} alt='figmaM' draggable='false' /> 
                    <span className='toolTip'> figma mobile </span> 
                  </a> 
                </div>
                <br/>
                <br/>



              <h4 className='subheading'> Home </h4>
              {/* <p>
                We gave the home page, and other pages as well, image carousel banners that line the tops and middles
                to give a more friendly, down-to-earth feel. The announcements card has been replaced with a toggleable
                pull out so that it's not too prominent to those who don't care for it so much.
              </p> */}
              <Image src={pic38}  style={imageMarginLessBottom} />
              <Image src={pic39}  style={imageMarginNoTop} />

              <h4 className='subheading'> About </h4>
              <Image src={pic40}  style={imageMarginLessBottom} />
              <Image src={pic41}  style={imageMarginNoTop} />

              {/* <h4 className='subheading'> HISTORY & CULTURE </h4>
              <Image src={pic42}  style={imageMarginLessBottom} />
              <Image src={pic43}  style={imageMarginNoTop} /> */}

              <h4 className='subheading'> Members </h4>
              <Image src={pic44}  style={imageMarginLessBottom} />
              <Image src={pic45}  style={imageMarginNoTop} />

              <h4 className='subheading'> Events </h4>
              <Image src={pic46}  style={imageMarginLessBottom} />
              <Image src={pic47}  style={imageMarginNoTop} />

              {/* <h4 className='subheading'> UPCOMING EVENTS </h4>
              <Image src={pic48}  style={imageMarginLessBottom} />
              <Image src={pic49}  style={imageMarginNoTop} /> */}

              {/* <h4 className='subheading'> PAST EVENTS </h4>
              <Image src={pic50}  style={imageMarginLessBottom} />
              <Image src={pic51}  style={imageMarginNoTop} /> */}

              {/* <h4 className='subheading'> PHOTO GALLERY </h4>
              <Image src={pic52}  style={imageMarginLessBottom} />
              <Image src={pic53}  style={imageMarginNoTop} />

              <h4 className='subheading'> CONTACT </h4>
              <Image src={pic54}  style={imageMarginLessBottom} />
              <Image src={pic55}  style={imageMarginNoTop} /> */}
            </div> 

            <div className='section'>
              <SectionTitle title='lessons learned'/> 
              <p>
                For our first time working with actual clients outside the classroom, this was an amazing learning
                experience. As excited as we were to jump right into designing, we realized how important communication
                with the client is, especially when we didn't have any content or images to work with. It's a team effort
                between the designers and the client to produce a website that truly reflects their brand and identity.
                More importantly, we also needed to prioritize their users; this website isn't just for CSA, its for potential
                people interesting in learning more about or even joining the organization. We wanted to design a site that
                would leave those users with a lasting impression.
              </p>
              <p>
                When it comes to a team working together on a project, there are bound to be some inconsistencies
                with stylings and conflicts when it comes to whose idea to use. This project taught me how to deal with
                sitations like these, and the importance of team communcation and management. Tasks had to be distributed, 
                meeting schedules needed to be arranged, ideas and information had to be shared; there's no time for lack
                of communication. 
              </p>
              <p>
                Thanks for taking your time to read this, and I hope it was enjoyable!
                If you want to hear more about this, feel free to contact me!
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

export default CSA;
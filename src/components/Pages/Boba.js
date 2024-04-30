import React from 'react';
import LazyLoad from 'react-lazyload';

import Header from '../Header.js';
import Footer from '../Footer.js';
import FooterSeeAlso from '../FooterSeeAlso.js';
import NavMenu from '../NavMenu.js';
import Phrase from '../Phrase.js';
import SectionTitle from '../SectionTitle.js';
import TopButton from '../TopButton.js';

import {getEntryProperty} from '../WorkEntries.js'; // This is a table imported from this file, make edits to case studies and designs there

import figma from '../../images/figmaLogo.svg';
import pic1 from '../../images/Pages/boba/1.png';
import pic2 from '../../images/Pages/boba/2.png';
import pic3 from '../../images/Pages/boba/3.png';
import pic4 from '../../images/Pages/boba/4.png';
import pic5 from '../../images/Pages/boba/5.png';
import pic6 from '../../images/Pages/boba/6.png';
import pic7 from '../../images/Pages/boba/7.png';
import pic8 from '../../images/Pages/boba/8.png';
import pic9 from '../../images/Pages/boba/9.png';
import pic10 from '../../images/Pages/boba/10.png';
import pic11 from '../../images/Pages/boba/11.png';
import pic12 from '../../images/Pages/boba/12.png';
import pic13 from '../../images/Pages/boba/13.png';

const key = getEntryProperty('designs', 'boba', 'key')
const tags = getEntryProperty('designs', 'boba', 'tags')
const color = getEntryProperty('designs', 'boba', 'color')
const color2 = getEntryProperty('designs', 'boba', 'color2')
const title = getEntryProperty('designs', 'boba', 'title')
const banner = getEntryProperty('designs', 'boba', 'banner')
const banner_mob = getEntryProperty('designs', 'boba', 'bannerM')
const link = getEntryProperty('designs', 'boba', 'figma')

const Bullets = (props) => {
  return (
  <div className='phrases'>
    {props.info.map((phrase, index) => 
      <Phrase key={'boba/' + index} text={phrase}/>
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

const features = [
  'Calendar for users to easily see which days they bought boba',
  'A list view, to show the same info but in a different way, possibly with more detail than what a calendar can show at a glance',
  'Spending summary, to give users an idea of how much they’ve spent in one number',
  'A way to record their boba purchases onto the app with ease',
  'Drink details, such as name of drink, location bought, toppings, size, etc. for fun tracking purposes',
]

const tasks = [
  'Switch to a calendar view',
  'Switch back to list view',
  'View the entry from February 14th, 2021',
  'Add a new entry',
  'Cancel adding entry',
  'Check spending habits'
]

const experience = [
  'How was your experience using it? Was it a struggle to perform certain tasks?',
  'What did you think about this page and its layout?',
  'What do you think this icon meant? Were any icons confusing?'
]

const design = [
  'Does it seem friendly and inviting?',
  'Are colors appropriate and nice to the eye?',
  'How is the font size? Are any words too small to read? Too big? Is it comfortable?'
]

const imageMarginNoTop = {marginTop: '0rem'};
const imageMarginLessBottom = {marginTop: '0rem', marginBottom: '2rem'};
const smallerImage = {marginTop: '0rem', width: '80%'}
const smallerImageLess = {marginTop: '0rem', marginBottom: '2rem', width: '80%'}

// Returns style based on breakpoints, of which there are 3
const decideMarginWidth = function(value) {
  if (value > 1280) {
    return {marginTop:'3rem'}
  } else if (value > 768) {
    return {width: '70%', marginTop:'3rem'}
  }
  return {width: '75%', marginTop:'3rem'}
} 


class Boba extends React.Component {
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
                {/* <h4 className='heading'> ROLE </h4>
                <h4> UI/UX Designer </h4>              
                <br/> */}
                <h4 className='heading'> Figma </h4>
                <div className='buttons'>
                  <a 
                    href={link}
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <img src={figma} alt='figma' draggable='false' /> 
                    <span className='toolTip'> Figma prototype </span> 
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
                  I designed an app meant to help users watch and keep track of their boba tea spending. I sent out surveys for user research, drafted wireframes
                  and mockups, and then designed a prototype upon which I conducted user testing.  
                </p> 
              </div>
            </div>

            <div className='section'>
              <SectionTitle title='Intro' color={color2}/> 
              <h4 className='heading'> Motivation </h4>
              <p> 
                  I was inspired to create this when I found out my friend bought one boba tea drink most days of the week, which definitely adds up over the month. 
                  I was in shock. Hopefully a real-life version of this app may help her in this regard!
              </p>
            </div>          
                      
            <div className='section'>
              <SectionTitle title='User Research & Data' color={color2}/> 
              <h4 className='heading'> Survey data </h4>
              <p> 
                Here are snippets of some of the questions and respective answers from the initial survey I sent out:
              </p>
              
              {this.props.screenWidth > 768 ? 
                <>
                  <Image src={pic5} style={imageMarginNoTop}/>
                </>
                :
                <>
                  <Image src={pic3} style={imageMarginLessBottom}/>
                  <Image src={pic4} style={imageMarginNoTop}/>
                </>
              }

              <h4 className='heading'> Breaking it down </h4>
              <p>
                Most users do like to get boba and get it often, and half of them do feel as though they spend a lot on boba tea.
              </p>
              <p>
                Because of this, I felt like a platform for users to easily track their boba tea spending habits might be wanted. 
                I wanted users to be able to view a calendar and easily see which days they bought boba to increase consciousness of their boba tea spending.
              </p>
              <p>
                Users should be able to input their boba purchase into the app, like the name of the drink, the price, and the location. <br/>
                Perhaps more subtleties like size, calories, ice/sweetness level too, if they want to record that.
              </p>
              <p>
                Another important feature would be way to check stats, like a summary of the users' spending over a specific timeframe.
              </p>
              <br/>

              <h4 className='heading'> Features & Functionalities </h4>
              <p> 
                After analyzing the data, I compiled a list of features and functionalities that users would seem to benefit from.
              </p>
              <Bullets info={features}/>
              <br/>

              <h4 className='heading'> Personas </h4>
              <Image src={pic1} style={this.props.screenWidth > 768 ? smallerImageLess : imageMarginLessBottom}/>
              <Image src={pic2} style={this.props.screenWidth > 768 ? smallerImage : imageMarginNoTop}/>
            </div>      

            <div className='section'>
              <SectionTitle title='Wireframes' color={color2}/> 
              {this.props.screenWidth > 768 ? 
                <>
                  <Image src={pic10} style={smallerImageLess}/>
                  <Image src={pic11} style={smallerImageLess}/>
                  <Image src={pic12} style={smallerImage}/>
                </>
                :
                <>
                  <Image src={pic13} style={imageMarginNoTop}/>
                </>
              }
            </div>  

            <div className='section'>
              <SectionTitle title='Mockups' color={color2}/> 
              {this.props.screenWidth > 768 ? 
                <>
                  <Image src={pic6} style={smallerImageLess}/>
                  <Image src={pic7} style={smallerImageLess}/>
                  <Image src={pic8} style={smallerImage}/>
                </>
                :
                <>
                  <Image src={pic9} style={imageMarginNoTop}/>
                </>
              }
            </div>

            <div className='section'>
              <SectionTitle title='Usability Testing & Results' color={color2}/> 
              <h4 className='heading'> User Tasks </h4>
              <p>
                Here are the tasks I had in mind for users to accomplish:
              </p>
              <Bullets info={tasks}/>
              <br/>

              <h4 className='heading'> Post-testing feedback questions </h4>
              <p><b>UX Questions</b></p>
              <Bullets info={experience}/>
              <br/>

              <p><b>UI Questions</b></p>
              <Bullets info={design}/>
              <br/>

              <h4 className='heading'> Takeaways </h4>
              <p>
                From this round of user testing, I wanted to takeaway these 4 things. Here's a summary of what I discovered.
              </p>
              <p style={{marginBottom: 0}}>
                <b>Transparency</b><br/>
              </p>
              <p>
                I wanted to make sure users knew what my icons meant or what each button did. <br/>
                Furthermore, are navigational elements placed in consistent spots? Are they expecting a certain element to go in a certain spot?
              </p>
              <p>
                For the most part, users stated that the designs were very intuitive. They found buttons easily understandable and were correct on their assumptions for what
                their taps would do.
              </p>

              <p style={{marginBottom: 0}}>
                <b>Convenience</b><br/>
              </p>
              <p>
                Can certain tasks be done with ease? Can it be done with one hand to encourage on-the-go and quick data entry? <br/>
                I want this app to be as frictionless as possible, when I followed up with users on the survey as to why they didn't keep track of their finances more,
                some stated that it was because they got lazy or it was too much of a hassle to log their expenses, especially on spreadsheets.
              </p>
              <p>
                Users stated that they would be inclined to use this app; the user flow to adding an entry seemed very quick, easy, and straightforward.
              </p>

              <p style={{marginBottom: 0}}>
                <b>Navigation</b><br/>
              </p>
              <p>
                Do users struggle with navigating the app? This ties strongly with convenience I believe, I want user flows to be as effortless as possible.
              </p>
              <p>
                Users had no trouble navigating the app once they tapped on each nav bar icon and found out what each page represented or what they could do on it.
                Most users were able to get down the task of adding a new entry within a minute or less!
              </p>

              <p style={{marginBottom: 0}}>
                <b>User Goals</b><br/>
              </p>
              <p>
                This one is more of a personal one: Does this app satisfy all the user goals and features/functionalities I had in mind at the start?
              </p>
              <p>
                From this round of user testing, I'd say so!
              </p>
            </div>

            <div className='section'>
              <SectionTitle title='Final Thoughts' color={color2}/> 
              <p>
                This was an extremely fun personal project I took on earlier this year! It was great interacting with people who filled out my survey and learning more about
                their boba spending habits. There were definitely some interesting finds I had too! For example most people were willing to spend over $7 on one cup of boba tea.
                I was shocked to discover that!
              </p>
              <p>
                Anyway, aside from the users I got to talk with and test, it was also a great learning experience for my career, UI and UX design wise. I learned some new tips and tricks
                on Figma too that I'll definitely remember and use for my upcoming designs and ultimately I feel like I'm a better designer after the things I've accomplished so
                far with this project.
              </p>
              <p>
                This project is on pause in the meantime as I work on other projects and my internships, but I do wish to come back to this and design a fully functional prototype and 
                test that one some more before hopefully finding some software dev teammates to bring this app to life and make it available to all who want a different platform to track 
                their boba tea consumption!
              </p>
            </div>

          </div>
        </div>
      </div>

      <TopButton color={color} />
      <FooterSeeAlso page={key} width={decideMarginWidth(this.props.screenWidth)} />
      <Footer screenWidth={this.props.screenWidth} />
      </>
    );
  }
}

export default Boba;
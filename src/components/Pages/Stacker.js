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

import figma from '../../images/figmaLogo.svg';
import open from '../../images/open.svg';

import gif1 from '../../images/Pages/stacker/01.gif';
import gif2 from '../../images/Pages/stacker/02.gif';
import gif3 from '../../images/Pages/stacker/03.gif';
import gif4 from '../../images/Pages/stacker/04.gif';
import pic5 from '../../images/Pages/stacker/05.PNG';
import gif6 from '../../images/Pages/stacker/06.gif';
import gif7 from '../../images/Pages/stacker/07.gif';
import gif8 from '../../images/Pages/stacker/08.gif';
import pic9 from '../../images/Pages/stacker/09.png';
import pic10 from '../../images/Pages/stacker/10.png';
import pic11 from '../../images/Pages/stacker/11.png';


const key = getEntryProperty('designs', 'stacker', 'key')
const tags = getEntryProperty('designs', 'stacker', 'tags')
// const color = getEntryProperty('designs', 'stacker', 'color')
const color2 = getEntryProperty('designs', 'stacker', 'color2')
const title = getEntryProperty('designs', 'stacker', 'title')
const banner = getEntryProperty('designs', 'stacker', 'banner')
const banner_mob = getEntryProperty('designs', 'stacker', 'bannerM')
const link = getEntryProperty('designs', 'stacker', 'figma')
const link2 = 'https://www.figma.com/file/Sobk5FvyGSjzB6KM7Rfrm7/Stacker?type=design&node-id=0%3A1&mode=design&t=xNMLVCBr044ioKDu-1'

const Bullets = (props) => {
  return (
  <div className='phrases'>
    {props.info.map((phrase, index) => 
      <Phrase key={'yahoo/' + index} text={phrase}/>
    )}
  </div>
  );
};

const concepts = [
  'The user will switch between two identical screens, a screen A and then a screen B, but since they\'re identical, the user won\'t notice. This switching will loop infinitely until an exit condition is reached, either a game victory or a game over (demo 1).',
  'Each switch allows the game to update the block position variable, which in turn updates the blocks position, moving the block across the screen (demo 2).',
];


// const imageMarginNoTop = {marginTop: '0rem'};
const imageMarginLessBottom = {marginTop: '0rem', marginBottom: '2rem'};
const imageCaptioned = {marginTop: '0.5rem', marginBottom: '1rem', marginRight: 'auto', marginLeft: '0rem'};




class Stacker extends React.Component {
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
                {/* <h4 className='heading'> ROLE </h4>
                <p> UI/UX Designer </p>              
                <br/> */}
                <h4 className='heading'> Links </h4>
                <div className='buttons'>
                  <a 
                    href={link}
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <img src={figma} alt='figma' draggable='false' /> 
                    <span className='toolTip'> Figma prototype </span> 
                  </a> 
                  <a 
                    href='https://www.linkedin.com/feed/update/urn:li:activity:7082475571913363456/'
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <img src={open} alt='link' draggable='false' /> 
                    <span className='toolTip'> My Linkedin post </span> 
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
                {/* <h4 className='heading'> Summary </h4>
                <p> 
                  With the release of variables in Figma, I realized that it's games are entirely possible to make now.
                </p> 
                <p>
                  I embarked on a challenge to learn variables while designing something more fun.
                </p> */}
              </div>
            </div>

            {this.props.screenWidth > 1280 ? <ContentsTable color={color2}/> : null} 

            <div className='section'>
              <SectionTitle title='Intro' color={color2}/> 
              <h4 className='heading'> A minigame built entirely on Figma </h4>
              <p> 
                Shortly after Config 2023, with the release of variables in Figma, I challenged myself to learn how to use them by attempting to create a game! 
              </p>
              <p>
                Not going to lie, when I heard about this feature during the keynote at Config, I zoned out for a bit ideating new possibilities for prototyping.
              </p>
              <br/>
              
              <div className='imageGallery' style={{marginBottom:'-2rem'}}>
                <Image src={pic9} style={imageMarginLessBottom}/>
                <Image src={pic10} style={imageMarginLessBottom}/>
                <Image src={pic11} style={imageMarginLessBottom}/>
              </div>
              <p className='caption'>
                A few of the screens from Stacker, from left to right: Home page, Playing the game, Stats page
              </p>
              <br/> <br/> <br/>
              <Image src={gif1} style={imageCaptioned}/>
              <p className='caption'>
                This gif is a bit laggy, I'd recommend trying out the game for yourself to get a better experience!
              </p>
            </div>

            <div className='section'>
              <SectionTitle title='How does it work?' color={color2}/> 
              <h4 className='heading'> Variables and advanced prototyping </h4>
              <p>
                This minigame wouldn't be possible without variables. There's over 20 variables required for this game to run.
              </p>
              <Image src={gif2} style={imageCaptioned}/>
              <p className='caption'>
                Please ignore the “Dark” column for now, as I didn't implement a dark mode for the game yet.
              </p>
              <br/> <br/> <br/> <br/> <br/>

              <h4 className='heading'> Let's do a simple demo </h4>
              <p>
                Let's run through a simpler example of how Stacker works.
              </p>
              <Image src={gif3} style={imageCaptioned}/>
              <p className='caption'>
                A simplified example of this concept, using the “After delay” option for each screen, as opposed to “On click”.
              </p>
              <br/> <br/> <br/> <br/> <br/>

              <p>
                Each time the user returns to screen A, we can run a check for conditionals.
              </p>
              <p>
                I've created a number variable to keep track of the how many times the user returns to screen A.
              </p>
              <Image src={gif4} style={imageCaptioned}/>
              <p className='caption'>
                Notice the “total switches” count at the bottom of screen A and how it changes with each return.
              </p>
              <br/> <br/> <br/> <br/> <br/>

              <div className='grid'>
                <div className='gridCell'>
                  <p>
                    In the interactions window for screen A, two more actions have been added below the <br/> “→ Navigate to" action. 
                  </p>
                  <p>
                    In the “Set variable” action, the variable is updated. It can be thought of as:
                  </p>
                  <div className='codeblock'>
                    <p className='code'>
                      TotalSwitches = TotalSwitches + 1
                    </p>
                  </div>
                  <br/> <br/>
                  <p>
                    The “Conditional” action checks if an exit condition for this loop is reached.
                  </p>
                  <div className='codeblock'>
                    <p className='code'> 
                      if (TotalSwitches &#62; 3) &#123; <br/>
                        &#00; exit loop between screen A and B <br/>
                      &#125;
                    </p>
                  </div>
                </div>
                <div className='gridCell'>
                  <div className='imageGallery'>
                    <Image src={pic5} style={imageMarginLessBottom}/>
                  </div>
                </div>
              </div>
              {/* <p>
                In the interactions window for screen A, two more actions have been added below the “→ Navigate to action”. 
              </p>
              <p>
                In the “Set variable” action, the variable is updated.
              </p>
              <p>
                The “Conditional” action checks if an exit condition for this loop is reached.
              </p>
              <div className='imageGallery'>
                <Image src={pic5} style={imageMarginLessBottom}/>
              </div> */}
              <br/> <br/> <br/> <br/> <br/>

              <h4 className='heading'> Applying variables to properties </h4>
              <p>
                The usefulness of variables emerges when its applied to physical properties of elements!
              </p>
              <p>
                Physical properties of the element (e.g. width, height, position) will be updated when the variable its set to changes.
              </p>

              <Image src={gif6} style={imageCaptioned}/>
              <p className='caption'>
                Notice on the right how I can apply a variable to the width of the selected element.
              </p>
              <br/> <br/> <br/>

              <Image src={gif7} style={imageCaptioned}/>
              <p className='caption'>
                Here's an example of a loading bar that can be created by applying variables.
              </p>
              <br/> <br/> <br/> <br/> <br/>

              <h4 className='heading'> Putting it altogether </h4>
              <p>
                Stacker uses the concepts from the two demos above:
              </p>
              <Bullets info={concepts}/>
              {/* <ol>
                <li> The user will switch between two identical screens, a screen A and then a screen B, but since they're identical, the user won't notice. This switching will loop infinitely until an exit condition is reached, either a game victory or a game over (demo 1). </li>
                <li> Each switch allows the game to update the block position variable, which in turn updates the blocks position, moving the block across the screen (demo 2). </li>
              </ol> */}
              <Image src={gif8} style={imageCaptioned}/>
              <p className='caption'>
                Notice how many "set" actions there are for the "game over" conditional. Then notice how many conditionals there to check each cycle!
              </p>
              <br/>

              <p>
                There's a lot more variables to account for, like stack count and how the game determines a valid place vs an invalid one, but these details can be better explained on a call. Feel free to reach out to me through email or DM me on LinkedIn to hear more!
              </p>
            </div>

            <div className='section'>
              <SectionTitle title='Final Thoughts' color={color2}/> 
              <p>
                Through this challenge, I was able to gain a better understanding and grasp of how variables work, and their application for prototypes. 
              </p>
              <p>
                Variables open up a whole realm of new possibilities with what designers can prototype now, and I'd imagine this would allow designers to <b>mimic MVPs more closely</b>. 
              </p>
            </div>

            <div className='section'>
              <SectionTitle title='Links' color={color2}/> 
              <h4 className='heading'> Play the game (Figma prototype) </h4>
              <p>
                Here's the link to the <a href={link}> Figma prototype</a>, where you can play my minigame.
              </p>
              <br/> <br/> <br/>

              <h4 className='heading'> The build process (Figma file) </h4>
              <p>
                Check out the actual <a href={link2}> Figma file</a>, where you can view all the variables, components, and screens required for this game.
              </p>
              <br/> <br/> <br/>

              <h4 className='heading'> Sharing the creativity </h4>
              <p>
                Here's my <a href='https://www.linkedin.com/feed/update/urn:li:activity:7082475571913363456/'> Linkedin post</a> showcasing my test run of Stacker!
              </p>

              <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7082475506972962816" 
                height={this.props.screenWidth > 768 ? 717 : 400} 
                width={this.props.screenWidth > 768 ? 504 : 320} 
                frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>
            </div>
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

export default Stacker;
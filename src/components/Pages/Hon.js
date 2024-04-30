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
// import open from '../../images/open.svg';

import pic1 from '../../images/Pages/hon/1.png';
import pic2 from '../../images/Pages/hon/2.png';
import pic3 from '../../images/Pages/hon/3.png';
import pic4 from '../../images/Pages/hon/4.png';
import pic6 from '../../images/Pages/hon/6.png';
import pic7 from '../../images/Pages/hon/7.png';
import pic8 from '../../images/Pages/hon/8.png';
// import pic9 from '../../images/Pages/hon/9.png';
// import pic10 from '../../images/Pages/hon/10.png';
// import pic11 from '../../images/Pages/hon/11.png';
// import pic12 from '../../images/Pages/hon/12.png';
import pic13 from '../../images/Pages/hon/13.png';
// import pic14 from '../../images/Pages/hon/14.png';
import pic15 from '../../images/Pages/hon/15.png';
import pic16 from '../../images/Pages/hon/16.png';
import pic17 from '../../images/Pages/hon/17.png';
import pic18 from '../../images/Pages/hon/18.png';
import pic19 from '../../images/Pages/hon/19.png';
import pic20 from '../../images/Pages/hon/20.png';
import pic21 from '../../images/Pages/hon/21.png';
import pic22 from '../../images/Pages/hon/22.png';

const key = getEntryProperty('casestudies', 'hon', 'key')
const tags = getEntryProperty('casestudies', 'hon', 'tags')
const color = getEntryProperty('casestudies', 'hon', 'color')
const title = getEntryProperty('casestudies', 'hon', 'title')
const banner = getEntryProperty('casestudies', 'hon', 'banner')
const banner_mob = getEntryProperty('casestudies', 'hon', 'bannerM')
const link = getEntryProperty('casestudies', 'hon', 'figma')

const Bullets = (props) => {
  return (
  <div className='phrases'>
    {props.info.map((phrase, index) => 
      <Phrase key={'hon/' + index} text={phrase}/>
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

// Returns style based on breakpoints, of which there are 3
const decideMarginWidth = function(value) {
  if (value > 1280) {
    return {marginTop:'3rem'}
  } else if (value > 768) {
    return {width: '70%', marginTop:'3rem'}
  }
  return {width: '75%', marginTop:'3rem'}
} 



class Hon extends React.Component {
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

        <div className='content' >
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
                <h4 className='heading'> Figma </h4>
                <div className='buttons'>
                  {/* <a 
                    href='https://blog.hon-media.com/'
                    target='_blank' 
                    rel='noopener noreferrer'
                  >
                    <img src={open} alt='link' draggable='false' /> 
                    <span className='toolTip'> Check out the blog! </span> 
                  </a>  */}

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
                  I designed a blogsite for Hon-Media that has features two different views, one for regular users, 
                  and one for the company's developers.
                </p> 
              </div>
            </div>

            <div className='section'>
              <SectionTitle title='Intro' color={color}/> 
              <h4 className='heading'> Motivation </h4>
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
              <SectionTitle title='Need Finding' color={color}/> 
              <h4 className='heading'> User Needs </h4>
              <p> 
                Based on how Hon-Media described their blog, it's clear to me that there are two main user groups
                to design for.
              </p>
              <br/>
              <h4 className='subheading'> Clients & Viewers </h4>
              <p> 
                This is the main user group that I want the site to target. Ultimately, Hon-Media wants this site
                to funnel users to their main site, where they can learn more about the company and eventually 
                contact them.
              </p>
              <p> As a user, I need to be able to: </p>
              <Bullets info={needsClients}/>  
              <br/>
              
              <h4 className='subheading'> Hon-Media Team Members </h4>
              <p>
                Since Hon-Media will be the ones posting, they want convenient and fluid ways to create and manage posts
                and other content on the site.
              </p>
              <p> As a Hon-Media team member, I need to be able to: </p>
              <Bullets info={needsDevs}/>  
            </div>      

            <div className='section'>
              <SectionTitle title='Wireframing' color={color}/> 
              <h4 className='heading'> Site Architecture </h4>
              <p> 
                Based on the user needs described above, it seems like the site should have four main features,
                one of which is exclusive to Hon-Media team members. From the home page, users should be able to 
                read blog posts on a separate page, and be able to interact with the post and share it, as well
                as find related posts.
              </p>
              {/* <p>
                The blogsite should also have links to Hon-Media\'s main site and their contact info'.
              </p>
              <p>
                Lastly, Hon-Media team members should have a way to create and manage content on the site.
              </p> */}
              <Image src={pic1} />

              <h4 className='heading'> Home Page </h4>
              <p> The home page starts off with a featured blogs section, with recent posts below. </p>
              <Image src={pic2} style={imageMarginNoTop}/>
              <h4 className='heading'> Blog Post Page </h4>
              <p> 
                Each post will have it's own blog page, which looks like what you expect. Viewers can interact 
                with the post by liking or commenting, and they can also share the post on their social media.
              </p>
              <p> 
                Posts will also have specific tags that give insight onto the topics covered. These can possibly 
                serve as a way to find related articles.
              </p>
              <Image src={pic3} style={imageMarginNoTop}/>
              <h4 className='heading'> Create & Manage Posts </h4>
              <p> 
                These pages will be exclusive to Hon-Media team members and will probably be accessed with a login.
                They'll let the team members easily create new posts as well as edit/delete old ones.
              </p>
              <Image src={pic4} style={imageMarginNoTop}/>
            </div>  

            <div className='section'>
              <SectionTitle title='Prototyping' color={color}/> 
              <p>
                With the wireframes finished and feedback received from Hon-Media, I worked on fleshing out the
                designs and features. 
              </p>
              <br/>

              <h4 className='heading'> Home Page </h4>
              <p> 
                The look of the home page isn't too different, but a lot more details have been added. 
              </p>
              <Image src={pic6} style={imageMarginNoTop}/>

              <h4 className='heading'> Navigation & Footer </h4>
              <p> 
                The main navbar now has a third element, 'success stories', which are a dedicated page to articles
                about clients that Hon-Media has worked with. A secondary navbar allows viewers to more easily find
                posts that have been tagged with such. For example, any posts that are tagged with #social will 
                be placed under that tab.
              </p>
              <p>
                Hon-Media's socials are now fixed on the left side of the screen, allowing users to easily reach them.
              </p>
              <Image src={pic7} style={imageMarginLessBottom}/>
              <p> 
                Additions to the footer feature a link to contact Hon-Media in the center, and a Hon-Media
                team member login at the bottom left. This will let team members login to manage the blogsite.
              </p>
              <Image src={pic8} style={imageMarginNoTop}/>

              {/* <h4 className='heading'> DEVELOPER VIEW </h4>
              <p>
                Team members that have logged in will see a slightly different view of the site, as shown on the
                right image. The top-left most elements (the purple button and the eye icon) signify to the member
                that they are in developer view. Clicking on the purple button allows them to easily switch between
                this view and regular view (what viewers see). 
              </p>
              <p>
                On the top right, there's a fourth navbar option, which opens a drop-down menu that has options for
                all sorts of management. Lastly, every blog post on the site will have a gear icon on the top right
                corner of its card. Clicking on that brings up a modal with options to manage that individual post.
              </p>
              <Image src={pic9} style={imageMarginLessBottom}/>
              <p>
                The drop-down menu displays a multitude of options for the team member to choose from.
              </p>
              <Image src={pic10} style={imageMarginLessBottom}/>
              <p>
                Options modal pops up after the team member selects the gear icon for a 'featured' post.
              </p>
              <Image src={pic11} style={imageMarginNoTop}/> */}
              {/* <h4 className='heading'> DEVELOPER EXCLUSIVE SCREENS </h4>
              <p>
                These screens are accessed via the dev drop-down menu and can only be accessed as a team member.
                Key screens are discussed in more detail below.
              </p>
              <Image src={pic12} style={imageMarginNoTop}/> */}

              <h4 className='subheading'> Post Creation </h4>
              <p>
                Team members have a variety of selections to make as they create a post.
                Aside from content such as title and text, they can also choose from or create new tags to assign
                to the post, mark the post as featured, and enable/disable comments. Post edit screen functions
                similarly to this screen as well.
              </p>
              <Image src={pic13} style={imageMarginNoTop}/>

              {/* <h4 className='subheading'> SUCCESS STORY BUSINESS </h4>
              <p>
                Success story creation/edit screens are similar to post creation/edit screens. These will create
                new cards under the 'success story' page. Quotes about the business will be atop blog posts written
                about the business, and each business has its own unique tag.
              </p>
              <Image src={pic14} style={imageMarginNoTop}/> */}

              <h4 className='subheading'> Managing Posts </h4>
              <p>
                Team members also have the option to mass manage posts, all from one page, rather than individually
                through the post's gear icon. When multiple posts are selected, the options to feature, delete, or 
                hide appear. Likewise those actions can be done to each post individually by clicking on the buttons
                within the card.  
              </p>
              <Image src={pic15} style={imageMarginNoTop}/>

              <h4 className='heading'> Success Stories </h4>
              <p>
                Success stories are a way of highlighting the clients that Hon-Media has worked with. It allow groups
                posts about that specific client to make it easier for viewers to find and read.
                The navbar option will take viewers to a screen with client cards displayed. A title, description, and
                logo make for an intuitive yet simple card.
              </p>
              <p> 
                Success story tagged blog posts only differ in one aspect from normal blog posts; they have the business's 
                quote at the top of the page. Everything else about the blog post remains the same.
              </p>
              <Image src={pic16} style={imageMarginNoTop}/>

              <h4 className='heading'> Blog Posts </h4>
              <p>
                A typical blog post will look like this to the viewer. Viewers can engage with the post via the like,
                comment, and share buttons along the right side of the screen, or at the top and bottom of the post.
                Like in the wireframes, recommended articles are shown at the bottom of the page, to hopefully
                encourage viewers to read on if they're interested in more.
              </p>
              <p>
                I've added counters on each of them to serve as a metric to determine how popular the post is. If there's 
                a lot of likes and comments, you know it'll be a good read!
              </p>
              <Image src={pic17} style={imageMarginLessBottom}/>
              <Image src={pic18} style={imageMarginLessBottom}/>
              <p>
                Team members also have the power to delete comments as well, in case some are toxic or unhelpful.
              </p>
              <Image src={pic19} style={imageMarginLessBottom}/>
              <Image src={pic20} style={imageMarginNoTop}/>

              <h4 className='heading'> Final Iteration </h4>
              <p>
                After assessing the amount of articles Hon-Media currently has and the timecrunch for the devs, I decided to strip 
                down the blog site to this simpler but cleaner version.
              </p>
              <Image src={pic21} style={imageMarginLessBottom}/>
              <Image src={pic22} style={imageMarginNoTop}/>
            </div>

            <div className='section'>
              <SectionTitle title='Final Thoughts' color={color}/> 
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
      <FooterSeeAlso page={key} width={decideMarginWidth(this.props.screenWidth)} />
      <Footer screenWidth={this.props.screenWidth} />
      </>
    );
  }
}

export default Hon;
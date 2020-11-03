import React from 'react';
import LazyLoad from 'react-lazyload';

import Header from '../Header.js';
import Footer from '../Footer.js';
import NavMenu from '../NavMenu.js';
import Contact from '../Contact.js';
import Phrase from '../Phrase.js';
import SectionTitle from '../SectionTitle.js';
import TopButton from '../TopButton.js';

import banner from '../../images/banner_parking.png';
import figma from '../../images/figmaLogo_black.svg';
import pic1 from '../../images/parking/1.jpg';
import pic2 from '../../images/parking/2.png';
import pic3 from '../../images/parking/3.png';
import pic4 from '../../images/parking/4.png';
import pic5 from '../../images/parking/5.png';
import pic9 from '../../images/parking/9.png';
import pic10 from '../../images/parking/10.png';
import pic11 from '../../images/parking/11.png';
import pic12 from '../../images/parking/12.png';
import pic13 from '../../images/parking/13.jpg';
import pic14 from '../../images/parking/14.jpg';
import pic16 from '../../images/parking/16.png';
import pic17 from '../../images/parking/17.png';
import pic18 from '../../images/parking/18.png';
import pic19 from '../../images/parking/19.png';
import pic20 from '../../images/parking/20.png';
import pic21 from '../../images/parking/21.png';
import pic22 from '../../images/parking/22.png';
import pic23 from '../../images/parking/23.png';
import pic24 from '../../images/parking/24.png';
import pic25 from '../../images/parking/25.png';

const Bullets = (props) => {
  return (
  <div className='phrases'>
    {props.info.map((phrase, index) => 
      <Phrase key={'yahoo/' + index} text={phrase} ital={props.ital} />
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

const goals = [
  'Understand the benefits of a user-centered design',
  'Learn UX methods, tips, and tricks that will help me identify and understand the users of this system',
  'Be able to identify the breakdowns and flaws of the old design/system and address them',
  'Create a design that benefits all users without too much compromise or hassle',
  'Gain meaninful experience from this user-centered design that I can apply to other projects and in practice',
];

const permits = [
  'A: Faculty-only, but can park in the below spots excluding V',
  'B: Staff/Grad student-only, but can park in the below spots excluding V',
  'S: Student-only',
  'V: Visitors, usually a one day permit that anyone can buy',
];

const questions = [
  'Do you park on campus or somewhere off campus?',
  'What parking permit do you usually buy/did you purchase?',
  'How difficult/easy is it for you to find a parking spot throughout the quarter?',
  'How long does it take you to find a parking spot?',
  'Keeping in mind your parking experience, how do you feel about the price of your permit?'
];

const findings = [
  'Commuters who drive drive out of necessity',
  'Commuters value convenience, whether that\'s time saved finding a parking spot or distance cut short by finding a closer spot to their destination',
  'Parking spots, especially those closer towards center of campus (the ideal spot), are much harder to find than those on the onskirts or off',
  'Students or staff with S and B permits respectively, typically have a harder time finding spots than A permit holders',
];

const cate = [
  'Pricing',
  'Availability',
  'Infrastructure',
  'Location',
  'Lifestyle accommodations',
  'Info flow and dispersal',
];

const affin = [
  'Why are there so many S spots located along the periphery of campus rather than the center of campus?',
  'Why are people holding A and B permits allowed to park in S spots?',
  'Why do some people still buy S p ermits despite knowing that there is a problem when it comes to availability?',
];

const idea1pros = [
  'Users can be informed on permit/parking rules, as well as where to park',
  'Visitors who are often confused on parking rules can be informed',
];

const idea1cons = [
  'Information is only useful if users remember it',
  'Most of the system remains unchanged',
];

const idea2pros = [
  'Users pay only for the days they actually drive to campus and park',
  'Benefits those that don\'t drive to campus everyday a week',
];

const idea2cons = [
  'Doesn\'t alleviate parking struggles, just makes it permit prices cheaper',
  'Notion of pay-per-day might be offputting to some',
];

const idea3pros = [
  'Structures and lots would have a live spot tracker and update the counter on the app',
  'Users can view structure/lot capacity right from their phone',
];

const idea3cons = [
  'Priciest solution, as a physical revamp would take time',
  'Phone use while driving is a big concern, especially on campus where people cross the streets daily',
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
                  We designed an informational kiosk system that would help ease parking struggles on UCSD campus 
                  for drivers of all sorts.
                </h4> 
              </div>
            </div>

            <div className='section'>
              <SectionTitle title='intro'/> 
              <h4 className='heading'> MOTIVATION </h4>
              <p> 
                Parking on campus has always been a stressful first-come, first-serve experience, not just for
                students, but faculty, staff, and guests too. Permits are required to park in spaces, but even
                a permit does not guarantee a spot. For anyone with 8-4 class/work days, the pressure of finding 
                a spot in the morning can be stressful. Come too late and you won't have a spot to park. If you're 
                lucky, you'll have a spot miles away from campus. 
              </p>
              <p>
                At the time of this project, the system was flawed and so our task was to create a design that 
                would remedy this issue by studying the needs and behaviors of all users as well as the 
                parking administration who's in charge of it all.
              </p>

              <br/>
              <h4 className='heading'> GOALS </h4>
              <p> These are the goals I had in mind while working on this project: </p>
              <Bullets info={goals} />
            </div>          
                      
            <div className='section'>
              <SectionTitle title='interviewing the users'/> 
              <h4 className='heading'> INITIAL THOUGHTS & IDEAS </h4>
              <p> 
                Right from the start, we assumed (yes it's bad to assume, but sometimes it's necessary to assume
                a bit to get some brainstorming done) that users of all sorts who drive to campus had gripes with 
                the current parking system, based off of our own personal experience and people we knew. Thus we 
                sought to interview a variety of people around campus's busiest areas and parking structures/lots to get a better 
                idea of the types of users and their problems with the design.
              </p>

              <br/>
              <h4 className='subheading'> THE CURRENT DESIGN </h4>
              <p>
                The system was set up for permit-required parking spaces. Permits were tied to labeled parking spots.
                All parking lots on and nearby campus had labeled spots. There were four main types: 
              </p>
              <Bullets info={permits} />
              <p> 
                Users had the option of buying day, quarter, or yearly permits for the first three types. 
                A permits were the most expensive, and S were the cheapest. After 4:30pm, any permit holder was 
                allowed to park in any of the spots, unless otherwise stated.
              </p>
              <br/>
              
              <h4 className='heading'> INTERVIEW PREP </h4>
              <p>
                We had a team of six, so we were able to effectively split into three pairs and ask around. 
                In each pair, one member was assigned as the note-taker, who would have the questions on hand and 
                write down or record the conversation, while the other was the interviewer and would conversate with
                the interviewee. We kept our areas limited to campus's main area and parking structures/lots.
                We also created a google form and shared that online in hopes of gaining more responses there as well.
              </p>  
              <p>
                We first needed questions to identify those who drive to campus from those who didn't.
                Then from there we asked the same general questions. Out of the questions we asked, we wanted to find out
                the user's motivations for driving, opinions on the parking system, and their gripes if they had any.
              </p>
              <p> Here are some questions we asked individuals who confirmed that they drive as their commute: </p>
              <Bullets info={questions} ital />  
              <br/>

              <h4 className='heading'> INTERVIEW KEY FINDINGS </h4>
              {/* <p>
                Of the 26 individuals we interviewed (and confirmed as drivers), most of them were students, however we still 
                did get responses from a few faculty, professors, and staff. Most of the students share the same grueling
                experience finding parking, but interestingly as you go higher on the permit list, the parking review gets more
                positive. Of the 7 faculty, professors, and staff we talked with, half of them had little issues finding spots,
                while the other half said that they struggle a bit from time to time. 
              </p>
              <p>
                Students stated that they found the parking permit too expensive to not even be guaranteed a spot, and non-students
                had mixed thoughts about the price. 
              </p>
              <p>
                One thing was clear from all individuals though; everyone drove either because they lived too far to conveniently
                bus, or for convenience. When asked where they prefer to park, most stated that if they had the choice, they
                would park as close as possible to their destination on campus. In otherwords, they value convenience.
                A majority also pointed out however, parking spots towards the center of campus (the most convenient spots) tend to be
                high in demand and hard to find. Some stated that finding those spots are such a hassle that they would rather just 
                park far and have an easier time getting a spot than to spend minutes struggling in a busy parking lot.
              </p>
              <br/>

              <h4 className='subheading'> KEY FINDINGS </h4> */}
              <p>
                Of the 58 individuals we interviewed (and confirmed as drivers), most of them were undergrad/grad students and the rest were 
                a variety of faculty, professors, and staff.
              </p>
              <Bullets info={findings} />

            </div>      

            <div className='section'>
              <SectionTitle title='understanding our users'/> 
              <h4 className='heading'> AFFINITY DIAGRAM </h4>
              <p> 
                With the data we gathered from our in-person interviews and google form responses,
                we moved onto reifying it into something more visual to start off our ideation process.
              </p>  
              <p>
                The posts in red are the user needs that we obtained from our interview data. The posts in 
                blue are our possible design ideas in reaction to those user needs. The posts in green are
                our six major categories that we derived from this affinity diagram.
              </p>
              <Image src={pic1} style={imageMarginNoTop}/>
              <p> Cleaned up, digitalized version of our diagram. </p>
              <Image src={pic2} style={imageMarginLessBottom}/>
              <p> A different version of the diagram, meant for easier reading </p>
              <Image src={pic3} style={imageMarginLessBottom}/>

              <h4 className='subheading'> AFFINITY DIAGRAM TAKEAWAYS </h4>
              <p>
                Our affinity diagram gave us six key categories to focus on:
              </p>
              <Bullets info={cate} />
              <p>
                Creating this diagram also led us to generate some 'why' questions that we thought we should
                try to address in our design solution:
              </p>
              <Bullets info={affin} ital />
              <br/>

              <h4 className='heading'> PERSONAS </h4>
              <p> The home page starts off with a featured blogs section, with recent posts below. </p>

              <h4 className='heading'> IDENTITY MODEL </h4>
              <p> 
                After we identified our users through the personas, we were able to better understand them and their
                needs through this model.
              </p>
              <Image src={pic4} style={imageMarginNoTop}/>

              <h4 className='heading'> DAY-IN-THE-LIFE MODEL </h4>
              <p> 
                This model below was important for our understanding of the typical day for an average user.
                We focused on two specific contexts, driving to campus and on campus.
              </p>
              <p>
                From our data, we realized that everyone had their own needs to drive to campus, but once on
                campus, most people had a similar struggle to find parking. The first context focuses on the 
                different needs of individuals, represented by the orange boxes. The red box is a specific 
                example of a persona. Once on campus, the green boxes represent user breakdowns and issues 
                concerning parking. 
              </p>
              <Image src={pic5} style={imageMarginNoTop}/>
            </div>  

            <div className='section'>
              <SectionTitle title='ideation'/> 
              <h4 className='heading'> IDEAS </h4>
              <p>
                Looking back at the data we collected, the affinity diagrams, and the models, we realized that
                a lot of the struggles of parking are mainly due to a lack of information. <br/> For instance, what if 
                users knew how full a parking lot was just by checking an app? If they knew this, then they wouldn't
                need to bother with driving over to a lot just to find it full. It'd save time and effort, and they would
                be less frustrated.
              </p>
              <p>
                After this realization, we thought of three ideas that could potentially solve this issue.
              </p>
              <br/>
              
              <h4 className='subheading'> 1. PAMPHLET & KIOSK INFO BOOTHS </h4>
              <p>
                This solution would have drive-by accessible kiosks with pamphlets stationed at major parking structures/lots.
                which would help inform unaware users and visitors of parking permit rules that they might not know.
                This can also greatly help visitors or handicapped users locate V or accesibility spots around campus.
              </p>
              <p> PROS: </p>
              <Bullets info={idea1pros} />
              <p> CONS: </p>
              <Bullets info={idea1cons} />
              <br/>

              <h4 className='subheading'> 2. PAY-PER-DAY </h4>
              <p>
                Users, especially those with S permits, mentioned that they felt like they were paying for a struggle
                rather than parking spots. Users with high permits like A ones were willing to pay more if it means 
                they would not have to struggle as much finding spots. The problem with this is that it's not an issue
                of paying more to get more, rather A permits are reserved only for faculty. Students left with S permits
                had no other option.
              </p>
              <p>
                This solution would have users pay a flat rate per day they actually park on campus, rather than one set
                price for a whole quarter or year.
              </p>
              <p> PROS: </p>
              <Bullets info={idea2pros} />
              <p> CONS: </p>
              <Bullets info={idea2cons} />
              <br/>

              <h4 className='subheading'> 3. PARKING STRUCTURE/LOT REVAMP </h4>
              <p>
                Currently users don't know if a parking structure/lot is full until they actually drive there to check
                it out. This can be a massive waste of time and effort.
              </p>
              <p>
                This solution would revamp the infrastructure to have live counts of the capacity, viewable through an
                app.
              </p>
              <p> PROS: </p>
              <Bullets info={idea3pros} />
              <p> CONS: </p>
              <Bullets info={idea3cons} />
              <br/>

              <h4 className='subheading'> IDEA FEEDBACK </h4>
              <p>
                We managed to get ahold of Josh Kavanagh, the parking director of campus, for a meeting where we discussed
                his thoughts on flaws of the current system, future plans for it, and feedback on our ideas.
                He was intrigued by all of them, especially the kiosk and pamphlet one. Interestingly, he also 
                stated that the parking administration is planning a solution along the lines of our proposed 
                idea #3, so he stated that it would be nice to have our kiosk idea go alongside that one. 
              </p>
              <br/>

              <h4 className='heading'> STORYBOARDING </h4>
              <p>
                Based off the feedback we got from the parking director, we opted to go with our first design idea,
                with the kiosk and pamphlets.
              </p>
              <p>
                Our storyboards follow a four-act story consisting of context, problem, solution, and resolution.
                In all of them, an individual seeks to drive to campus, but encounters a problem that gets addressed 
                by our own visualizations of the kiosks and pamphlets.
              </p>
              <Image src={pic16} style={imageMarginLessBottom}/>
              <Image src={pic17} style={imageMarginLessBottom}/>
            </div>

            <div className='section'>
              <SectionTitle title='pencils & papers to prototypes'/> 
              <h4 className='heading'> SKETCHING </h4>
              <p>
                We each sketched our own idea of how to implement both of these. Check out some of them below:
              </p>
              <Image src={pic9} style={imageMarginLessBottom}/>
              <Image src={pic10} style={imageMarginLessBottom}/>
              <Image src={pic11} style={imageMarginLessBottom}/>
              <Image src={pic12} style={imageMarginNoTop}/>

              <h4 className='heading'> WIREFRAMING </h4>
              <p>
                Our goal was to create an interface that reduces as much friction
                and unnecessary taps as necessary. We want users to be able to approach and have their info in no more
                than five minutes. A map was priority, but other information such as policies and permit prices should
                also be relatively simple to find. 
              </p>
              <p>
                To do this, we went for a split screen interface that kept the map onscreen at all times, since
                that is the most important info to show. The map would show locations of all parking structures/
                lots on campus.
              </p>
              <Image src={pic13} style={imageMarginLessBottom}/>
              <p>
                Our interface would have multiple tabs for different topics such as 'permit info' and 'policies'.
              </p>
              <Image src={pic14} style={imageMarginNoTop}/>

              <h4 className='heading'> PROTOTYPING </h4>
              <p>
                We split into two teams to work on a prototype of the pamphlet and one of the kiosk. We wanted the 
                pamphlet to be easy to reproduce and simple, while the cardboard prototype be at least some sort of
                freestanding interactive interface.
              </p>
              <br/>
              <h4 className='subheading'> PAMPHLET </h4>
              <p>
                The parking website has all the information users could find regarding parking, yet our data showed
                that some users were unaware of some aspects. The notion of having visitors pull up and park somewhere
                to check website instructions on where to park seems very intrusive and unefficient as well.
              </p>
              <p>
                We intended to ease that friction by filling our pamphlets with all the important information that our 
                users wanted in a more minimal yet informative way. It is essentially a guide on essential parking topics 
                such as permit prices, places to park, accesibility spots, and policies and enforcement.
              </p>
              <Image src={pic18} style={imageMarginLessBottom}/>
              <Image src={pic19} style={imageMarginLessBottom}/>
              <Image src={pic20} style={imageMarginNoTop}/>
              <Image src={pic21} style={imageMarginNoTop}/>

              <h4 className='subheading'> KIOSK </h4>
              <p>
                Ideally, our kiosk would be much taller than the prototype shown here, and it would be at least eye level
                and on a larger display, but for this prototype, we kept things much simpler. A cardboard shell that holds
                pamphlets on the side holds the screen intact. For the UI, we decided to keep it consistent with what's shown
                on the pamphlet, but also incorporate an always-present map of parking structure/lot locations.
              </p>
              <Image src={pic22} style={imageMarginLessBottom}/>
              <Image src={pic23} style={imageMarginLessBottom}/>
              <Image src={pic24} style={imageMarginNoTop}/>
              <Image src={pic25} style={imageMarginLessBottom}/>
            </div>

            <div className='section'>
              <SectionTitle title='feedback & final thoughts'/> 
              <h4 className='heading'> FEEDBACK </h4>
              <p>
                We displayed our prototypes at our booth on the final day of class and arranged for Josh Kavanagh
                to come through and check out what we had discussed weeks prior. Other students were also able to
                interact with the kiosk and give us their feedback and thoughts.
              </p>
              <p>
                Josh was very enthusiastic upon interacting with the pamphlet and kiosk. He agreed with 
                our opinions regarding the parking website - it's too difficult to access the information you are 
                looking for. He stated that our pamphlet makes important information more salient for the readers 
                to see. He also mentioned the parking administration has actually been considering adding kiosks to some of the 
                parking structures. <br/>
                We also reached out to some of the interviewees that we interviewed back during initial interviews
                and asked for their thoughts on a kiosk and pamphlet system; most of them felt that having a kiosk 
                that informed them of parking on campus would be useful, and having the interactive map next to the 
                information was helpful. 
              </p>
              <p>
                Turns out that improving the information flow about parking did seem to have positive interests from users who
                drive to campus. With this feedback and validation, we have a better idea as to where our project could be 
                improved in the future given more time and resources.
              </p>
              <br/>

              <h4 className='heading'> LESSONS LEARNED </h4>
              <p>
                Throughout this entire project, I realized that design is iterative. Our first user interviews 
                that we conducted always came up in our team discussions. We found ourselves constantly going 
                back to the user data that we gathered to make sure we were on track with our designing, whether
                it was storyboading, sketching, wireframing, or prototyping. This was an excellent example of user-centered
                design at work. Overall this was a great learning experience, especially in regards to UX methods and models
                such as affinity diagramming. It greatly helped us brainstorm ideas and to see the bigger picture via
                key topics. I doubt this project would have gone as well if we skipped doing that. 
              </p>
              <p>
                For now, we're putting
                this project on hold, but Josh did mention that he'd like to reach out to us in the future to 
                help look into future parking expansion projects, so that could be fun! 
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
import React from 'react';
import ReactGA from 'react-ga';
// import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

import Tags from './Tags.js';
// import open from '../images/open.svg';
// import github from '../images/GitHub-Mark-120px-plus.png';
// import figma from '../images/figmaLogo.svg';
// import figmaM from '../images/figmaM.svg';
// import figmaD from '../images/figmaD.svg';

// const Tags = (props) => {
//   return (
//     <div className='tags'>
//       {props.names.map((name) =>
//         <div className='tagWrapper' style={{borderColor: props.color}}>
//           <h6 key={name} style={{color: props.color}}> {name} </h6>
//         </div>
//       )}
//     </div>
//   );
// }

// const Buttons = (props) => {
//   return (
//     <div className='buttons'>
//       {/* {props.props.github && <a href={props.props.github} target="_blank" rel="noopener noreferrer">
//           <img src={github} alt='github' draggable='false' />     
//           <span className='toolTip'> Github </span>
//       </a> }
//       {props.props.figma && <a href={props.props.figma} target="_blank" rel="noopener noreferrer">
//           <img src={figma} alt='figma' draggable='false' /> 
//           <span className='toolTip'> Figma prototype </span> 
//       </a> }
//       {props.props.figmaD && <a href={props.props.figmaD} target="_blank" rel="noopener noreferrer">
//           <img src={figmaD} alt='figmaDesktop' draggable='false' /> 
//           <span className='toolTip'> Desktop proto </span> 
//       </a> }
//       {props.props.figmaM && <a href={props.props.figmaM} target="_blank" rel="noopener noreferrer">
//           <img src={figmaM} alt='figmaMobile' draggable='false' /> 
//           <span className='toolTip'> Mobile prototype </span> 
//       </a> } */}
//       {/* {props.props.figmaA && <a href={props.props.figmaA} target="_blank" rel="noopener noreferrer">
//           <img src={figmaA} alt='figmaA' draggable='false' /> 
//           <span className='toolTip'> figma version A </span> 
//       </a> }
//       {props.props.figmaB && <a href={props.props.figmaB} target="_blank" rel="noopener noreferrer">
//           <img src={figmaB} alt='figmaB' draggable='false' /> 
//           <span className='toolTip'> figma version B </span> 
//       </a> }
//       {props.props.figma1 && <a href={props.props.figma1} target="_blank" rel="noopener noreferrer">
//           <img src={figma1} alt='figma1' draggable='false' /> 
//           <span className='toolTip'> Redesign 1 proto </span> 
//       </a> }
//       {props.props.figma2 && <a href={props.props.figma2} target="_blank" rel="noopener noreferrer">
//           <img src={figma2} alt='figma1' draggable='false' /> 
//           <span className='toolTip'> Redesign 2 proto </span> 
//       </a> } */}
//       {/* {props.props.link && <Link to={props.props.link} rel="noopener noreferrer">
//           <img src={open} alt='open' draggable='false' /> 
//           <span className='toolTip'> Read more! </span>
//       </Link> } */}
//     </div>
//   );
// }


// For the older design of card, no longer used
// function Info(props) {
//   let [collapsedHeight, setHeight] = useState();
//   let [expandedHeight, setUpper] = useState();
//   let [mouseEnterCount, setCount] = useState(1);
//   const ref = useRef()
//   const isFirstRender = useRef(true);


//   const getCollapsedHeight = () => {
//     const newHeight = ref.current.offsetHeight;
//     setHeight(newHeight);
//   }
//   const getExpandedHeight = () => {
//     const newHeight = ref.current.offsetHeight;
//     setUpper(newHeight);
//   }

//   const incrementCount = () => {
//     setCount(mouseEnterCount += 1);
//   }

//   const handleResize = () => {
//     setCount(2);
//     // console.log('testing ' + mouseEnterCount)
//     setHeight('96px');
//     setUpper('auto');
//   }

//   useEffect(() => {
//     window.addEventListener('resize', handleResize, false);
//   }, [])

//   useEffect(() => {
//     if (ref.current && isFirstRender.current) {
//       isFirstRender.current = false;
//     }

//     // Get collapsed height on first mouse enter
//     if (ref.current && mouseEnterCount === 1) {
//       getCollapsedHeight();
//       incrementCount();
//       // console.log('collapsed height: ' + collapsedHeight);
//     } 

//     // Get expanded height on first mouse leave
//     if (props.mouseEntered && mouseEnterCount === 2) {
//       getExpandedHeight();
//       incrementCount();
//       // console.log('expanded height: ' + expandedHeight);
//     }

//   }, [props.mouseEntered])

//   return (
//     <div 
//       className={'descWrapper'} 
//       style={props.mouseEntered ? { height: expandedHeight } : { height: collapsedHeight}} 
//       ref={ref} 
//     >
//       <div className='topRow'>
//         <h4 className='cardTitle'> {props.props.title} </h4>
//         {/* {props.mouseEntered && <Buttons props={props.props}/>} */}
//       </div>
      
//       {props.mouseEntered &&
//         <div className={props.props.screenWidth > 1280 ? 'botRow' : 'botRowWide'}>
//           <p> {props.props.desc} </p> 
//           {props.props.tags && <Tags names={props.props.tags} color={props.props.color2 || props.props.color} />} 
//         </div>
//       }
//     </div>
//   )
// }



function Card(props) {
  // const [setMouse] = useState(false);

  const handleClick = () => {
    // Send custom event to Google Analytics
    ReactGA.event({
      category: 'Work Card View',
      action: 'Viewed',
      label: `${props.title} viewed`, 
      value: 1 // Optional numeric value
    });
  };

  // const handleMouseEnter = () => {
  //   setMouse(true);
  // }

  // const handleMouseLeave = () => {
  //   setMouse(false);
  // }

  return (
    <>
      {props.screenWidth > 768 ?      
        <div 
          className={props.screenWidth > 1280 ? 'cardDesktop' : 'cardDesktop wide'} 
          // style={props.screenWidth >= 480 ? {margin: '2rem 1.5rem'} : {margin: '1rem 1rem'}}
          // onMouseEnter={handleMouseEnter} 
          // onMouseLeave={handleMouseLeave}
          data-aos='fade-up' 
          data-aos-offset='50' 
          data-aos-easing='ease-out-sine'
          data-aos-duration='400'
          data-aos-once={true}
        >
          {props.link &&
            <Link to={props.link} onClick={handleClick} rel="noopener noreferrer">
              <div className='imageHolder' style={{backgroundColor: props.color}}>
                <LazyLoad height={200} offset={100}>
                <div className='lazyload-wrapper'>
                  {props.link && <img src={props.image} alt={props.title} draggable='false' /> } 
                </div>  
                </LazyLoad>
              </div>
        
              {/* <Info props={props} mouseEntered={mouseEntered} screenWidth={props.screenWidth}> </Info> */}
              <div className={'descWrapper'} >
                <div className='topRow'>
                      <h4 className='cardTitle'> {props.title} </h4>
                </div>
                
                {/* <div className={props.screenWidth > 1280 ? 'botRow' : 'botRowWide'}> */}
                <div className='botRow'>
                  <p> {props.desc} </p> 
                  {props.tags && <Tags names={props.tags} color={props.color2 || props.color} />} 
                </div>
              </div>
            </Link> 
          }
        </div> 

      :

        <div 
          className='cardMobile'
          // style={props.screenWidth >= 768 ? {margin: '1rem 1.5rem'} : {margin: '1rem inherit'}}
          // onMouseEnter={handleMouseEnter} 
          // onMouseLeave={handleMouseLeave}
        >
          <div className='imageHolder'>
            <LazyLoad height={250} offset={2000} overflow={true}>
            {/* <div className='lazyload-wrapper'> */}
              {props.link &&
                <Link to={props.link}  onClick={handleClick} rel="noopener noreferrer">
                  <img src={props.imageM} alt={props.title} draggable='false' />
                </Link>
              } 
            {/* </div> */}
            </LazyLoad>
          </div>
        
          <div className='text'>
            <h4 className='cardTitle'> {props.title} </h4>
            <p> {props.desc} </p>
        
            {props.tags && <Tags names={props.tags} color={props.color2 || props.color} />}
            {/* <Buttons props={props} /> */}
          </div>
        </div>
      }  
    </>
  )
}



// class Card extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       mouseEntered: false
//     }

//     this.handleMouseEnter = this.handleMouseEnter.bind(this);
//     this.handleMouseLeave = this.handleMouseLeave.bind(this);
//   }

//   handleMouseEnter(e) {
//     this.setState({mouseEntered: true});
//   }

//   handleMouseLeave(e) {
//     this.setState({mouseEntered: false});
//   }


//   render() {
//     return (
//       <>
//       {this.props.screenWidth > 768 ?      
//         <div 
//           className='cardDesktop'
//           style={this.props.screenWidth >= 480 ? {margin: '2rem 1.5rem'} : {margin: '1rem 1rem'}}
//           onMouseEnter={this.handleMouseEnter} 
//           onMouseLeave={this.handleMouseLeave}
//           data-aos='fade' 
//           data-aos-offset='50' 
//           data-aos-easing='ease-out-sine'
//           data-aos-duration='400'
//           data-aos-once={true}
//         >
          
//           <div className='imageHolder' style={{backgroundColor: this.props.color}}>
//             <LazyLoad height={200} offset={100}>
//             <div className='lazyload-wrapper'>
//               {this.props.default &&
//                 <a href={this.props.default} target="_blank" rel="noopener noreferrer">
//                   <img src={this.props.image} alt={this.props.title} draggable='false' />
//                 </a>
//               }
//               {this.props.link &&
//                 <Link to={this.props.link} rel="noopener noreferrer">
//                   <img src={this.props.image} alt={this.props.title} draggable='false' />
//                 </Link>
//               } 
//             </div>  
//             </LazyLoad>
//           </div>
    
//           <div className={this.state.mouseEntered ? 'descWrapper expanded' : 'descWrapper collapsed'} >
//             <div className='topRow'>
//               <h4 className='cardTitle'> {this.props.title.toUpperCase()} </h4>
//               {this.state.mouseEntered && <Buttons props={this.props}/>}
//             </div>
            
//             {this.state.mouseEntered &&
//               <div className='botRow'>
//                 <p> {this.props.desc} </p> 
//                 {this.props.tags && <Tags names={this.props.tags} color={this.props.color2 || this.props.color} />} 
//               </div>
//             }
//           </div>
//         </div>

//       :

//         <div 
//           className='cardMobile'
//           style={this.props.screenWidth >= 768 ? {margin: '1rem 1.5rem'} : {margin: '1rem inherit'}}
//           onMouseEnter={this.handleMouseEnter} 
//           onMouseLeave={this.handleMouseLeave}
//         >
//           <div className='imageHolder'>
//             <LazyLoad height={250} offset={2000} overflow={true}>
//             {/* <div className='lazyload-wrapper'> */}
//               {this.props.default &&
//                 <a href={this.props.default} target="_blank" rel="noopener noreferrer">
//                   <img src={this.props.imageM} alt={this.props.title} draggable='false' />
//                 </a>
//               }
//               {this.props.link &&
//                 <Link to={this.props.link} rel="noopener noreferrer">
//                   <img src={this.props.imageM} alt={this.props.title} draggable='false' />
//                 </Link>
//               } 
//             {/* </div> */}
//             </LazyLoad>
//           </div>
        
//           <div className='text'>
//             <h4 className='cardTitle'> {this.props.title.toUpperCase()} </h4>
//             <p> {this.props.desc} </p>
        
//             {this.props.tags && <Tags names={this.props.tags} color={this.props.color2 || this.props.color} />}
//             <Buttons props={this.props} />
//           </div>
//         </div>
//       }  
//       </>
//     );
//   }
// }

export default Card;
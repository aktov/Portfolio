import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { throttle, debounce } from "lodash";

import Navigation from './Navigation.js';
import logo from '../images/logo.svg';

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const Header = (props) => {
  const { stickyUntil = 0 } = props;  // Default value is 0
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isManuallyVisible, setIsManuallyVisible] = useState(false);
  let lastScrollY = useRef(0);  // Store last scroll position
  let timeout = useRef(null);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (isManuallyVisible) return; // Prevent hiding if manually shown by mouse

      if (window.scrollY > stickyUntil && window.scrollY > lastScrollY.current) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      lastScrollY.current = window.scrollY;

      // Reset timeout if the user is scrolling
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => {
        // Hide header after 1 second of inactivity
        if (!isManuallyVisible && window.scrollY > stickyUntil) {
          setIsHeaderVisible(false);
        }
      }, 1000); 
    }, 100);  // Throttled to 100ms

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout.current);
    };
  }, [isManuallyVisible, stickyUntil]);


  // Detect mouse moving towards the top of the screen
  useEffect(() => {
    const handleMouseMove = debounce((e) => {
      if (e.clientY <= 96 * 1.5) {  // 96 is the height of the header
        setIsManuallyVisible(true); 
        setIsHeaderVisible(true); // Show header when cursor is near top
      }
    }, 25);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      handleMouseMove.cancel();
    }
  }, []);


  // Reset `isManuallyVisible` when user scrolls again
  useEffect(() => {
    const resetManualVisibility = () => {
      setIsManuallyVisible(false);
    };

    window.addEventListener("scroll", resetManualVisibility);
    return () => window.removeEventListener("scroll", resetManualVisibility);
  }, []);


  // Handles clicking on header link
  const handleClick = (e) => {
    if (document.getElementById('anchor_page')) {
      document.getElementById('anchor_page').scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <header 
      // className='header'
      className={`header ${isHeaderVisible ? '' : 'hidden'}`}
    >
      <div className='left'> 
        <Link to='/'> 
          <button 
            onClick={handleClick}
            aria-label='Go back to top'>

            {/* Change logo size depending on device */}
            <img className='logo' style={props.useMobileNav === true ? {width: '2.5rem'} : null} src={logo} alt='Take me back to the home page' draggable='false' /> 
          </button> 
        </Link>
      </div>
      
      <Navigation 
        useMobileNav={props.useMobileNav} 
        toggleMenu={props.toggleMenu} 
      />
    </header>
    );
}



// class Header extends React.Component {
//   handleClick(e) {
//     if (document.getElementById('anchor_page')) {
//       document.getElementById('anchor_page').scrollIntoView({behavior: 'smooth', block: 'start'});
//     }
//   }

//   render() {
//     return (
//     <header className='header'>
//       <div className='left'> 
//         <Link to='/'> 
//           <button 
//             onClick={this.handleClick}
//             aria-label='Go back to top'>

//             {/* Change logo size depending on device */}
//             <img className='logo' style={this.props.useMobileNav == true ? {width: '2.5rem'} : null} src={logo} alt='Take me back to the home page' draggable='false' /> 
//           </button> 
//         </Link>
//       </div>
      
//       <Navigation 
//         useMobileNav={this.props.useMobileNav} 
//         toggleMenu={this.props.toggleMenu} 
//       />
//     </header>
//     );
//   }
// }

export default Header;
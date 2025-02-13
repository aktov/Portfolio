import React from 'react';
import ReactGA from 'react-ga';
import { Link, useHistory } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();


const headerCategories = [
  'work', 'about', 'resume'
]


// Button component
// const Button = (props) => {
//   const history = useHistory();

//   function handleClick(e) {
//     e.preventDefault(); // Prevents default link behavior

//     const isHomePage = window.location.pathname === "/";
//     const newUrl = `/#${props.text}`;
    
//     // Send custom event to Google Analytics
//     ReactGA.event({
//       category: 'Nav Button Interaction',
//       action: 'Viewed',
//       label: `${props.text} viewed`,
//       value: 1 // Optional numeric value
//     });

//     if (!isHomePage) {
//       // Navigate to home with the hash, then wait for the page to load
//       // history.push(`/#${props.text}`);
//       // setTimeout(() => scrollToAnchor(props.text), 2000);
//       history.push("/");
//       setTimeout(() => {
//         window.location.hash = `#${props.text}`;
//       }, 50);
//     } else {
//       // If already on the homepage, just scroll
//       // scrollToAnchor(props.text);
//       window.location.hash = `#${props.text}`;
//     }

//     // Closes the menu after a 500 ms delay
//     if (props.closeMenu) {
//       setTimeout(() => {props.closeMenu()}, 0);
//     }
//   }

//   return (
//     // <Link to={window.location.hash === '#/' || window.location.hash.includes('#/#') ? '/' : '/#' + props.text}> 
//     <Link to="/">
//     <div  
//       id={'button_'+ props.text} 
//       className='buttonNav'
//       onClick={handleClick}
//       aria-label={`Scroll to ${props.text}`}>
//       {props.text}
//     </div>
//     </Link>
//   );
// }
const Button = (props) => {
  const history = useHistory();

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function handleClick(e) {
    e.preventDefault(); // Prevent default link behavior

    const isHomePage = window.location.pathname === '/';

    // Send event to Google Analytics
    ReactGA.event({
      category: 'Nav Button Interaction',
      action: 'Viewed',
      label: `${props.text} viewed`,
      value: 1,
    });

    if (isHomePage) {
      // If already on the homepage, just scroll
      scrollToSection(props.text);
    } else {
      // Navigate to the homepage first, then scroll after a short delay
      history.push('/');
      setTimeout(() => {
        scrollToSection(props.text);
      }, 100);
    }

    // Close menu if applicable
    if (props.closeMenu) {
      setTimeout(() => props.closeMenu(), 0);
    }
  }

  return (
    <div  
      id={'button_' + props.text} 
      className='buttonNav'
      onClick={handleClick}
      aria-label={`Scroll to ${props.text}`}>
      {props.text}
    </div>
  );
};

class NavButtons extends React.Component {
  render() {
    return (
      <div className='buttons'>
        {headerCategories.map((category) => 
        <Button key={category} 
                text={category}
                closeMenu={this.props.closeMenu} 
                />
        )}
      </div>
    );
  }
}

export default NavButtons;
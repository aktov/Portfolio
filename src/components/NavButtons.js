import React from 'react';
import ReactGA from 'react-ga';
import { Link, useHistory } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();


const headerCategories = [
  'work', 'resume', 'about'
]

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
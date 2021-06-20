import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

// const headerCategories = [
//   'projects', 'experience', 'about', 'resume'
// ]
const headerCategories = [
  'projects', 'about', 'resume'
]

// Button component
const Button = (props) => {

  function handleClick(e) {
    let anchor = document.getElementById(props.text);
    console.log(window.location.hash);
    if (anchor) {
      setTimeout(() => {anchor.scrollIntoView({behavior: 'smooth', block: 'start'})}, 0);
    }

    // Closes the menu after a 500 ms delay
    if (props.closeMenu) {
      setTimeout(() => {props.closeMenu()}, 0);
    }
  }

  return (
    <Link to={window.location.hash == '#/' || window.location.hash.includes('#/#') ? '/' : '/#' + props.text}> 
    <button  
      id={'button_'+ props.text} 
      className='buttonNav outlineNone'
      onClick={handleClick}
      aria-label={`Go to ${props.text}`}>
      {props.text.toUpperCase()}
    </button>
    </Link>
  );
}

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
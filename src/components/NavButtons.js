import React from 'react';
import { Link } from 'react-router-dom';
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
    let anchor = document.getElementById('anchor_' + props.text);
    if (anchor) {
      setTimeout(() => {anchor.scrollIntoView({behavior: 'smooth', block: 'start'})}, 0);
    }

    // Closes the menu after a 500 ms delay
    if (props.closeMenu) {
      setTimeout(() => {props.closeMenu()}, 0);
    }
  }

  return (
    // <Link to={props.text === 'projects' ? '/' : '/'+ props.text}> 
    <Link to='/'> 
    <button  
      id={props.text} 
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
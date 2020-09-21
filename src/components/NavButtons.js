import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const headerCategories = [
  'projects', 'experience', 'about', 'resume'
]

// Button component
const Button = (props) => {

  function handleClick(e) {
    let anchor = document.getElementById('anchor_' + props.text);
    if (anchor) {
      anchor.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    // Closes the menu after a 500 ms delay
    // if (props.closeMenu) {
    //   setTimeout(() => {props.closeMenu()}, 500);
    // }
  }

  return (
    <button  
        id={props.text} 
        className='buttonNav outlineNone'
        onClick={handleClick}
        aria-label={`Go to ${props.text}`}>
        {props.text}
    </button>
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
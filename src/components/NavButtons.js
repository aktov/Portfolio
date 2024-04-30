import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();


const headerCategories = [
  'work', 'about', 'resume'
]


// Button component
const Button = (props) => {
  const history = useHistory();
  function handleClick(e) {
    let anchor = document.getElementById(props.text);

    if (props.text === '/') {
      history.push('/');
    } else {
      history.push(`/${props.text}`);
    }
    
    if (anchor) {
      setTimeout(() => {anchor.scrollIntoView({behavior: 'smooth', block: 'start'})}, 0);
    }

    // Closes the menu after a 500 ms delay
    if (props.closeMenu) {
      setTimeout(() => {props.closeMenu()}, 0);
    }
  }

  return (
    // <Link to={window.location.hash === '#/' || window.location.hash.includes('#/#') ? '/' : '/#' + props.text}> 
    <Link to="/">
    <div  
      id={'button_'+ props.text} 
      className='buttonNav'
      onClick={handleClick}
      aria-label={`Scroll to ${props.text}`}>
      {props.text}
    </div>
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
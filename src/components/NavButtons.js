import React from 'react';

const headerCategories = [
  {name: 'about'},
  {name: 'experience'},
  {name: 'projects'},
  {name: 'resume'},
]

// Button component
const HeaderButton = (props) => {
  function handleClick(e) {
    e.preventDefault();

    let anchor = document.getElementById('anchor_' + props.text);
    if (anchor) {
      anchor.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  return (
    <a  href={`#anchor_${props.text}`} 
        id={props.text} 
        className='buttonNav' 
        onClick={handleClick}
        aria-label={`Go to ${props.text}`}>
        {props.text}
    </a>
  );
}

class NavButtons extends React.Component {
  render() {
    return (
      <div className='buttons'>
        {headerCategories.map((category) => 
        <HeaderButton key={category.name} 
                      text={category.name}/>
        )}
      </div>
    );
  }
}

export default NavButtons;
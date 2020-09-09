import React from 'react';

const headerCategories = [
  {name: 'projects'},
  {name: 'experience'},
  {name: 'about'},
  {name: 'resume'},
]

// Button component
const Button = (props) => {

  function handleClick(e) {
    // e.preventDefault();
    let anchor = document.getElementById('anchor_' + props.text);
    if (anchor) {
      anchor.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  return (
    <button  //href={`#anchor_${props.text}`} 
        id={props.text} 
        className='buttonNav'
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
        <Button key={category.name} 
                text={category.name}/>
        )}
      </div>
    );
  }
}

export default NavButtons;
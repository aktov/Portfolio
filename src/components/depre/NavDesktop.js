import React from 'react';


//const buttonNames = ['about', 'experience', 'projects', 'resume']
// const links = {
//   about: '.',
//   experience: '.',
//   projects: '.',
//   resume: '.'
// }

const headerCategories = [
  {name: 'about', link: '.'},
  {name: 'experience', link: '.'},
  {name: 'projects', link: '.'},
  {name: 'resume', link: '.'},
]

const HeaderButton = (props) => {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <a href={props.link} className='button' onClick={handleClick}> {props.text} </a>
  );
}

class NavDesktop extends React.Component{
  render() {
    return (
      <div className='right' style={{ justifyContent: "space-around" }}>
        {headerCategories.map((category) => 
          <HeaderButton key={category.name} 
                        text={category.name} 
                        link={category.link}/>
        )}
      </div> 
    );
  }
}

export default NavDesktop;
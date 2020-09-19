import React from 'react';

import open from '../images/open.svg';
import github from '../images/GitHub-Mark-120px-plus.png';
import figma from '../images/figmaLogo_black.svg';

const Tags = (props) => {
  return (
    <div className='tags'>
      {props.names.map((name) =>
        <h6 key={name} style={{color: props.color}}> {name.toUpperCase()} </h6>
      )}
    </div>
  );
}


const Buttons = (props) => {
  return (
    <div className='buttons'>
      {props.props.github && <a href={props.props.github} target="_blank" rel="noopener noreferrer">
          <img src={github} alt='github' draggable='false' />     
          <span className='toolTip'> github </span>
      </a> }
      {props.props.figma && <a href={props.props.figma} target="_blank" rel="noopener noreferrer">
          <img src={figma} alt='figma' draggable='false' /> 
          <span className='toolTip'> figma </span> 
      </a> }
      {props.props.link && <a href={props.props.link} target="_blank" rel="noopener noreferrer">
          <img src={open} alt='open' draggable='false' /> 
          <span className='toolTip'> link </span>
      </a> }
    </div>
  );
}


class Card extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    console.log('hiii');
  }

  handleMouseLeave(e) {
    console.log('byeee');
  }


  render() {
    return (
      <div 
        className='card' 
        style={this.props.screenWidth >= 480 ? {margin: '1rem 1.5rem'} : {margin: '1rem 1rem'}}
        onMouseEnter={this.handleMouseEnter} 
        onMouseLeave={this.handleMouseLeave}
      >
        <div className='imageHolder'>
          {this.props.image && <img src={this.props.image} alt={this.props.title} draggable='false' />}  
        </div>

        <div className='text'>
          <h4 className='cardTitle'> {this.props.title.toUpperCase()} </h4>
          <p> {this.props.desc} </p>

          {this.props.tags && <Tags names={this.props.tags} color={this.props.color} />}
          <Buttons props={this.props} />
        </div>
      </div>
    );
  }

}

export default Card;
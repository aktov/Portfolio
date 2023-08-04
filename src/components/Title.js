import React from 'react';


class Title extends React.Component { 
  render() {
    return (
      <div className='title' style={this.props.screenWidth > 768 ? {height: '5rem'} : {height: '4.5rem'}}>
        <h3 className='outline' style={this.props.screenWidth > 768 ? null : {fontSize: '56px', top: '4px', left: '4px'}}> {this.props.title.toLowerCase()} </h3>
        <h3 className='fill' style={this.props.screenWidth > 768 ? null : {fontSize: '56px'}}> {this.props.title.toLowerCase()} </h3>
      </div>
    );
  }
}

export default Title;
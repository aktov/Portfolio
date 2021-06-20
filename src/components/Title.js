import React from 'react';


class Title extends React.Component { 
  render() {
    return (
      <div className='title' style={this.props.screenWidth > 1024 ? {height: '7rem'} : {height: '4.5rem'}}>
        <h3 className='outline' style={this.props.screenWidth > 1024 ? null : {fontSize: '48px'}}> {this.props.title.toUpperCase()} </h3>
        <h3 className='fill' style={this.props.screenWidth > 1024 ? null : {fontSize: '48px', top: '4px', left: '4px'}}> {this.props.title.toUpperCase()} </h3>
      </div>
    );
  }
}

export default Title;
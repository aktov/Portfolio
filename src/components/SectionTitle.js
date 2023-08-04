import React from 'react';


class SectionTitle extends React.Component { 
  render() {
    return (
      <div>
        <h3> {this.props.title} </h3>
        <div className='titleUnderscore' style={this.props.color ? {backgroundColor: this.props.color} : null}></div>
      </div>
    );
  }
}

export default SectionTitle;
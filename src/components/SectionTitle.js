import React from 'react';
import '../App.scss';

class SectionTitle extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.title.toUpperCase()} </h2>
        <div className='titleUnderscore'></div>
      </div>
    );
  }
}

export default SectionTitle;
import React from 'react';

class SectionTitle extends React.Component {
  render() {
    return (
      <div>
        <h3> {this.props.title.toUpperCase()} </h3>
        <div className='titleUnderscore'></div>
      </div>
    );
  }
}

export default SectionTitle;
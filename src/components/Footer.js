import React from 'react';


class Footer extends React.Component {

  render() {
    return (
      <div className={this.props.screenWidth <= 1024 ? 'footerM' : 'footer'} style={this.props.screenWidth < 1024 && this.props.color ? {backgroundColor: '#405E7A'} : null}>
        <h6> Designed and built by Alex Tov </h6>
      </div>
    );
  }
}

export default Footer;
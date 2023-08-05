import React from 'react';


class Footer extends React.Component {

  render() {
    return (
      <div className={this.props.screenWidth <= 768 ? 'footerM' : 'footer'} >
        <h6> Designed and built by Alex Tov </h6>
      </div>
    );
  }
}

export default Footer;
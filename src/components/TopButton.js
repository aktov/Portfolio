import React from 'react';
import ReactGA from 'react-ga';

import img_arrow from '../images/arrowUp.svg';

class TopButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }

    this.goToTop = this.goToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  goToTop(e) {
    if (document.getElementById('anchor_page') && this.state.visible) {
      document.getElementById('anchor_page').scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    ReactGA.event({
      category: 'Top Button Interaction',
      action: 'Interacted',
      label: 'User went back to top of page', 
      value: 1 // Optional numeric value
    });
  }

  handleScroll() {
    this.setState({visible: window.pageYOffset > window.innerHeight/1 ? true : false});
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  render() {
    return ( 
      <button 
        className={this.state.visible ? 'topButton' : 'hide topButton'}
        style={{
          backgroundColor: this.props.color,
          cursor: this.state.visible ? 'pointer' : 'default',
        }} 
        onClick={this.goToTop}
      > 
        <img src={img_arrow} alt='Back to top' />
      </button> 
    );
  };
}

export default TopButton;
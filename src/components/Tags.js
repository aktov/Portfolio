import React from 'react';

class Tags extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return ( 
      <div className='tags'>
        {this.props.names.map((name) =>
          <div className='tagWrapper' style={{borderColor: this.props.color}}>
            <h6 key={name} style={{color: this.props.color}}> {name} </h6>
          </div>
        )}
      </div>
    );
  };
}

export default Tags;
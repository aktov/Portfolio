import React from 'react';

class Tags extends React.Component {
  render() {
    return ( 
      <div className='tags'>
        {this.props.names.map((name) =>
          <div key={name} className='tagWrapper' style={{borderColor: this.props.color}}>
            <h6 style={{color: this.props.color}}> {name} </h6>
          </div>
        )}
      </div>
    );
  };
}

export default Tags;
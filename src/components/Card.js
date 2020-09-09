import React from 'react';


const Tags = (props) => {
  return (
    <div className='tags'>
      {props.names.map((name) =>
        <h6 key={name} style={{ color: props.color}}> {name.toUpperCase()} </h6>
      )}
    </div>
  );
}


class Card extends React.Component {
  constructor(props) {
    super(props)

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(e) {
  }

  render() {
    return (
      <div className='card'>
        <div className='imageHolder'>
          {this.props.image && <img src={this.props.image} alt={this.props.title} draggable='false' />}  
        </div>

        <div className='text'>
          <h4 className='cardTitle'> {this.props.title.toUpperCase()} </h4>
          <p> {this.props.desc} </p>

          {this.props.tags && <Tags names={this.props.tags} color={this.props.color} />}
        </div>
      </div>
    );
  }

}

export default Card;
import React from 'react';
import '../App.scss';


const Tags = (props) => {
  return (
    <div className='tags'>
      {props.names.map((name) =>
        <h5 style={{ color: props.color}}> {name.toUpperCase()} </h5>
      )}
    </div>
  );
}


class ProjectCard extends React.Component {
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
          {this.props.image && <img src={this.props.image} alt={this.props.title}/>}  
        </div>

        <div className='text'>
          <h4 className='cardTitle'> {this.props.title} </h4>
          <p> {this.props.desc} </p>

          {this.props.tags && <Tags names={this.props.tags} color={this.props.color} />}
        </div>
      </div>
    );
  }

}

export default ProjectCard;
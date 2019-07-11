import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="carousel">
        <div className="current-color">Current Color</div>
        {this.props.items.map( (item, key) => {
          return (
            <img key={key} className="carousel-image" src={item.imageURL}/>
          )
        })}
      </div>
    )
  }

}

export default Carousel;
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
        <div className="carousel-images">
          {this.props.items.map( (item, key) => {
            return (
              <div key={key} className="carousel-item">
                <img key={key} className="carousel-image" src={item.imageURL}/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

}

export default Carousel;
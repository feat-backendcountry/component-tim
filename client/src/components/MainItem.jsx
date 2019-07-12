import React from 'react';
import Carousel from './Carousel.jsx';

class MainItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="main-carousel">
        <div className="main-item">
          <img className="main-item-photo" src={this.props.items[0].imageURL} alt="Main Image Rendering" />
        </div>

        <Carousel items={this.props.items}/>

      </div>
    )
  }

}

export default MainItem;
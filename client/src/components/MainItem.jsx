import React from 'react';

class MainItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    // console.log(this.props.)
    return (
      <div>
        <img src={this.props.mainImage} alt="Main Image Rendering"/>
      </div>
    )
  }

}

export default MainItem;
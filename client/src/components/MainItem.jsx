import React from 'react';

class MainItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="main-item">
        <img className="main-item-photo" src={this.props.mainImage} alt="Main Image Rendering"/>
      </div>
    )
  }

}

export default MainItem;
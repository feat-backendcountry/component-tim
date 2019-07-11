import React from 'react';

class DetailImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="detail-images">
        <p className="detail-image-title">Detail Images</p>
        <img className="detail-image" src={this.props.items[0].imageURL} />
        {this.props.items[0].detailImages.map( (detailImage, key) => {
          return <img className="detail-image" src={detailImage} key={key}/>
        })}
      </div>
    )
  }

}

export default DetailImages;
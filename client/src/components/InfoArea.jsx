import React from 'react';

class InfoArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 'https://backcountry-items.s3-us-west-1.amazonaws.com/Fjallravenlogo.jpg'
    };
  }

  render() {
    return (
      <div className="info-area">
        <div className="item-logo">
          <img className="logo-image" src={this.state.image}/>
        </div>

        <div className="item-title">
          <h1 className="item-name">
            {this.props.items[0].name}
          </h1>
        </div>

        <div className="price-range">
          {this.props.items[0].priceRange}
        </div>

        <div className="free-shipping">
          <p className="free-2-day">Free 2-Day shipping on orders over $50.<span className="learn-more">Learn More</span></p>
        </div>

        {/* size + color */}
        <div className="size-color-selection">
          <div className="size-sizeChart">
            <strong className="size-select">Select a Size:</strong>
            <span className="size-chart">Size Chart</span>
          </div>

          <div className="size-selection">
            {/* add on change event handler */}
            {/* <select className="size-options">
              {this.props.items[0].sizes.map( (size, key) => {
                return <option key={key}>{size}</option>
              })}
            </select> */}
            <a className="size-options">
              Select Options
            </a>
            <ul>

            </ul>


          </div>
          <div className="color-selection">
            {/* add on change event handler */}
            <select className="color-options">
              {this.props.items.map( (item, key) => {
                return <option key={key}>{item.color}</option>
              })}
            </select>
          </div>
        </div>

        <div className="quantity">
          <strong>Quantity</strong>
          <input type="number"></input>
        </div>

        <div className="cart-wish">
          <button>Add To Cart</button>
          <button>Add To Wish List</button>
        </div>

        <div className="mini-reviews">
          Mini Reviews
        </div>
        <div className="mini-details">
          Mini Details
        </div>
        <div className="mini-specs">
          Mini Specs
        </div>

      </div>
    )
  }

}

export default InfoArea;
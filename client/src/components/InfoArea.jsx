import React from 'react';

class InfoArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="info-area">
        FJALL RAVEN LOGO IMAGE

        <div className="item-name">
          {this.props.items[0].name}
        </div>
        <div className="price-range">
          {this.props.items[0].priceRange}
        </div>
        <div className="free-shipping">
          <p>Free 2-Day shipping on orders over $50.<span className="learn-more"> Learn More</span></p>
        </div>

        <div className="size-color-selection">
          <strong>Select a Size:</strong>
          <span className="size-chart">Size Chart</span>
          <div className="size-selection">
            {/* add on change event handler */}
            <select className="size-options">
              {this.props.items[0].sizes.map( (size, key) => {
                return <option key={key}>{size}</option>
              })}
            </select>
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
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
            <a className="select-options">
              Select Options
            </a>
            <div className="size-dropdown">
              <ul className="size-dropdown-options">
                {this.props.items[0].sizes.map( (size, key) => {
                  return <li className={`size-option${key}`} key={key}>{size}</li>
                })}
              </ul>
            </div>
          </div>

          <div className="color-select">
            <strong>Select a Color:</strong>
          </div>
          <div className="color-selection">
            <a className="select-options">
              Select Options
            </a>

            <div className="color-dropdown">
              <ul className="color-dropdown-options">
                {this.props.items.map( (item, key) => {
                  return <li className={`color-option${key}`} key={key}>{item.color}</li>
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="quantity">
          <strong>Quantity</strong>
          <div className="quantity-box">
            <input type="number"></input>
          </div>
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
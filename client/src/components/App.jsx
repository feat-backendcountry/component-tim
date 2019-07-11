import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import MainItem from './MainItem.jsx';
import InfoArea from './InfoArea.jsx';
import DetailImages from './DetailImages.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemType: 'pants',
      items: []
    };
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    axios
      .all([axios.get(`/api/itemType?itemType=${this.state.itemType}`)])
      .then(axios.spread( ({data}) => {
        this.setState({
          items: data
        });
        console.log('data',this.state.items);
      }))
      .catch( (err) => {
        console.error('error getting items', err)
      })
  }

  render() {
    if (this.state.items.length === 0) {
      return (
        <div>
          APP IS LOADING
        </div>
      )
    } else {
      return (
        <div>
          <div className="back-to-results">
            Back to results / Men's clothing > Men's Pants > Men's Hiking & Climbing Pants
          </div>

          <div className="product-display">
            {/* detail images + main item section */}
            <section className="detail-main-section">
              <DetailImages items={this.state.items} />
              <MainItem items={this.state.items} />
            </section>

            {/* info area section */}
            <section className="info-area-section">
              <InfoArea items={this.state.items} />
            </section>
          </div>

        </div>
      );
    }

  }
};

export default App;

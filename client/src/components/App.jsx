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
    console.log('yo',this.state.items);
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
          <div className="detail-images-section">
            <DetailImages items={this.state.items} />
          </div>
          <div className="main-item-section">
            <MainItem mainImage={this.state.items[0].imageURL} />
          </div>
          <div className="info-area-section">
            <InfoArea items={this.state.items} />
          </div>
          <div className="carousel-section">
            <Carousel items={this.state.items} />
          </div>

        </div>
      );
    }

  }
};

export default App;

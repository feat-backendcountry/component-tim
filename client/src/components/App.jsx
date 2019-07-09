import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import MainItem from './MainItem.jsx';
import InfoSection from './InfoSection.jsx';
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

  getSingleItem() {

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
  // .then( ({data}) => {
      //   console.log('data', data);
      //   const items = data;
      //   this.setState({
      //     items
      //   });
      // })

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
          <div id="back-to-results">
            Back to results / Men's clothing > Men's Pants > Men's Hiking & Climbing Pants
          </div>
          <div id="detail-images">
            <DetailImages images={this.state.items} />
          </div>
          <div id="main-item">
            <MainItem mainImage={this.state.items[0].imageURL} />
          </div>
          <div id="info-section">
            <InfoSection items={this.state.items} />
          </div>
          <div id="carousel">
            <Carousel items={this.state.items} />
          </div>

        </div>
      );
    }

  }
};

export default App;

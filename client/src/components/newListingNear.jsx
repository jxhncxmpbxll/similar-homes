import React from 'react';
import {bed_icon, bath_icon, sqft_icon, price_down_arrow, price_up_arrow, heart_icon} from '../utils/svg-icons.jsx';
import styles from '../styles/similarHome.css';


class NewListingNear extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
    this.numDaysSincePublish.bind(this);
  }

    numDaysSincePublish(d1, d2) {
      const today = new Date();
      const pubDate = new Date(this.props.newListing.publishDate);

      let difference = Math.abs(today.getTime() - pubDate.getTime());
      return difference / (1000 * 60 * 60 * 24);
    };


  render() {
    const priceIncrease = this.props.newListing.priceChange === '+' ? price_up_arrow : null;
    const priceDecrease = this.props.newListing.priceChange === '-' ? price_down_arrow : null;

    const newFlag = this.numDaysSincePublish() <= 30 ? <span className={styles.new}>NEW</span> : null;

    return (
      <div className={styles.similarHome} style={this.props.slide}>
        <div className={styles.thumbnailContainer}>
          <div className={styles.heartContainer}>{heart_icon}</div>
          {newFlag}
          <img
            className={styles.thumbnail}
            src={this.props.newListing.img_url}/>
        </div>
        <div className={styles.priceRow}>
          <div className={styles.price}>{this.props.newListing.price}</div>
          <div className={styles.priceChange}>{priceDecrease}{priceIncrease}</div>
        </div>
        <div className={styles.bbs}>
          <div className={styles.beds}>{bed_icon}{this.props.newListing.bedrooms}
          </div>
          <div className={styles.baths}>{bath_icon}{this.props.newListing.bathrooms}</div>
          <div className={styles.sqft}>{sqft_icon}{this.props.newListing.sqft}</div>
        </div>
        <div>
          <div>{this.props.newListing.streetAddress}</div>
          <div className={styles.city}>{this.props.newListing.neighborhood + ', '
          + this.props.newListing.city + ', '
          + this.props.newListing.state}
          </div>
        </div>
      </div>
    )
  }
}

export default NewListingNear;
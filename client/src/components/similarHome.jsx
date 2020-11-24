import React from 'react';
import {bed_icon, bath_icon, sqft_icon, price_arrow_icon, heart_icon, right_arrow_icon, left_arrow_icon} from '../utils/svg-icons.jsx';
import styles from '../styles/similarHome.css';


class SimilarHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      sections: [styles.one, styles.two, styles.three, styles.four]
    }
  }

  render() {
    const section = this.props.section;
    const carousel = [styles.similarHome, this.state.sections[section]].join(' ');
    console.log(carousel);

    return (
      <div className={carousel}>
        <div className={styles.thumbnailContainer}>
          <div className={styles.heartContainer}>
            {heart_icon}
          </div>
          <img className={styles.thumbnail} src={this.props.similarHome.img_url}/>
        </div>
        <div className={styles.price}>{this.props.similarHome.price}</div>
        <div className={styles.bbs}>
          <div className={styles.beds}>{bed_icon}{this.props.similarHome.bedrooms}</div>
          <div className={styles.baths}>{bath_icon}{this.props.similarHome.bathrooms}</div>
          <div className={styles.sqft}>{sqft_icon}{this.props.similarHome.sqft}</div>
        </div>
        <div>
          <div>{this.props.similarHome.streetAddress}</div>
          <div className={styles.city}>{this.props.similarHome.neighborhood + ', '
          + this.props.similarHome.city + ', '
          + this.props.similarHome.state}
          </div>
        </div>
      </div>
    )
  }
}

export default SimilarHome;
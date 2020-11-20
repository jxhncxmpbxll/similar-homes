import React from 'react';
import {bed_icon, bath_icon, sqft_icon, price_arrow_icon, heart_icon, right_arrow_icon, left_arrow_icon} from '../utils/svg-icons.jsx';


class SimilarHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div className="similar-home">
        <div className="thumbnail-container">
          <div className="heart-container">
            {heart_icon}
          </div>
          <img className="sh-thumbnail" src={this.props.similarHome.img_url}/>
        </div>
        <div className="sh-price">{this.props.similarHome.price}</div>
        <div className="sh-bbs-row">
          <div className="sh-beds">{bed_icon}{this.props.similarHome.bedrooms}</div>
          <div className="sh-baths">{bath_icon}{this.props.similarHome.bathrooms}</div>
          <div className="sh-sqft">{sqft_icon}{this.props.similarHome.sqft}</div>
        </div>
        <div className="sh-address-line">
          <div className="sh-address">{this.props.similarHome.streetAddress}</div>
          <div className="sh-city">{this.props.similarHome.neighborhood + ', '
          + this.props.similarHome.city + ', '
          + this.props.similarHome.state}
          </div>
        </div>
      </div>
    )
  }
}

export default SimilarHome;
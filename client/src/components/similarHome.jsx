import React from 'react';

class SimilarHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div>
        <img className="sh-thumbnail" src={this.props.similarHome.img_url}/>
        <h4 className="sh-price">{this.props.similarHome.price}</h4>
        <p className="sh-beds">{this.props.similarHome.bedrooms}</p>
        <p className="sh-baths">{this.props.similarHome.bathrooms}</p>
        <p className="sh-sqft">{this.props.similarHome.sqft}</p>
        <p className="sh-address">{this.props.similarHome.streetAddress}</p>
        <p className="sh-city">{this.props.similarHome.neighborhood + ', '
        + this.props.similarHome.city + ', '
        + this.props.similarHome.state}
        </p>
      </div>
    )
  }
}

export default SimilarHome;
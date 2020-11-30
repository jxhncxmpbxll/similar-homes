import React, {createRef} from 'react';

import {left_arrow_icon, right_arrow_icon, sign_icon} from '../utils/svg-icons.jsx';
import styles from '../styles/Sliders.css';

import NewListingNear from './newListingNear.jsx';
import SeeMore from './seeMore.jsx'

class NewListingsNearSlider extends React.Component{
  constructor(props) {
    super(props);
    this.x = 0;
    this.state = {
      left: 0
    };
    this.slider = React.createRef();
  }

  goLeftPercent() {
    return {transform: `translateX(${this.state.left}px)`, transition: 'transform 0.45s ease 0s' };
  };

  goLeft() {
    if (this.x + 960 <= 0) {
      this.x += 960;
      this.setState({ left: this.x });
    }
  };

  goRight() {
    if (this.x - 960 >= -2880) {
      this.x += -960;
      this.setState({ left: this.x });
    }
  };

  onSlide() {
    this.x = this.slider.current.scrollLeft;
  }

  render() {
    const seeMoreStyle = [styles.seeMore, styles.similarHome, styles.thumbnailContainer].join(' ');

    return (
      <div className={styles.shContainer}>
        <div style={{visibility: `${this.x + 960 <= 0 ? 'visible' : 'hidden'}`}} className={styles.leftBtn} onClick={()=> this.goLeft()}>{left_arrow_icon}</div>
        <div ref={this.slider} className={styles.slider} onScroll={()=> this.onSlide()}>
          {this.props.newListings.map((home, index) => (
            <NewListingNear
              key={index}
              newListing={home}
              slide={this.goLeftPercent()}/>
          ))}
          <SeeMore
            slide={this.goLeftPercent()}
            key={this.props.newListings.length}
          />
        </div>
        <div style={{visibility: `${this.x - 960 >= -2880 ? 'visible' : 'hidden'}`}} className={styles.rightBtn} onClick={()=> this.goRight()}>{right_arrow_icon}</div>

      </div>
    )
  }
}

export default NewListingsNearSlider;
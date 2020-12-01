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
      arrowLeft: false,
      arrowRight: true
    };
    this.slider = React.createRef();
  }

  goLeft() {
    if (this.x - 960 >= 0) {
      this.slider.current.scrollTo(this.x - 960, 0);
    } else {
      this.slider.current.scrollTo(0, 0);
    }
  }

  goRight() {
    if (this.x + 960 <= 2871) {
      this.slider.current.scrollTo(this.x + 960, 0);
    } else {
      this.slider.current.scrollTo(2871, 0);
    }
  }

  onSlide() {
    this.x = this.slider.current.scrollLeft;
    this.setState({arrowLeft:  this.x > 0 ? true : false});
    this.setState({arrowRight: this.x < 2871 ? true : false});
  }

  render() {
    const seeMoreStyle = [styles.seeMore, styles.similarHome, styles.thumbnailContainer].join(' ');

    return (
      <div className={styles.shContainer}>
        <div style={{visibility: `${this.state.arrowLeft ? 'visible' : 'hidden'}`}} className={styles.leftBtn} onClick={()=> this.goLeft()}>{left_arrow_icon}</div>
        <div ref={this.slider} className={styles.slider} onScroll={()=> this.onSlide()}>
          {this.props.newListings.map((home, index) => (
            <NewListingNear
              key={index}
              newListing={home}/>
          ))}
          <SeeMore key={this.props.newListings.length} />
        </div>
        <div style={{visibility: `${this.state.arrowRight ? 'visible' : 'hidden'}`}} className={styles.rightBtn} onClick={()=> this.goRight()}>{right_arrow_icon}</div>

      </div>
    )
  }
}

export default NewListingsNearSlider;
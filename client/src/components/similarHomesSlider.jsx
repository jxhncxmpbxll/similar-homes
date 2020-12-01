import React, {createRef} from 'react';

import {left_arrow_icon, right_arrow_icon, sign_icon} from '../utils/svg-icons.jsx';
import styles from '../styles/Sliders.css';

import SimilarHome from './similarHome.jsx';
import SeeMore from './seeMore.jsx'


class SimilarHomesSlider extends React.Component {
  constructor(props) {
    super(props);
    this.x = 0;
    this.state = {
      left: 0,
      arrowLeft: false,
      arrowRight: true
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
    this.x + 960 <= 0 ? this.setState({arrowLeft: true}) :
    this.setState({arrowLeft : false});
    this.x - 960 >= -2880 ? this.setState({arrowRight : true}) :
    this.setState({arrowRight : false});
    console.log(this.state.arrowLeft);
  }

  render() {
    const seeMoreStyle = [styles.seeMore, styles.similarHome, styles.thumbnailContainer].join(' ');

    return (
      <div className={styles.shContainer}>
        <div style={{visibility: `${this.state.arrowLeft ? 'visible' : 'hidden'}`}} className={styles.leftBtn} onClick={()=> this.goLeft()}>{left_arrow_icon}</div>
        <div ref={this.slider} className={styles.slider} onScroll={()=> this.onSlide()}>
          {this.props.similarHomes.map((home, index) => (
            <SimilarHome
              key={index}
              similarHome={home}
              slide={this.goLeftPercent()}/>
          ))}
          <SeeMore
            slide={this.goLeftPercent()}
            key={this.props.similarHomes.length}
          />
        </div>
        <div style={{visibility: `${this.state.arrowRight ? 'visible' : 'hidden'}`}} className={styles.rightBtn} onClick={()=> this.goRight()}>{right_arrow_icon}</div>

      </div>
    )
  }
}

export default SimilarHomesSlider;
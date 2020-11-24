import React, {createRef} from 'react';

import {left_arrow_icon, right_arrow_icon} from '../utils/svg-icons.jsx';
import styles from '../styles/Sliders.css';

import SimilarHome from './similarHome.jsx';


class SimilarHomesSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [styles.one, styles.two, styles.three, styles.four],
      currentSection: 0
    }
  }

  switchSectionLeft() {
    if (this.state.currentSection > 0) {
      this.setState({currentSection: this.state.currentSection - 1})
    }
  }

  switchSectionRight() {
    if (this.state.currentSection < 3) {
      this.setState({currentSection: this.state.currentSection + 1})
    }
  }

  render() {
    const section = this.state.sections[this.state.currentSection];
    const seeMoreStyle = [styles.seeMore, section].join(' ');
    const seeMore = <div className={seeMoreStyle}>See More Homes For Sale In <p>CITY</p><button>Take a Look</button></div>;

    return (
      <div className={styles.shContainer}>
        <div className={styles.leftBtn} onClick={()=> this.switchSectionLeft()}>{left_arrow_icon}</div>
        <div className={styles.slider}>
          {this.props.similarHomes.map((home, index) => {
            if (index === this.props.similarHomes.length - 1) {
              return seeMore;
            }
            return <SimilarHome similarHome={home} key={index} section={this.state.currentSection}/>
          })}

        </div>
        <div className={styles.rightBtn} onClick={()=> this.switchSectionRight()}>{right_arrow_icon}</div>

      </div>
    )
  }
}

export default SimilarHomesSlider;
import React, {createRef} from 'react';

import {left_arrow_icon, right_arrow_icon, sign_icon} from '../utils/svg-icons.jsx';
import styles from '../styles/Sliders.css';

import SimilarHome from './similarHome.jsx';
import SeeMore from './seeMore.jsx'


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
    const seeMoreStyle = [styles.seeMore, section, styles.similarHome, styles.thumbnailContainer].join(' ');

    return (
      <div className={styles.shContainer}>
        <div className={styles.leftBtn} onClick={()=> this.switchSectionLeft()}>{left_arrow_icon}</div>
        <div className={styles.slider}>
          {this.props.similarHomes.map((home, index) =>
            <SimilarHome similarHome={home} key={index} section={this.state.currentSection}/>
          )}
          <SeeMore
            section={this.state.sections[this.state.currentSection]}
            key={this.props.similarHomes.length}
          />
        </div>
        <div className={styles.rightBtn} onClick={()=> this.switchSectionRight()}>{right_arrow_icon}</div>

      </div>
    )
  }
}

export default SimilarHomesSlider;
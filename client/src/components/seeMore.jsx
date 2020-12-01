import React, {createRef} from 'react';

import {sign_icon} from '../utils/svg-icons.jsx';

import styles from '../styles/seeMore.css';

const SeeMore = (props) => {

  const section = props.section;
  const seeMoreStyle = [styles.seeMore, styles.similarHome, styles.thumbnailContainer].join(' ');

  return (
    <div className={seeMoreStyle}>
      <div className={styles.signContainer}>{sign_icon}</div>
      <div className={styles.regular}>See More Homes For Sale In</div>
      <div className={styles.bold}>Winterfell</div>
      <button className={styles.takeALookBtn}>Take a Look</button>
    </div>
  )
}

export default SeeMore;
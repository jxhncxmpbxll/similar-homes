import React from 'react';
import SimilarHome from './similarHome.jsx'
import {left_arrow_icon, right_arrow_icon} from '../utils/svg-icons.jsx'

const SimilarHomesRow = (props) => {
  return (
    <div className="sh-slider">
      <div className="left-btn-container">{left_arrow_icon}</div>

      {props.similarHomes.map((home, index) => <SimilarHome similarHome={home} key={index} />)}
      <div className="right-btn-container">{right_arrow_icon}</div>

    </div>
  )
}

export default SimilarHomesRow;
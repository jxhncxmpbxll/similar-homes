import React from 'react';
import SimilarHome from './similarHome.jsx'

const SimilarHomesRow = (props) => {
  return (
    <div className="sh-slider">
    {props.similarHomes.map((home, index) => <SimilarHome similarHome={home} key={index} />)}
    </div>
  )
}

export default SimilarHomesRow;
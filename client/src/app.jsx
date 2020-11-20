import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SimilarHomesSlider from './components/similarHomesSlider.jsx'
import NewListingsNearSlider from './components/newListingsNearSlider.jsx'
import {left_arrow_icon, right_arrow_icon} from './utils/svg-icons.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      similarHomes: []
    }
  }

  componentDidMount() {
    axios.get('/api/similar-homes')
    .then(data => data.data)
    .then(data => {
      this.setState({similarHomes: data});
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="bucket">

        <div className="left-btn-container">{left_arrow_icon}</div>
        <div className="sh-container">
        <h3>Similar Homes You May Like</h3>
          <div className="pics">
          <SimilarHomesSlider  similarHomes={this.state.similarHomes}/>
          </div>
          <div>
          <h3>New Listings Near Address</h3>
          <NewListingsNearSlider/>
        </div>
        </div>
        <div className="right-btn-container">{right_arrow_icon}</div>

      </div>
    )
  }
  // ============================  position: relative
  // =========================  display:flex
  // 1   34567865435678   4
  // =========================
//  p: abs // flex: 1
  // ============================
}

ReactDOM.render(<App />, document.getElementById('app'));



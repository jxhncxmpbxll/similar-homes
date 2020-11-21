import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SimilarHomesSlider from './components/similarHomesSlider.jsx'
import NewListingsNearSlider from './components/newListingsNearSlider.jsx'
// import {left_arrow_icon, right_arrow_icon} from './utils/svg-icons.jsx'

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
      <div className="sh-main-container">
        <h3 className="titles">Similar Homes You May Like</h3>
        <SimilarHomesSlider similarHomes={this.state.similarHomes}/>

        <h3 className="titles">New Listings Near Address</h3>
        <NewListingsNearSlider/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



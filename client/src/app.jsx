import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SimilarHomesRow from './components/similarHomesRow.jsx'
import NewListingsNearRow from './components/newListingsNearRow.jsx'

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
      <div>
        <div>
          <h3>Similar Homes You May Like</h3>
          <SimilarHomesRow similarHomes={this.state.similarHomes}/>
        </div>
        <div>
          <h3>New Listings Near Address</h3>
          <NewListingsNearRow/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import rdata from './data.json';
import ImageList from './ImageList';

class App extends React.Component {

  state = {
    data: rdata,
  }


  render() {
    return(
      <div>
        <ImageList images={this.state.data} />
      </div>
    )
  }
}

export default App;
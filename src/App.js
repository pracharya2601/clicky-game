
import React from 'react';
import rdata from './data.json';


import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: rdata,
      score: 0,
      topScore: 0
    }
  }

  checkImage = (event) => {
    var imageId = event.target.getAttribute('data-id');
    if (this.state.data[imageId-1].clicked==false){
      let data = this.state.data.map(item=> {
        if(item.id==imageId) item.clicked=true;
        return item;
      })
      data.sort(() => Math.random()-0.5);
      let score = this.state.score + 1;
      this.setState({
        data,score
      })
    }else {
      this.setState({
        topScore: this.state.score,
        score: 0
      })
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Score: {this.state.score} | Top Score: {this.state.topScore}</h1>

        <div className="imageContainer">
          {this.state.data.map(item => 
          <img
            key={item.id}
            data-id={item.id}
            onClick={this.checkImage}
            src={item.image}
            />
          )}
        </div>
      </div>
    )
  }
}

export default App;
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      FullName: "SAID",
      Bio: "BLACK LIVES MATTER",
      Img: "https://t4.ftcdn.net/jpg/05/04/34/37/360_F_504343758_se6qzK6lJ2FHybEB3f4Ol0ZgIstHeWoR.jpg",
      Profession: "STUDENT",
      Show: false
    }
  }
  HideProfile=()=>{
    this.setState({Show:!this.state.Show})

  }
  render() {
    return (
      <div>
        <button onClick={this.HideProfile}>{this.state.Show == true ? "Hide" : "Show"} Profile</button>
        {this.state.Show == true ? <div>
          <h1>{this.state.FullName}</h1>
          <h4>{this.state.Bio}</h4>
          <img src={this.state.Img} />
          <p>{this.state.Profession}</p>
        </div> : null}
      </div>
    )
  }
}




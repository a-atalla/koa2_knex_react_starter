import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './component/Sidebar'

class App extends Component {
  componentDidMount = () => {
    axios.get('/api/v1/movies')
      .then((result) => {
        console.log(result)
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  render() {
    return (
      <Sidebar />
    )
  }
}

export default App;

import React, { Component } from "react"
import container from "../../components/reviews"

// componenets import
import Filters from "../filters"
import Header from "../header/Header"
import Reviews from "../reviews/Reviews"

class App extends Component {
  componentDidMount(){
    this.props.fetchLocation();
  }
  render() {
    return(
    <div className="wrapper">
     {
       this.props.loading ?
        (<div className="overlay">
           <div className="loader"><p>loading ...</p></div>
        </div>) : ''
     }
      <Header/>
      <Filters/>
      <Reviews/>
    </div>
    )
  }
}

export default container(App)
  
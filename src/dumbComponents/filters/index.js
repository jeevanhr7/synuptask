import React, { Component } from "react"
import container from "../../components/locations"

import Filter from './filter'
// images import
import totalInteraction_img from "../../images/interactions-all.svg"
import newInteraction_img from "../../images/interactions-new.svg"
import postiveInteraction_img from "../../images/interactions-positive.svg"
import negativeInteraction_img from "../../images/interactions-negative.svg"

class Filters extends Component {
  componentDidMount(){
  }
  render() {
    return(
      <div className="container my-4">
        <ul className="nav bg-light nav-fill">  
          <Filter name="Total Interaction"/>
          <Filter name="New Interaction"/>
          <Filter name="Positive Interaction"/>
          <Filter name="Negative Interaction"/>
        </ul>
      </div>
    )
  }
}
export default container(Filters)
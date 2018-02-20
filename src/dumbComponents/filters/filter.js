import React, { Component } from "react"
import container from "../../components/reviews"

// images import
import totalInteraction_img from "../../images/interactions-all.svg"
import newInteraction_img from "../../images/interactions-new.svg"
import postiveInteraction_img from "../../images/interactions-positive.svg"
import negativeInteraction_img from "../../images/interactions-negative.svg"

class Filter extends Component {
  componentDidMount(){
  }

  setfilter(filter) {
    console.log("clicked")
    this.props.setBaseFilter(filter)
  }

  render() {
    const { name } = this.props
    const img = {
      'Total Interaction': totalInteraction_img,
      'New Interaction': newInteraction_img,
      'Positive Interaction': postiveInteraction_img,
      'Negative Interaction': negativeInteraction_img,
    }
    return(
        <li className="nav-item border " onClick={ () => this.setfilter(name) }>
            <a className="nav-link  py-3 active" href="#">
              <div className="media text-left">
                <img className="mr-3" src={img[name]} >
                </img>
                <div className="media-body">
                  <h5 className="m-0 text-blue">330</h5>
                  {name}
                </div>
              </div>
            </a>
        </li>      
    )
  }
}
export default container(Filter)
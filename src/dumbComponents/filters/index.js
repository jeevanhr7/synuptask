import React, { Component } from "react"
import container from "../../components/reviews"

import {filters} from '../../consts'

// images import
import totalInteraction_img from "../../images/interactions-all.svg"
import newInteraction_img from "../../images/interactions-new.svg"
import postiveInteraction_img from "../../images/interactions-positive.svg"
import negativeInteraction_img from "../../images/interactions-negative.svg"

class Filters extends Component {
  componentDidMount(){
  }

  state = {
    'activeFilter': "Total Interaction"
  }

  setfilter(filter) {
    this.props.setBaseFilter(filter);
    this.setState({'activeFilter': filter })
  }

  render() {
    const img = {
      'Total Interaction': totalInteraction_img,
      'New Interaction': newInteraction_img,
      'Positive Interaction': postiveInteraction_img,
      'Negative Interaction': negativeInteraction_img,
    }

    return(
      <div className="container my-4">
        <ul className="nav bg-light nav-fill"> 
        { filters.map((name, index) => {
            return(
              <li key={index} className="nav-item border " onClick={ () => this.setfilter(name) }>
                <a className={this.state.activeFilter === name? 'nav-link  py-3 active':'nav-link  py-3' }>
                  <div className="media text-left">
                    <img alt="" className="mr-3" src={img[name]} >
                    </img>
                    <div className="media-body">
                      <h5 className="m-0 text-blue">330</h5>
                      {name}
                    </div>
                  </div>
                </a>
              </li>
              )
          })
        }
        </ul>
      </div>
    )
  }
}
export default container(Filters)
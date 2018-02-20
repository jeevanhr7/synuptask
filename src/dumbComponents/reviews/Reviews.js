import React, { Component } from "react"
import container from "../../components/reviews"

import ReviewCard from '../reviewCard/ReviewCard'

class Reviews extends Component {
  componentDidMount(){
  }
  render() {
    console.log(this.props)
    const { platforms, data } = this.props
    return(
      <div className="container mb-5">
        <div className="card">
          <div className="card-header">
            <form className="form-inline">
              <label for="inlineFormInputName2" className="text-blue">All Interaction </label>
              <span className="mx-2 text-muted">in</span>
              <div className="custom-select inline-slect-box">
                <select>
                  <option>the past month</option>
                  <option>the past week</option>
                </select>
               </div>
              <span className="mx-2 text-muted">from</span>
              <div className="custom-select inline-slect-box">
                <select>
                  {
                   platforms.map((platform)=> {
                      return (<option> {platform}</option>)
                   })
                  }
                  <option>All platforms</option>
                </select>
              </div>
            </form>
          </div>
          <ReviewCard/>
          <ReviewCard/>
        </div>
      </div>
    )
  }
}
export default container(Reviews)
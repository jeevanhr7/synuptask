import React, { Component } from "react"
import container from "../../components/reviews"

import ReviewCard from '../reviewCard/ReviewCard'

class Reviews extends Component {
  componentDidMount(){
  }

  handlechange(event) {
    this.props.setplatformfilter(event.target.value)
  }

  handleDateChange(event) {
    this.props.setdatefilter(event.target.value)
  }

  render() {
    const { platforms, data, selectedLocationId } = this.props
    return(
      <div className="container mb-5">
        <div className="card">
          <div className="card-header">
            <form className="form-inline">
              <label className="text-blue">All Interaction </label>
              <span className="mx-2 text-muted">in</span>
              <div className="custom-select inline-slect-box">
                <select onChange={this.handleDateChange.bind(this)}>
                  <option>all</option>
                  <option>Past Month</option>
                  <option>Past 6 Months</option>
                  <option>Past Year</option>
                </select>
               </div>
              <span className="mx-2 text-muted">from</span>
              <div className="custom-select inline-slect-box">
                <select onChange={this.handlechange.bind(this)}>
                  {
                   platforms.map((platform, index)=> {
                      return (<option key={index}> {platform}</option>)
                   })
                  }
                  <option>All platforms</option>
                </select>
              </div>
            </form>
          </div>
          {
            selectedLocationId ?
            "":
            "Please Select a Location"
          }
          {
            selectedLocationId && data.length === 0 ?
              "Data not available for selected Filters.":
              ""
          }
          {
            data.map((review, index) => {
              return (
                <ReviewCard 
                  key={index}
                  selectedLocationId={selectedLocationId}
                  review={review}
                />
              )    
            })
          }
        </div>
      </div>
    )
  }
}
export default container(Reviews)
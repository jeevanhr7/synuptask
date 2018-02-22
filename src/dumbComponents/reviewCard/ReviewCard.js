import React, { Component } from "react"
import container from "../../components/locations"
import StarRatingComponent from 'react-star-rating-component'
import moment from 'moment'

// images import
import fb_img from "../../images/facebook.com.png"
import yelp_img  from "../../images/yelp.com.png"
import google_img  from "../../images/maps.google.com.png"
import yellowpages_img from "../../images/yellowpages.png"
import merchantcircle_img from "../../images/merchantcircle.png"
import n49_img from "../../images/n49.png"
import citysquare_img from "../../images/citysquare.png"

class ReviewCard extends Component {

  state = {
      respondClicked : false,
      response_text: ''
  }

  submitClicked() {
    
    const { id, platform } = this.props.review
    const { selectedLocationId } = this.props
    const { response_text } = this.state

    this.props.respondToReview(selectedLocationId, id, response_text, platform );

    this.setState({
      response_text: ''
    })
  }

  cancelClicked() {
    this.setState({ respondClicked: false })
  }

  textchange(event) {
    this.setState({
      response_text: event.target.value
    })
  }

  render() {
    const img = {
      'facebook.com': fb_img,
      'maps.google.com': google_img,
      'yelp.com': yelp_img,
      'yellowpages.com': yellowpages_img,
      'merchantcircle.com': merchantcircle_img,
      'n49.com' : n49_img,
      'citysquares.com': citysquare_img
    }
    const { author_name, comment, platform, date, rating, responses } = this.props.review
    // const { responses } = this.state 
    
    return(
      <div className="card-body">
         <div className="bg-light border rounded p-3 mb-3">
             <div className="row">
                 <div className="col-md-3 border-right text-muted">
                     <div className="media ">
                         <img className="mr-3 rounded-circle" width="90px" src="https://randomuser.me/api/portraits/women/50.jpg" alt="Generi image"/>
                         <div className="media-body">
                             <h6>{author_name}</h6>
                             <StarRatingComponent 
                                name="rating" 
                                editing={false}
                                starCount={5}
                                value={rating}
                              />
                         </div>
                     </div>
                          rated on {moment(date).format('Do MMMM YYYY')}
                     <div className="inline-block">
                         <img alt="platform image" src={img[platform]} width="16px" className="mr-3"/><small>{platform}</small>
                     </div>
                 </div>
                 <div className="col-md-9">
                     <p className="text-muted">{comment}</p>
                     {
                      responses.length>0?
                        <p> <b>You Replied </b></p>
                        : ''
                     }
                     { responses.map((response, index) => {
                          return(
                            <div key={index}>
                            <p className="text-muted"> {response.content}</p>
                            </div>
                          )
                        })
                     }

                     { this.state.respondClicked?
                        '':
                        <button className=" button-respond" onClick={()=>{this.setState({respondClicked: true})}}> RESPOND</button>
                     }
                     { this.state.respondClicked?
                         (<div>
                            <textarea
                              value={this.state.response_text}
                              onChange={this.textchange.bind(this)}
                              placeholder="Start typing here...."
                              rows="3"
                              cols="80"
                              type="text">
                            </textarea>
                            <button onClick={() => this.submitClicked() } className=" button-respond"> SUBMIT</button>
                            <button onClick={() => this.cancelClicked() } className="btn-cancel"> CANCEL</button>
                        </div>)
                        :''
                      }
                 </div>
             </div>
         </div>
      </div>
    )
  }
}
export default container(ReviewCard)
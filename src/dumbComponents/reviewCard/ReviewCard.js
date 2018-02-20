import React, { Component } from "react"
import container from "../../components/locations"

// images import
import fb_img from "../../images/facebook.com.png"
import yelp_img  from "../../images/yelp.com.png"

class ReviewCard extends Component {
  componentDidMount(){
  }
  render() {
    return(
      <div className="card-body">
         <div className="bg-light border rounded p-3 mb-3">
             <div className="row">
                 <div className="col-md-3 border-right text-muted">
                     <div className="media ">
                         <img className="mr-3 rounded-circle" width="90px" src="https://randomuser.me/api/portraits/women/50.jpg" alt="Generi image"/>
                         <div className="media-body">
                             <h6>Ras sit a</h6>
                         </div>
                     </div>
                          rated on 7th Jan
                     <div className="inline-block">
                         <img src={yelp_img} width="16px" className="mr-3"/><small>Yelp</small>
                     </div>
                 </div>
                 <div className="col-md-9">
                     <p className="text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                     <button className=" button-respond"> RESPOND</button>
                 </div>
             </div>
         </div>
      </div>
    )
  }
}
export default container(ReviewCard)
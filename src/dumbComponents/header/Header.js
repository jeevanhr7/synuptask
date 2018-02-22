import React, { Component } from "react"
import container from "../../components/locations"
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Header extends Component {

  componentWillMount() {
  }

  state = {
    selectedOption: '',
  }

  handleChange = (selectedOption) => {
    if(selectedOption) {
      this.setState({ selectedOption });
      this.props.setLocation(selectedOption.id)
    }
  }

  componentWillReceiveProps(nextprops) {
    if (this.props.locationId !== nextprops.locationId) {
      this.props.fetchReviews(nextprops.locationId);  
    }
  }

  componentDidMount(){
  }

  render() {
  	const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    const options = this.props.data

    return(
    <div>
      <nav className="navbar navbar-expand-lg " style={{color: "#fff"}}>
	        <a className="navbar-brand">Synup</a>
	        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	          <span className="navbar-toggler-icon"></span>
	        </button>

	        <div className="collapse navbar-collapse" id="navbarSupportedContent">
	          <form className="form-inline">
  			      <Select
                style={{width:'300px'}}
  			        name="form-field-name"
  			        value={value}
  			        onChange={this.handleChange}
  			        options={options}
  			      />
			     </form>
			   </div>
		  </nav>	
    </div>
    )
  }
}
export default container(Header)

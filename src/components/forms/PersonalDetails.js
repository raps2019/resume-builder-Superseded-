import React, { Component } from 'react'

//TODO - Change to functional component

class PersonalDetails extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    return (
      <div>
        <h3 className="input-category-heading">Personal Details</h3>
        <div className="personal-details-input-container">
          <div>
            <label>First Name</label>
            <input 
              type='text' 
              value={this.props.firstName} 
              onChange={ (e) => this.props.handlePersonalDetailsChange('firstName',e)}>
            </input>
          </div>
          <div>
            <label>Last Name</label>
            <input 
              type='text' 
              value={this.props.lastName} 
              onChange={ (e) => this.props.handlePersonalDetailsChange('lastName',e)}></input>
          </div>
          <div>
            <label>Job Title</label>
            <input 
              type='text' 
              value={this.props.personalDetails.jobTitle} 
              onChange={ (e) => this.props.handlePersonalDetailsChange('jobTitle',e)}>
            </input>
          </div>
          <div>
            <label>Email</label>
            <input 
              type='email' 
              value={this.props.email} 
              onChange={ (e) => this.props.handlePersonalDetailsChange('email',e)}>
            </input>
          </div>
          <div>
            <label>Phone</label>
            <input 
              type='tel' 
              value={this.props.phone} 
              onChange={ (e) => this.props.handlePersonalDetailsChange('phone',e)}>
            </input>
          </div>
          <div>
            <label>Country</label>
            <input 
              type='text' 
              value={this.props.country} 
              onChange={ (e) => this.props.handlePersonalDetailsChange('country',e)}>
            </input>
          </div>
          <div>
            <label>City</label>
            <input 
              type='text' 
              value={this.props.city} 
              onChange={ (e) => this.props.handlePersonalDetailsChange('city',e)}>
            </input>
          </div>
          <div>
            <label>Address</label>
            <input 
              type='text' 
              value={this.props.address} 
              onChange={ (e) => this.props.handlePersonalDetailsChange('address',e)}>
            </input>
          </div>
          <div>
            <label>Postal Code</label>
            <input 
              type='text' 
              value={this.props.postalCode} 
              onChange={ (e) => this.props.handlePersonalDetailsChange('postalCode',e)}>
            </input>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonalDetails

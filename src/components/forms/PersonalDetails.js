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
      <div className='container__category container__category--personal'>
        <h1 className="heading1">Personal Details</h1>
        <form className="grid grid--form">
          <div className='container__input'>
            <input 
              type='text' 
              className='input'
              value={this.props.firstName} 
              onChange={(e) => this.props.handlePersonalDetailsChange('firstName',e)}
              required>
            </input>
            <label className='input__label'>First Name</label>
          </div>
          <div className='container__input'>
            <input 
              type='text' 
              className='input'
              value={this.props.lastName} 
              onChange={(e) => this.props.handlePersonalDetailsChange('lastName',e)}
              required>
              </input>
            <label className='input__label'>Last Name</label>
          </div>
          <div className='container__input'>
            <input 
              type='text' 
              className='input'
              value={this.props.personalDetails.jobTitle} 
              onChange={(e) => this.props.handlePersonalDetailsChange('jobTitle',e)}
              required>
            </input>
            <label className='input__label'>Job Title</label>
          </div>
          <div className='container__input'>
            <input 
              type='email' 
              className='input'
              value={this.props.email} 
              onChange={(e) => this.props.handlePersonalDetailsChange('email',e)}
              required>
            </input>
            <label className='input__label'>Email</label>
          </div>
          <div className='container__input'>
            <input 
              type='tel' 
              className='input'
              value={this.props.phone} 
              onChange={(e) => this.props.handlePersonalDetailsChange('phone',e)}
              required>
            </input>
            <label className='input__label'>Phone</label>
          </div>
          <div className='container__input'>
            <input 
              type='text' 
              className='input'
              value={this.props.country} 
              onChange={(e) => this.props.handlePersonalDetailsChange('country',e)}
              required>
            </input>
            <label className='input__label'>Country</label>
          </div>
          <div className='container__input'>
            <input 
              type='text' 
              className='input'
              value={this.props.city} 
              onChange={(e) => this.props.handlePersonalDetailsChange('city',e)}
              required>
            </input>
            <label className='input__label'>City</label>
          </div>
          <div className='container__input'>
            <input 
              type='text' 
              className='input'
              value={this.props.address} 
              onChange={(e) => this.props.handlePersonalDetailsChange('address',e)}
              required>
            </input>
            <label className='input__label'>Address</label>
          </div>
          <div className='container__input'>
            <input 
              type='text' 
              className='input'
              value={this.props.postalCode} 
              onChange={(e) => this.props.handlePersonalDetailsChange('postalCode',e)}
              required>
            </input>
            <label className='input__label'>Postal Code</label>
          </div>
        </form>
      </div>
    )
  }
}

export default PersonalDetails

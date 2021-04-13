import React, { Component } from 'react'
import PersonalDetails from './PersonalDetails'
import WorkExperience from './WorkExperience'

class FormsContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div className="forms-container">
        <PersonalDetails 
          personalDetails={this.props.personalDetails}         
          handlePersonalDetailsChange={this.props.handlePersonalDetailsChange} 
        />
        <WorkExperience 
          workExperience={this.props.workExperience}
          handleAddWorkExperience={this.props.handleAddWorkExperience} 
          handleWorkExperienceChange={this.props.handleWorkExperienceChange}
          handleDeleteWorkExperience={this.props.handleDeleteWorkExperience}
        />
      </div>
    )
  }
}

export default FormsContainer

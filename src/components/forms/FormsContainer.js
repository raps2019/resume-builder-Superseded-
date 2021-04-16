import React, { Component } from 'react'
import Education from './Education'
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
          handleShowWorkExperience={this.props.handleShowWorkExperience}
        />
        <Education 
          education={this.props.education}
          handleEducationChange={this.props.handleEducationChange}
          handleAddEducation={this.props.handleAddEducation}
          handleDeleteEducation={this.props.handleDeleteEducation}
          handleShowEducation={this.props.handleShowEducation}
        />
      </div>
    )
  }
}

export default FormsContainer

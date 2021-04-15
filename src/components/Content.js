import React, { Component } from 'react'
import FormContainer from './forms/FormsContainer'
import PreviewContainer from './preview/PreviewContainer'
import './styles.css'

class Content extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       personalDetails: {
         jobTitle: '',
         firstName: '',
         lastName: '',
         email: '',
         phone: '',
         country: '',
         city: '',
         address: '',
         postalCode: '',
       },
       workExperience: [],  
      }
    }
  

  handlePersonalDetailsChange = (input, event) => {
    const personalDetailsCopy =  this.state.personalDetails;
    personalDetailsCopy[input] = event.target.value
    this.setState({
     personalDetails: personalDetailsCopy,
    }, () => console.log(this.state.personalDetails))
  }

  handleWorkExperienceChange = (input, id, event) => {
    const workExperienceCopy = this.state.workExperience;
    const workExperienceItem = workExperienceCopy.find((item) => item.id === id);
    workExperienceItem[input] = event.target.value;
    this.setState({
      workExperience: workExperienceCopy,
    })
  }

  handleAddWorkExperience = (e) => {
    this.setState((prevState) => ({
      workExperience: [{
        id: Date.now().toString(),
        show: true,
        jobTitle: '',
        employer: '',
        startDate: '',
        endDate: '',
        city:'',
        country:'',
        description: '',
      }, ...prevState.workExperience],
    }))
  }

  handleDeleteWorkExperience = (id) => {
    const workExperienceCopy = this.state.workExperience;
    const filteredWorkExperience = workExperienceCopy.filter((item) => item.id !== id);
    this.setState({
      workExperience: filteredWorkExperience,
    })
  }

  handleShowWorkExperience = (id) => {
    const workExperienceCopy = this.state.workExperience;
    const workExperienceItem = workExperienceCopy.find((item) => item.id === id)
    workExperienceItem.show = !workExperienceItem.show
    this.setState({
      workExperience: workExperienceCopy,
    }, () => console.log(this.state.workExperience))
  }
  
  render() {
    return (
      <div className="content-container">
        <FormContainer 
          handlePersonalDetailsChange={this.handlePersonalDetailsChange} 
          personalDetails={this.state.personalDetails}
          workExperience={this.state.workExperience}
          handleAddWorkExperience={this.handleAddWorkExperience}
          handleWorkExperienceChange={this.handleWorkExperienceChange}
          handleDeleteWorkExperience={this.handleDeleteWorkExperience}
          handleShowWorkExperience={this.handleShowWorkExperience}
        />
        <PreviewContainer personalDetails={this.state.personalDetails} />
      </div>
    )
  }
}

export default Content

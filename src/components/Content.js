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
       workExperience: [
         {
            id: Date.now().toString(),
            jobTitle: '',
            employer: '',
            startDate: '',
            endDate: '',
            city:'',
            description: '',
          },
        ],  
      }
    }
  

  handlePersonalDetailsChange = (input, event) => {
    const personalDetailsCopy =  this.state.personalDetails;
    personalDetailsCopy[input] = event.target.value
    this.setState({
     personalDetails: personalDetailsCopy,
    }, () => console.log(this.state.personalDetails))
  }

  handleExperienceDetailsChange = () => {
    //TO DO
  }

  handleAddWorkExperience = (e) => {
    this.setState((prevState) => ({
      workExperience: [...prevState.workExperience, {
        id: Date.now().toString(),
        jobTitle: '',
        employer: '',
        startDate: '',
        endDate: '',
        city:'',
        description: '',
      }],
    }))
  }

  handleDeleteExperienceDetails = () => {
    //TO DO
  }


  
  render() {
    return (
      <div className="content-container">
        <FormContainer 
          handlePersonalDetailsChange={this.handlePersonalDetailsChange} 
          personalDetails={this.state.personalDetails}
          workExperience={this.state.workExperience}
          handleAddWorkExperience={this.handleAddWorkExperience}
        />
        <PreviewContainer personalDetails={this.state.personalDetails} />
      </div>
    )
  }
}

export default Content

import React, { Component } from 'react'

class WorkExperience extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
  
  const {workExperience, handleAddWorkExperience} = this.props;

  console.log(workExperience)

  const workExperienceList = workExperience.map((item) => 

    <div key={item.id}>
      <div>
        <label>Job Title</label>
        <input
          type='text'
          value={item.jobTitle}>
        </input>
      </div>
      <div>
        <label>Employer</label>
        <input
          type='text'
          value={item.employer}>
        </input>
      </div>
      <div>
        <label>Start Date</label>
        <input
          type='date'
          value={item.startDate}>
        </input>
      </div>
      <div>
        <label>End Date</label>
        <input
          type='date'
          value={item.endDate}>
        </input>
      </div>
      <div>
        <label>City</label>
        <input
          type='text'
          value={item.city}>
        </input>
      </div>
      <div>
        <label>Description</label>
        <textarea
          type='text'
          value={item.description}>
        </textarea>
      </div>
    </div>
  )

    return (
      <div>
        <div>
         <button onClick={handleAddWorkExperience}>Add Work Experience</button>
        </div>
        {workExperienceList}
      </div>
    )
  }
}

export default WorkExperience

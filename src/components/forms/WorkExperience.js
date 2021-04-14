import React, { Component } from 'react'

class WorkExperience extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
  
  const {
    workExperience, 
    handleAddWorkExperience, 
    handleWorkExperienceChange,
    handleDeleteWorkExperience,
  } = this.props;

  console.log(workExperience)

  const workExperienceList = workExperience.map((item) => 

    <div key={item.id} className='work-experience-item-container'>
      {(item.employer && item.jobTitle ? <h4 className='job-title-heading'>{item.employer} - {item.jobTitle}</h4> : null)}
      <div className='work-experience-item-input-container'> 
        <div>
          <label>Job Title</label>
          <input
            type='text'
            value={item.jobTitle}
            onChange={(e) => handleWorkExperienceChange('jobTitle', item.id, e)}>
          </input>
        </div>
        <div>
          <label>Employer</label>
          <input
            type='text'
            value={item.employer}
            onChange={(e) => handleWorkExperienceChange('employer', item.id, e)}>
          </input>
        </div>
        <div>
          <label>Start Date</label>
          <input
            type='date'
            value={item.startDate}
            onChange={(e) => handleWorkExperienceChange('startDate', item.id, e)}>
          </input>
        </div>
        <div>
          <label>End Date</label>
          <input
            type='date'
            value={item.endDate}
            onChange={(e) => handleWorkExperienceChange('endDate', item.id, e)}>
          </input>
        </div>
        <div>
          <label>City</label>
          <input
            type='text'
            value={item.city}
            onChange={(e) => handleWorkExperienceChange('city', item.id, e)}>
          </input>
        </div>
        <div>
          <label>Country</label>
          <input
            type='text'
            value={item.country}
            onChange={(e) => handleWorkExperienceChange('country', item.id, e)}>
          </input>
        </div>
        <div className="description-input">
          <label>Description</label>
          <textarea
            type='text'
            value={item.description}
            onChange={(e) => handleWorkExperienceChange('description', item.id, e)}>
          </textarea>
        </div>
        <button onClick={() => handleDeleteWorkExperience(item.id)}>Delete</button>
      </div>
    </div>
  )

    return (
      <div>
        <h3 className="heading">Work Experience</h3>
        <div className="container__button">
          <button onClick={handleAddWorkExperience} className="button button--add">Add Work Experience</button>
        </div>
        <div>
          {workExperienceList}
        </div>
      </div>
    )
  }
}

export default WorkExperience

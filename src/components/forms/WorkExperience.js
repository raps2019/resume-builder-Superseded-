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
    handleShowWorkExperience,
  } = this.props;

  const workExperienceList = workExperience.map((item) => 

  item.show === true ?  
    (<div key={item.id} className='container__form container__form--work-experience'>
      <div className='grid grid--work-experience-heading'>
        <h2 className='heading2'>{item.employer && item.jobTitle ? `${item.jobTitle} (${item.employer})` : `Enter Job Details`} </h2>
        <button className='button button--toggle-show--minimize' onClick={()=>{handleShowWorkExperience(item.id)}}>Minimize</button>
      </div>
      <div className='grid grid--form'> 
        <div className='container__input'>
          <input
            type='text'
            className='input'
            value={item.jobTitle}
            onChange={(e) => handleWorkExperienceChange('jobTitle', item.id, e)}
            required>
          </input>
          <label className='input__label'>Job Title</label>
        </div>
        <div className='container__input'>
          <input
            type='text'
            className='input'
            value={item.employer}
            onChange={(e) => handleWorkExperienceChange('employer', item.id, e)}
            required>
          </input>
          <label className='input__label'>Employer</label>
        </div>
        <div className='container__input'>
          <input
            type='date'
            className='input'
            value={item.startDate}
            onChange={(e) => handleWorkExperienceChange('startDate', item.id, e)}
            required>
          </input>
          <label className='input__label'>Start Date</label>
        </div>
        <div className='container__input'>
          <input
            type='date'
            value={item.endDate}
            className='input'
            onChange={(e) => handleWorkExperienceChange('endDate', item.id, e)}
            required>
          </input>
          <label className='input__label'>End Date</label>
        </div>
        <div className='container__input'>
          <input
            type='text'
            className='input'
            value={item.city}
            onChange={(e) => handleWorkExperienceChange('city', item.id, e)}
            required>
          </input>
          <label className='input__label'>City</label>
        </div>
        <div className='container__input'>
          <input
            type='text'
            className='input'
            value={item.country}
            onChange={(e) => handleWorkExperienceChange('country', item.id, e)}
            required>
          </input>
          <label className='input__label'>Country</label>
        </div>
        <div className='container__input container__input--textarea'>
          <textarea
            type='text'
            className='input input--textarea'
            value={item.description}
            onChange={(e) => handleWorkExperienceChange('description', item.id, e)}
            required>
          </textarea>
          <label className='input__label input__label--textarea'>Description</label>
        </div>
        <button className='button button--delete' onClick={() => handleDeleteWorkExperience(item.id)}>Delete</button>
      </div>
    </div>) :
     (<div key={item.id} className='container__form container__form--work-experience'>
        <div className='grid grid--work-experience-heading grid--work-experience-heading--minimized'>
          <h2 className='heading2'>{item.employer && item.jobTitle ? `${item.jobTitle} (${item.employer})` : `Enter Job Details`} </h2>
          <button className='button button--toggle-show--maximize' onClick={()=>{handleShowWorkExperience(item.id)}}>Maximize</button>
        </div>
      </div>)
    )
  
    
      return (
      <div>
        <h1 className="heading1">Work Experience</h1>
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

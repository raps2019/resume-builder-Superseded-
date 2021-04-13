import React from 'react'
import '../styles.css'
import CvHeader from './CvHeader'

function PreviewContainer(props) {
  
  
  return (
    <div className="cv-page">
      <CvHeader personalDetails={props.personalDetails} />
    </div>
  )
}

export default PreviewContainer;

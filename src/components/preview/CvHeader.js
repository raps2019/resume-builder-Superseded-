import React from 'react'

function CvHeader(props) {
  const {personalDetails} = props;

  let addressLine1, addressLine2 = '';

  if (personalDetails.postalCode) {
    addressLine1 = `${personalDetails.address}, ${personalDetails.postalCode.toUpperCase()}`
  } else {
    addressLine1 = `${personalDetails.address}`
  }

  if (personalDetails.country) {
    addressLine2 = `${personalDetails.city}, ${personalDetails.country}`
  } else {
    addressLine2 = `${personalDetails.city}`
  }

  return (
      <div className="cv__header">
        <div className="cv__name">
          <h2>{personalDetails.firstName.toUpperCase()}</h2>
          {(personalDetails.lastName? <h2>{personalDetails.lastName.toUpperCase()}</h2> : null)}
        </div>
        <div className='cv__personal-details'>
          {(personalDetails.jobTitle ? <h3>{personalDetails.jobTitle}</h3> : null)}
          {(personalDetails.address ? <p>{addressLine1}</p> : null)}
          {(personalDetails.city ? <p>{addressLine2}</p> : null)}
          {(personalDetails.email ? <p>{personalDetails.email}</p> : null)}
          {(personalDetails.phone ? <p>{personalDetails.phone}</p> : null)}
        </div>
      </div>
  )
}

export default CvHeader
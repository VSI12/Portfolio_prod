import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1 year</span>
        </div>

        <div className="about__box">
        <i className="bx bx-briefcase-alt-2 about__icon"></i>
            <h3 className="about__title">Projects</h3>
            <span className="about__subtitle">1 year</span>
        </div>

        <div className="about__box">
        <i class='bx bxs-certification about__icon'></i>
            <h3 className="about__title">Certifications</h3>
            <span className="about__subtitle">1 year</span>
        </div>


    </div>
  )
}

export default Info
import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState ===1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={( )=> toggleTab(1)}>
                    
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>
                <div className={toggleState ===2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={( )=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experiences
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active :" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Afe Babalola University, Ado-Ekiti</h3>
                            <span className="qualification__subtitle">B.Eng. Computer Engineering</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div className=""></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Premiere Academy, Lugbe, Abuja</h3>
                            <span className="qualification__subtitle">Senior School Certificate</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2022
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active :" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Informations Systems Intern</h3>
                            <span className="qualification__subtitle">Transcorp Hilton, Abuja</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                May 2023 - October 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div className=""></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">IT Intern</h3>
                            <span className="qualification__subtitle">Institute of Human Virology Nigeria</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                June 2022 - September 2022
                            </div>
                        </div>
                        
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Data Entry Intern</h3>
                            <span className="qualification__subtitle">ABlueWhales Transport Company</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                July 2021 - September 2021
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
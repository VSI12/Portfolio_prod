import React from 'react'

const Workitems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className="work__img" /> 
        <h3 className="work__title">{item.title}</h3>
        <a href="#a" className="work__button">
            demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default Workitems
import React from 'react'

const Vehicle = ({data})=>{

  return(
    <article className = "card">
      <div className = "card-title">
        {data.name} <div className = "favorites-btn"></div>
      </div>
      <div className = "card-info-container">
        <div className = "card-info">Model: {data.model}</div>
        <div className = "card-info">Class: {data.vehicle_class}</div>
        <div className = "card-info">Passengers: {data.passengers}</div>
      </div>
    </article>
  )
}


export default Vehicle

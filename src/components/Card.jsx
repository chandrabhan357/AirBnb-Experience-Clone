import React from 'react'
import Katie from '../../public/assets/katie-zaferes.png'
import Star from "../../public/assets/star.png"

const Card = (props) => {
  console.log(props)
  return (
    <div className="card">
     <img src= {`../../public/assets/${props.img}`} className="card--image" />
     <div className="card--stats">
      <img src= {Star} className="card--star" />
      <span>{props.rating}</span>
      <span className='grey'>({props. reviewCount})</span>
      <span className='grey'>{props.location}</span>
     </div>
     <p className="card--title">{props.title}</p>
     <p className="card--price"><span className='bold'>From ${props.price}</span> / person</p>

    </div>
  )
}

export default Card
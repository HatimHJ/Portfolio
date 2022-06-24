import React from 'react'

const CardContent = ({img}) => {
  return (
    <>
      <div className="img-container">
        <img src={img} alt=""/>
      </div>
      <p className="overlay">
        <span>
          Show Image
        </span>
      </p>
    </>
  )
}

export default CardContent
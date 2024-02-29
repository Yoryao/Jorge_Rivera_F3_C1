import React from "react"
import './style/card.module.css'
const Card = ({ props }) => {

  const { cantante, nombre } = props;

  return (
    <>
      <div id="card">
        <h3 id="welcome">Tu combinación es......</h3>
        <h4 id="subtitle">{cantante} canta en {nombre}</h4>
      </div>
    </>
  )
}

export default Card
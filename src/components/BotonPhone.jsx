import React, { useState } from 'react'
import "../styles/botonPhone.css"
export default function BotonPhone() {

  const [val, setVal] = useState(false)

  function trasladar() {
    setVal((prev) => !prev)
  }

  return (
    <button onClick={trasladar} className="boton-hamburguesa">
      <div className={val ? "linea1-hamb" : ""}></div>
      <div className={val ? "linea2-hamb" : ""}></div>
      <div className={val ? "linea3-hamb" : ""}></div>
    </button>
  )
}

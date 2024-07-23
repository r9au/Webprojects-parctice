import React from 'react'
import { useState } from 'react'
import "./style.css"
const Progress = ({steps,active,progress}) => {
  const descp=["Personal Details","Business Details","Tax Details","Shipping Settings","Final Confirmation"]
  return (
    <>
    <div id="progress">
    <div id="progress-bar" style={{ width: `${((active - 1) / (steps.length - 1)) * 100}%` }}></div>
        <ul id="progress-num">
          {steps.map((step, i) => (
            <li key={step} className={`step ${i < active ? 'active' : ''}`}>
              <div className="steps">
                <img src='src/assets/tick.svg'></img>
              </div>
              <span className="desc">{descp[i]}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* <button
        id="progress-prev"
        className="btn"
        onClick={() => progress(active > 1 ? active - 1 : active)}
        disabled={active === 1}>
        Prev
      </button>
      <button
        id="progress-next"
        className="btn"
        onClick={() => progress(active < steps.length ? active + 1 : active)}
        disabled={active === steps.length}>
        Next
      </button> */}
    </>
  )
}

export default Progress

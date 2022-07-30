import React from 'react'
import './steps.css'

const Steps = ({ step, clicked, toggle, index }) => {


    return (
        <>
            <div onClick={() => toggle(index)} className={clicked === index ?  "step focus " : "step"} autoFocus={index === 0 ? true : null} >
                <div className="step__count">
                    <span>{step.count}</span>
                </div>
                {step.intro && <div className="step__intro">
                    <span>{step.intro}</span>
                </div>}
            </div>
           
        </>

        
    )
}

export default Steps

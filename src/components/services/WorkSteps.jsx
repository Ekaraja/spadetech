import React, {useState} from 'react'
import Steps from '../steps/Steps'
import { stepContents } from '../../utils/contents/steps-contents/stepContents'



const WorkSteps = () => {

    const [clicked, setClicked] = useState(0);

    	// useRef, if useRef.index === index setClicked(index)

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null);
		}
		setClicked(index);
	};
    return (
        <section className="container services-section text-center">
            <h3 className="section__title">How We Work</h3>
            <p className="section__desc">
                Our five-step audit methodology is designed to give you the most comprehensive
                assessment of your project's security posture. Here's how we work:
            </p>

            <div className="steps__container">
                <div className="step__list">
                    {stepContents.map((step, index) => {
                        return (
                            <Steps key={step.id} step={step} index={index} clicked={clicked} toggle={toggle} />
                        )
                    })}
                </div>

                <div className="step__answer">
                    {stepContents.map((step, index) => {
                        return (
                            <div key={step.id} className="step__content">
                                {clicked === index ? (<>
                                    {step.content}
                                </>) : null}
                            </div>)
                    })}
                </div>
            </div>

        </section>
    )
}

export default WorkSteps
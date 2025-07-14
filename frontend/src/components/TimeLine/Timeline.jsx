import React, { useState } from 'react'
import icon1 from '../../assets/c1.png'
import icon2 from '../../assets/c2.png'
import icon3 from '../../assets/c3.png'
import icon4 from '../../assets/c4.png'
import icon5 from '../../assets/c5.png'
import './Timeline.css'

const section1 = [
    {id: 1, icon: icon1, heading: 'Ready to Go Algos', description: '  We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.' },
    {id: 2, icon: icon2, heading: 'Internal capability building', description: 'We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.' }
]

const section2 = [
    {id: 1, icon: icon3, heading: 'Multi-source data', description: 'Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.' },
    {id: 2, icon: icon4, heading: 'Stakeholder alignment', description: 'No black boxes. Stakeholders understand the “how”, “so what” and “now what”, leading to clear decision-making trade offs.' },
    {id: 3, icon: icon5, heading: 'Continuous engagement', description: 'We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.' }

    
]

const Timeline = () => {
  const [dot, setDot] = useState(1)
  const [lineWidth, setLineWidth] = useState('10%')
  return (
    <div className='timeline-container'>
        <div className='timeline-background'></div>
        <div className='upper-section-container'>
            {section1.map(content => (
                  <div key={content.id} className='content-card'>
                <img src={content.icon} alt="card-icon"/>
                <h5 className='card-heading'>
                    {content.heading}
                </h5>
                <p className='card-description'>
                    {content.description}
                </p>
            </div>
            ))} 
        </div>
        <div style={{'--before-width': lineWidth}} className='line-container'>
            <div onClick={() => {setDot(1)
                 setLineWidth('10%')}} className={`dot ${dot === 1? 'dot-active': ''}`}></div>
            <div onClick={() => {setDot(2)
                 setLineWidth('30%')}} className={`dot ${dot === 2? 'dot-active': ''}`}></div>
            <div onClick={() => {setDot(3)
                 setLineWidth('50%')}} className={`dot ${dot === 3? 'dot-active': ''}`}></div>
            <div onClick={() => {setDot(4)
                 setLineWidth('70%')}} className={`dot ${dot === 4? 'dot-active': ''}`}></div>
            <div onClick={() => {setDot(5)
                 setLineWidth('90%')}} className={`dot ${dot === 5? 'dot-active': ''}`}></div>
        </div>
         <div style={{marginTop: '30px'}} className='upper-section-container'>
            {section2.map(content => (
                  <div key={content.id} className='content-card'>
                <img src={content.icon} alt="card-icon"/>
                <h5 className='card-heading'>
                    {content.heading}
                </h5>
                <p className='card-description'>
                    {content.description}
                </p>
            </div>
            ))} 
        </div>
    </div>
  )
}

export default Timeline
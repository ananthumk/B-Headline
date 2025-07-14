import React, { useContext, useState } from 'react'
import './Cms.css'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'

const Cms = ({setCms}) => {
  const [showEdit, setShowEdit] = useState(false)
  const [updateHeadline, setUpdateHeadline] = useState('') 
  const {url, headline, setHeadline} = useContext(AppContext)
  
  
    const addHeadline = async () => {
        try {
            const response = await axios.post(url + 'heading', {
                heading: updateHeadline
            })
            if(response.status === 200){
                setHeadline(response.data.headline.text)
                setShowEdit(false)
                setCms(false)
            }
        } catch (error) {
            console.log('Failed to add headline', error);
            
        }
    }
    

  return (
    <div className='cms-container'>
    <h1 onClick={() => setCms(false)} style={{color:'#FFF', top: '20px', right: '20px', fontSize: '24px', fontWeight: '700',
        cursor:'pointer', position:'absolute'}}>X</h1>
    <div className='edit-container'>
        <button className='buttons h-btn'>Heading</button>
        <div className='text-section'>
            {showEdit? <textarea rows={6} value={updateHeadline} onChange={(e) => setUpdateHeadline(e.target.value) }  className='text-container'/> : <div className='text-container'>
                {headline}
            </div>}
            <div className='btn-container'>
                <button className='buttons btn' onClick={() => setShowEdit(true)}>Edit</button>
                <button onClick={addHeadline} className='buttons btn'>Save</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cms
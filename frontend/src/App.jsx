
import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import { AppContext } from './context/AppContext'
import axios from 'axios'

function App() {
  const [headline, setHeadline] = useState('')
  const [showCms, setCms] = useState(false)
  const url = 'https://b-headline.onrender.com/api/'
   useEffect(() => {
      const fetchData = async () => {
        try {
           const response = await axios.get(url)
           console.log(response);
           
           if (response.status === 200){
            console.log('data',response.data);
            
             setHeadline(response.data.heading[0].text)
           }
        } catch (error) {
          console.log('Failed to fetch headline: ', error);
        }
      }
      fetchData()
  }, [])
  return (
    <AppContext.Provider value={{url , headline, showCms, setCms, setHeadline}}>
      <Home />
    </AppContext.Provider>
  )
}

export default App

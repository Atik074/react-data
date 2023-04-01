import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  
// spendtimes from local storage
  const [readData ,setReadData] = useState("")
  const spendtimes =(readTime)=>{

    const previousTimes = JSON.parse(localStorage.getItem('spendtimes'))
    if(previousTimes){
          const totallReadTime = previousTimes +  readTime
          localStorage.setItem('spendtimes' , totallReadTime)
          setReadData(totallReadTime)

    }
    else{
      localStorage.setItem('spendtimes' , readTime)
      setReadData(readTime)

    }
  }

  return (
    <div className="App">
      <Header></Header>
    <Blogs 
      spendtimes={spendtimes}
      readData ={readData} 
    ></Blogs>

  <Footer></Footer>
    </div>
  )
}

export default App

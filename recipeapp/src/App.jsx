import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import Foodlist from './components/Foodlist'
import Nav from './components/Nav'
import Container from './components/Container'
import InnerCon from './components/InnerCon'
import Fooddetails from './components/Fooddetail'

function App() {
  const [fooddata, setfooddata] = useState([])
  const [foodId, setfoodId] = useState("658615")
  return (
    <>
    <div className="app">
      <Nav/>
      <Search key={fooddata.title}fooddata={fooddata} setfooddata ={setfooddata}/>
      <Container>
        <InnerCon>
          <Foodlist setfoodId={setfoodId} fooddata={fooddata} setupfooddata={setfooddata}/>
        </InnerCon>
        <InnerCon>
          <Fooddetails foodId={foodId}/>
        </InnerCon>
        
      </Container>
      
    </div>
    </>
  )
}

export default App

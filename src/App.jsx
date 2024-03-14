
import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Navbar from './Header/Navbar'
import Shop from './Header/Shop/Shop'
import { useEffect } from 'react'
import Card from './Header/Shop/Card'


function App() {
  let [shop,setShop] = useState([])

  useEffect(()=>{
      fetch('Shop.json') 
      .then(res => res.json())
      .then(data => setShop(data))
  },[])

  let [buyNow,setBuyNow] = useState([])
  let hendelBuyNow = (buy) =>{
        setBuyNow(buy)     
  }
  
  return (
    <> 
      <Navbar></Navbar>
      <Header></Header>
       <Card buyNow={buyNow}></Card>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {shop.map((shop,index) => <Shop
         key={index}
         shop={shop}
         hendelBuyNow={hendelBuyNow}
          ></Shop>)}
        </div>
      
    </>
  )
}

export default App

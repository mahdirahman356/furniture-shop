
import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Navbar from './Header/Navbar'
import Shop from './Shop/Shop'
import { useEffect } from 'react'
import Card from './Shop/Card'


function App() {
  let [shop,setShop] = useState([])

  useEffect(()=>{
      fetch('Shop.json') 
      .then(res => res.json())
      .then(data => setShop(data))
  },[])

  let hendleDelete = (de) => {
    let deleteCard = buy.filter(buy => buy.id !== de.id)
    setBuy(deleteCard)
}

  let [buy,setBuy] = useState([])
  let hendelBuyNow = (buyNow,id) =>{
       let inExecute = buy.find(buy => buy.id === id)
       if(!inExecute){
        let newBuy = [...buy,buyNow]
        setBuy(newBuy) 
       }else{
        alert('already implemented')
       }
  }
  
  return (
    <> 
      <Navbar></Navbar>

      <Header></Header>

       <Card buy={buy} hendleDelete={hendleDelete}></Card>

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

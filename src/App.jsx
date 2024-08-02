import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Pets from './components/Pets/Pets'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const[cart, setCart] = useState([]);
  const[count, setCount] = useState(0);

  const handleCart = (pet) =>{
    if(!cart.includes(pet))
    {
      if(cart.length<3){
        const newCart = [...cart, pet];
      setCart(newCart);
      const newCount = count + 1;
      setCount(newCount)
      }
      else{
        alert("You cannot take more than 3 pets!")
      }
    }
    else{
      alert("Bruh! You choose this already!")
    }
  }

  return (
    <div>
      <Header></Header>
      <div className='flex'>
      <Pets
      handleCart={handleCart}
      ></Pets>
      <Sidebar
      count = {count}
      cart = {cart}
      ></Sidebar>
      </div>
    </div>
  )
}

export default App

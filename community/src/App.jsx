import { useState } from 'react'
import './App.css'
import FoodSpots from '../components/food_spots'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4fPY_OJ1YnGg6h0MgFNJM6aQLTmA099Bh0IRIPv7xIyX3papJk7qjsSL21S2TSo6Deg&usqp=CAU" alt='logo' />
        <h1>U-District Food Spots</h1>
        <FoodSpots />
      </div>
      
      
    </>
  )
}

export default App

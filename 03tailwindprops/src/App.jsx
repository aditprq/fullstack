import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    name: 'Aditya',
      age: 19,
      address:{
        city: 'Mumbai',
        state: 'Maharashtra'
      }
  }
  let newArr = [1,2,3,4,5,6,7,8,9,10];
  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
     <Card userName="Aditya"  post='CEO'/>
     <Card userName='Adit' myArr={newArr}/>
     <Card />
    </>
  )
}

export default App

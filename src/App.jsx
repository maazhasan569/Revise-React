import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'



function App() {
  const [count, setCount] = useState(0)
  
  const [list , setList] = useState([12,3,32,65,4,4,100,34,21,10,24])

  let temperoryArr = [...list]
  function sort() {
    for(let i = 0 ; i < temperoryArr.length ; i++) {
      for(let z = 0 ; z < temperoryArr.length - 1 ; z++){
        if(temperoryArr[z] > temperoryArr[z+1]){
          let temp = temperoryArr[z]
          temperoryArr[z] = temperoryArr[z+1]
          temperoryArr[z+1] = temp
        }
      }
    }
    setList(temperoryArr)
    console.log(list)
  }
  return (
    <>
      
      <p>bubble sort</p>
      <p>Original list</p>
      {
        temperoryArr.map((org) =>{
          return (
          <p>{org}</p>
          )
        })}
      <button onClick={sort}>Sort</button>
    </>
  )
}

export default App

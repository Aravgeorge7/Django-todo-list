import data from "./data"
import Task from "./Task.jsx"
import React, { useEffect } from "react"

export default function App() {

  const [list, setList] = React.useState(data)

  const inp = React.useRef('')

  useEffect(()=>{},[list])



  function deleteTask(id){

    setList(prev =>{
      const newArr= []
      for (let i = 0; i < prev.length; i++) {
          var old = prev[i]
          if (old.id === id) {
              continue
          } else {
              newArr.push(old)
          }
      }
      return newArr

    })


  }

  
  //for striking if completed
  function tick(id){ 
    setList(prev =>{
      const newArr= []
      for (let i = 0; i < prev.length; i++) {
          var old = prev[i]
          if (old.id === id) {
              
              newArr.push({ ...old, completed: !old.completed })
          } else {
              newArr.push(old)
          }
      }
      return newArr

    })
  }
  

  var elements = list.map((ele)=>
  
  // eslint-disable-next-line react/jsx-key
  <Task id={ele.id} completed = {ele.completed} title = {ele.title} tick = {() => tick(ele.id)}  deleted = {() => deleteTask(ele.id)}/>
  )

  

  


  function addition(){
    
    var rand = 0 
    while (true) {

      rand = Math.ceil(Math.random()*50)

      if (!list.some(item => item.id === rand)){
        break
      }

    }


    console.log(console.log(list.some(item => item.id === 1)))
    console.log(inp.current.value)

    setList(prev => {


      const newArr= []
      for (let i = 0; i < prev.length; i++) {

          newArr.push(prev[i])
      }
      

      newArr.push({
        id:rand,
        title: inp.current.value,
        completed:false
      })
      return newArr

    })

    console.log(list)

    
  }


  return (
    <div className="main">

      <h1 className="header">Todo List!</h1>
      
      <input ref = {inp} name = "new-task" className="input-box" type="text" placeholder="Add new Task"/>
      <button className="add-button" onClick={addition}>Add</button>
      
      

        {elements}

      


    
    </div>
  )
}
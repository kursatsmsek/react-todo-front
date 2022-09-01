import React, { useEffect, useState } from 'react'
import { createToDo } from '../../apiCalls'
import './style.css'
import { useNavigate } from 'react-router-dom'

const CreatePage = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem("userId") == null) {
      navigate("/auth")
    }
  }, [])

  const [data, setData] = useState({
    title: undefined,
    content: undefined,
    user: {
      name: undefined
    },
    statusColor: undefined,
    done: false
  })

  const submitEvent = () => {
    createToDo(data).then((res) => {
      alert(res.data)
      navigate('/')
    })
  }

  return (
    <div className='createPageDiv'>
      <div className='createPageContainer'>
        <h1>Create To-Do</h1>
        <div className='todoTitleInputDiv'>
          <input placeholder='Title' value={data.title || ""} onChange={e => setData({...data, title: e.target.value})} />
        </div>
        <div className='todoContentInputDiv'>
          <textarea placeholder='Content...' className='todoContentInput' value={data.content || ""} onChange={e => setData({...data, content: e.target.value})} />
        </div>
        <div className='todoUserNameDiv'>
          <input placeholder='User Name' value={data.user.name || ""} onChange={e => setData({...data, user: {name: e.target.value}})} />
        </div>
        <div className='todoStatusDiv' style={{ color:"white" }}>
          <div className='statusColorDiv' onClick={() => setData({...data, statusColor:"greenyellow"})} style={{ backgroundColor: "greenyellow"}}>{data.statusColor == "greenyellow" ? "✓" : null}</div>
          <div className='statusColorDiv' onClick={() => setData({...data, statusColor:"cadetblue"})} style={{ backgroundColor: "cadetblue"}}>{data.statusColor == "cadetblue" ? "✓" : null}</div>
          <div className='statusColorDiv' onClick={() => setData({...data, statusColor:"orange"})} style={{ backgroundColor: "orange"}}>{data.statusColor == "orange" ? "✓" : null}</div>
          <div className='statusColorDiv' onClick={() => setData({...data, statusColor:"tomato"})} style={{ backgroundColor: "tomato"}}>{data.statusColor == "tomato" ? "✓" : null}</div>
        </div>
        <div className='createTodoButtonDiv'>
          <button className='submitButton' onClick={submitEvent}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default CreatePage
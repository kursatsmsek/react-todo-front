import React, { useEffect, useState } from 'react'
import './style.css'
import { GrStatusGoodSmall } from 'react-icons/gr'
import { changeDoneStatus, deleteToDo, getTodoList } from '../../apiCalls'
import { MdDelete } from 'react-icons/md'

const Home = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    getTodoList()
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const updateTodoList = () => {
    getTodoList()
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const changeCheckBox = (id, val) => {
    changeDoneStatus(id, val).then(() => {
      updateTodoList();
    })
  }

  const deleteToDoEvent = (id) => {
    deleteToDo(id).then(() => {
      updateTodoList();
    })
  }

  return (
    data ?
    <div className='homePageDiv'>
      <div className='todoListDiv'>
        <div className='todoListContentDiv'>
          {
            data.map((item, key) => {
              return <div key={key} className='todoContainerDiv'>
                <div className='todoContainerHeaderDiv'>
                  <div className='todoLastDayDiv'>
                    {item.title}
                  </div>
                  <div className='todoHeaderRightButtonsDiv'>
                    <div className='todoCheckBoxDiv'>
                      <input type="checkbox" checked={item.done} className='completeBox' onChange={(e) => {
                        window.confirm(`${item.title} will be mark as ${item.done ? "undone" : "done"} !`) && changeCheckBox(item.id, !item.done)
                      }} />
                    </div>
                    <div className='todoDeleteDiv'>
                      <MdDelete  onClick={() => {
                        window.confirm(`${item.title} will be delete.`) && deleteToDoEvent(item.id)
                      }}/>
                    </div>
                  </div>
                </div>
                <div className='todoContainerContentDiv'>
                    <div className='todoParagraphDiv'>
                      {item.content}
                    </div>
                </div>
                <div className='todoContainerFooterDiv'>
                  <div className='todoStatusDiv' style={{ color:item.statusColor }}>
                    <GrStatusGoodSmall />
                  </div>
                  <span>{item.user.name} {item.user.surname}</span>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
    :
    <div>Loading</div>
  )
}

export default Home
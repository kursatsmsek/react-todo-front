import axios from "axios";

export const getTodoList = () => {
  return axios.get('/getToDoList')
}

export const changeDoneStatus = (idp, valp) => {
  return axios({
    method: 'put',
    url: '/changeDoneStatus',
    params: {
      id: idp,
      val: valp,
    }
  });
}

export const createToDo = (body) => {
  return axios.post('/createToDo', body)
}

export const deleteToDo = (idp) => {
  return axios({
    method: 'delete',
    url: '/deleteToDo',
    params: {
      id: idp
    }
  });
}
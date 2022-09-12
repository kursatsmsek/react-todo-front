import axios from "axios";

export const getTodoList = () => {
  return axios({
    method: 'get',
    url: '/todo/getToDoList',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
  });
}

export const login = (data) => {
  return axios.post('/user/login', data);
}

export const register = (data) => {
  return axios({
    method: 'post',
    url: '/user/create',
    data: data,
  });
}


export const changeDoneStatus = (idp, valp) => {
  return axios({
    method: 'put',
    url: '/todo/changeDoneStatus',
    params: {
      id: idp,
      val: valp,
    },
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
  });
}

export const createToDo = (body) => {
  return axios({
    method: 'post',
    url: '/todo/createToDo',
    data: body,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
  });
}

export const deleteToDo = (idp) => {
  return axios({
    method: 'delete',
    url: '/todo/deleteToDo',
    params: {
      id: idp
    },
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
  });
}
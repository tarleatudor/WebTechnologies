import { useEffect, useState } from 'react'
import User from './User'
import './UserList.css'
import { RegularUsers, PowerUsers } from './UsersByType'

const SERVER = 'http://localhost:8080'

function UserList (props) {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(`${SERVER}/users`)
    const data = await response.json()
    console.warn(data)
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
  <div>
    <h2>Regular users</h2>
    <RegularUsers users={users} />

    <h2>Power users</h2>
    <PowerUsers users={users} />
  </div>
)
}

export default UserList
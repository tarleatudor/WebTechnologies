import { useState } from 'react'
import './UserForm.css'

function UserForm (props) {
  const { onAdd } = props
  const [userName, setUserName] = useState('')
  const [fullName, setFullName] = useState('')
  const [type, setType] = useState('')

  const options = [
    { label: 'regular', value: 'regular-user' },
    { label: 'power', value: 'power-user' }
  ]

  const addUser = () => {
    onAdd({
      username: userName, // 🔑 FIX CRITIC
      fullName,
      type
    })
  }

  return (
    <div className='user-form'>
      <input
        type='text'
        placeholder='username'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <input
        type='text'
        placeholder='fullName'
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value=''>select type</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <input type='button' value='add' onClick={addUser} />
    </div>
  )
}

export default UserForm

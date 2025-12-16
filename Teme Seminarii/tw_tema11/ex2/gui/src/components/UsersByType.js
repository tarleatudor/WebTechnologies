import User from './User'

function RegularUsers ({ users }) {
  return (
    <div className="user-list">
      {users
        .filter(u => u.type === 'regular-user')
        .map(u => <User key={u.id} item={u} />)}
    </div>
  )
}

function PowerUsers ({ users }) {
  return (
    <div className="user-list">
      {users
        .filter(u => u.type === 'power-user')
        .map(u => <User key={u.id} item={u} />)}
    </div>
  )
}

export { RegularUsers, PowerUsers }

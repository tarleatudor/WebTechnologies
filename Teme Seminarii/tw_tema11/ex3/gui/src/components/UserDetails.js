function UserDetails({ user }) {
  if (!user) {
    return <div>Select a user to see details</div>
  }

  return (
    <div className="user-details">
      <h3>User details</h3>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Full name:</b> {user.fullName}</p>
      <p><b>Type:</b> {user.type}</p>
    </div>
  )
}

export default UserDetails
